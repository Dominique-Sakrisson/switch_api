export const getAvatar = async () => {
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

export const getRickNM = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character/');
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

// module.exports = {
//     getAvatar,
//     getRickNM,
// }
