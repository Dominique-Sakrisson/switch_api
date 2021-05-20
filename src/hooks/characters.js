import React, {useState, useEffect} from 'react'
import {chooseApi} from '../services/ApiHandler'

export const useCharacters = (api) => {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
            chooseApi(api)
            .then(setCharacters)
            .finally(() =>{
            setLoading(false);
        });
    },[])
    return {characters, loading};
}
