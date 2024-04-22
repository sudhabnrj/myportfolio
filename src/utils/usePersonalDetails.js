import { useState, useEffect } from 'react';
const usePersonalDetails = () => {
    const [personalInfo, setPersonalInfo] = useState('');

    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://api.github.com/users/sudhabnrj');
        const json = await data.json();
        setPersonalInfo(json);
        //console.log(json);
    };

    return personalInfo;

}
export default usePersonalDetails;