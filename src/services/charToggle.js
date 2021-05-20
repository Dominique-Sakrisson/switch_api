import React from 'react'
import {Link} from 'react-router-dom'
import RickNMCharacter from '../components/Characters/RickNMorty/RickNMCharacter'
import AvatarCharacter from '../components/Characters/Avatar/AvatarCharacter'

export default function charToggle(api, character) {
    console.log(api)
    switch(api) {
        case 'ricknm': {
            return (<li key={`${character.id}`}>
                <Link to={`/${api}/${character.id}`}>
                    <RickNMCharacter
                        name={character.name}
                        status={character.status}
                        species={character.species}
                        image={character.image}
                    />
                </Link>
            </li>)
            break;
        }
        case 'avatar': {
            return(<li key={character.id}>
                <Link to={`/${api}/${character.id}`}>
                    <AvatarCharacter
                        name={character.name}
                        image={character.image}
                        allies={character.allies}
                        enemies={character.enemies}
                        affiliation={character.affiliation}
                    />
                </Link>
            </li>)
            break;
        }
    }
}
