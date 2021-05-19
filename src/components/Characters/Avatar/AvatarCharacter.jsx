import React from 'react'
import PropTypes from 'prop-types'

const AvatarCharacter = ({name, image, allies, enemies, affiliation = ''}) => {
    return <figure>
            <img src={image} alt={name}/>
            <h2> Name: {name}</h2> 
            <p>{(allies.length > 1 ? 'Allies: ' : 'Only Friend: ')} {allies}</p> 
            <p>{(enemies.length > 1 ? 'Enemies: ' : 'Mortal Enemy: ')}{enemies}</p> 
            <p>{(affiliation.length > 1 ? 'Affiliations: ' : 'Affiliation: ')}{affiliation}</p>
        </figure>
}

AvatarCharacter.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    allies: PropTypes.array.isRequired,
    enemies: PropTypes.array.isRequired,
    affiliation: PropTypes.string.isRequired,
}

export default AvatarCharacter;
