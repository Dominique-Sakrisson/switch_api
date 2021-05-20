import React, {useState, useEffect} from 'react'
import CharacterList from '../../components/Characters/CharacterList'
import {chooseApi} from '../../services/ApiHandler'
import {useParams} from 'react-router-dom'
import {useCharacters} from '../../hooks/characters'

const Characters = () => {
    const {api} = useParams();
    const {characters, loading} = useCharacters(api);

    if(loading) return <h1>loading..</h1>
    
    return <CharacterList characters={characters} params={api}/>;
}

export default Characters;
