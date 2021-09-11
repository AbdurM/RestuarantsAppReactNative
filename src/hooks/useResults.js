import { useState, useEffect } from "react";
import yelp from '../api/yelp';
import * as Location from 'expo-location';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied');
              return;
            }
      
            let location = await Location.getCurrentPositionAsync({});
            console.log(location.coords.latitude);

            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            console.log(err);
            setErrorMessage('Something went wrong')
        }

    };

    useEffect(() => { searchApi('burger') }, []);

    return [searchApi, results, errorMessage];
};

