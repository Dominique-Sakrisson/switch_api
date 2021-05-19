import React from 'react'
import PropTypes from 'prop-types'
import RickNMCharacter from './RickNMorty/RickNMCharacter'
import AvatarCharacter from './Avatar/AvatarCharacter'
import { Link} from 'react-router-dom'

const CharacterList = ({characters, params}) => {
    return (
    <ul aria-label='characters'>
        {characters.map(character => {
            switch(params) {
                case 'ricknm': {
                    return (<li key={`${character.id}-${character.name}`}>
                        <Link to={`/${params}/${character.id}`}>
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
                        <Link to={`/${params}/${character.id}`}>
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
        )}
    </ul>
    )
   
}

CharacterList.propTypes = {
    characters: PropTypes.array.isRequired,
    params: PropTypes.string.isRequired 
}
export default CharacterList;
