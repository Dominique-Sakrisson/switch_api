import React, {useState, useEvent, useEffect} from 'react'
import {chooseApi} from '../services/ApiHandler'

export const useCharacterDetails = (id, api) => {
    //passed unused functions here for ability to add buttons to the page for displaying different api's
    const [loading, setLoading] = useState(true)
    const [character, setCharacter] = useState({});

    useEffect(() => {
        chooseApi(api, id)
        .then((character) => setCharacter(character)).finally(setLoading(false))
    }, []);
    return {character, loading};
}
