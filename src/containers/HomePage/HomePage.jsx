import React, {useState, useEffect} from 'react'
import ApiList from '../../components/Apis/ApiList.jsx'

const ApiPage = () => {
    const [loading, setLoading] = useState(true);
    const [apis] = useState(['ricknm', 'avatar' ]);
    return <ApiList apis={apis}/>
}

export default ApiPage;
