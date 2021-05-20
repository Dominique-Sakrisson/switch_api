import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const AvatarCharacter = ({name, image = '', allies = [], enemies = [], affiliation = ''}) => {
    return <figure className={styles.figure} role='figure' aria-label='avatarFig'>
            <img src={image} alt={name}/>
            
            <h2> Name: {name}</h2>
            {(allies.length === 0 ? 'No allies' : 
            <p>{(allies.length > 1 ? 'Allies: ' : 'Best Friend: ')} {allies}</p> )}
            {(enemies.length === 0 ? 'No enemies' :  
            <p>{(enemies.length > 1 ? 'Enemies: ' : 'Mortal Enemy: ')}{enemies}</p> )}
            <p> Affiliation: {affiliation}</p>
        </figure>
}

AvatarCharacter.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    allies: PropTypes.array.isRequired,
    enemies: PropTypes.array.isRequired,
    affiliation: PropTypes.string.isRequired
}


export default AvatarCharacter;
