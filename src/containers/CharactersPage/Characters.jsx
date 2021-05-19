import React, {useState, useEffect} from 'react'
import CharacterList from '../../components/Characters/CharacterList'
import {chooseApi} from '../../services/ApiHandler'

const Characters = ({match}) => {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
      chooseApi(match.params.api)
      .then(setCharacters)
      .finally(() =>{
          setLoading(false);
      });
    },[])


    if(loading) return <h1>loading..</h1>
    return <CharacterList characters={characters} params={match.params.api}/>;
}

export default Characters;
