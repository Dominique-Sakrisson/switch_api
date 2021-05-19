export const getAvatar = async (char) => {
    if(char){
        const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${char}`);
        const json = await res.json();
        return {
            id: json._id,
            name: json.name,
            image: json.photoUrl,
            allies: json.allies,
            enemies: json.enemies,
            affiliation: json.affiliation
        }    
    }
    const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters');
    const json = await res.json();
    const resArray = json.map(item => {
        return {
            id: item._id,
            name: item.name,
            image: item.photoUrl,
            allies: item.allies,
            enemies: item.enemies,
            affiliation: item.affiliation
        }
    })
    return resArray;
}

export const getRickNM = async (char) => {
    if(char){
        const res = await fetch(`https://rickandmortyapi.com/api/character/${char}`);
        const json = await res.json();
        return {
            id: json.id,
            name: json.name,
            image: json.image,
            status: json.status,
            species: json.species,
            gender: json.gender,
            location: json.location,
            episodes : json.episode
        }    
    }const res = await fetch('https://rickandmortyapi.com/api/character/');
    const {results}= await res.json();
    const resArray = results.map(item => {
        return {
            id: item.id,
            name: item.name,
            image: item.image,
            status: item.status,
            species: item.species,
        }
    })
    return resArray;
}

