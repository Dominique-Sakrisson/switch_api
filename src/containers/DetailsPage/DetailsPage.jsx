import React, {useState, useEffect} from 'react'
import AvatarCharacter from '../../components/Characters/Avatar/AvatarCharacter'
import RickNMCharacter from '../../components/Characters/RickNMorty/RickNMCharacter'
import {chooseApi} from '../../services/ApiHandler'
import styles from './style.css'

const DetailsPage = ({match}) => {
    //passed unused functions here for ability to add buttons to the page for displaying different api's
    const [pageContent, setPageContent] = useState(match.params.api);
    const [characterId, setCharacterId] = useState(match.params.id);
    const [loading, setLoading] = useState(true)
    const [character, setCharacter] = useState({});

    useEffect(() => {
        chooseApi(pageContent, characterId)
        .then((character) => setCharacter(character)).finally(setLoading(false))
    }, []);
   
    if(loading) return <h1>loading</h1>
    switch(pageContent) {
        case 'avatar' :{
            return (
                <>
                <AvatarCharacter 
                    name={character.name} 
                    image={character.image} 
                    allies={character.allies} 
                    enemies={character.enemies} 
                    affiliation={character.affiliation} 
                />
                </>)
                break;
        }
        case 'ricknm' :{
            return (
                <>
                {/* <h1>there is a character here</h1> 
                <img src={character.image}/>
                <h2> Name: {character.name}</h2> 
                    <p>Allies: {character.allies}</p> 
                    <p>Enemies: {character.enemies}</p> 
                    <p> Affiliation: {character.affiliation}</p> */}
                <RickNMCharacter 
                    name={character.name} 
                    image={character.image} 
                    status={character.status} 
                    species={character.species} 
                    location={character.location}
                    episodes={character.episodes}
                />
                </>)
                break;
        }
        default: {
            <span>I Dont know of that api</span>
        }
    }
}

export default DetailsPage;
