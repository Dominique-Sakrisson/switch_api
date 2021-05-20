import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import charToggle from '../../services/charToggle'

const CharacterList = ({characters}) => {
    const {api} = useParams();
    return (
    <ul aria-label='characters'>
        {characters.map(character => {
            return charToggle(api, character);
        }
        )}
    </ul>
    )
}

CharacterList.propTypes = {
    characters: PropTypes.array.isRequired,
}
export default CharacterList;
