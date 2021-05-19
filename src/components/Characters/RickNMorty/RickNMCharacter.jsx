import React from 'react'
import PropTypes from 'prop-types'

const RickNMCharacter= ({name, image, status, species}) => {
    return <figure>
            <img src={image} alt={name}/>
            <h2>Name: {name}</h2>
            <p> Status: {status} </p>
            <p> Species: {species} </p>
        </figure>
}

RickNMCharacter.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired
}
 export default RickNMCharacter;
