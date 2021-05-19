import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

const RickNMCharacter= ({name='', image='', status='', species='', location=[], episodes=[]}) => {
    return <figure className={styles.figure} role='figure' aria-label='rickNMFig'>
            <img src={image} alt={name}/>
            <h2>Name: {name}</h2>
            <p> Status: {status} </p>
            <p> Species: {species} </p>
            {(location) ? <div>
                <p>Location: {location.name}</p>  
                </div> : <span></span>}
            {(episodes) ?<div className={styles.episodes}> Episodes: {episodes.map(episode =>(
                <p>{episode}</p>
            ))} </div> : <span></span>} 
        </figure>
}

RickNMCharacter.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired
}
export default RickNMCharacter;
