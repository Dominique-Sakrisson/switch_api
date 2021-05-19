import React, {useState, useEffect} from 'react'
import AvatarCharacter from '../../components/Characters/Avatar/AvatarCharacter'
import RickNMCharacter from '../../components/Characters/RickNMorty/RickNMCharacter'
import styles from './style.css'
import {useCharacterDetails} from '../../hooks/characterDetails'
import {useParams} from 'react-router-dom'

const DetailsPage = ({match}) => {
    const {id, api} = useParams();
    const {character, loading} = useCharacterDetails(id, api);
    
    if(loading) return <h1>loading</h1>
    switch(api) {
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
