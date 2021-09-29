import { useState, useEffect } from "react";
import yelp from '../api/yelp';
import * as Location from 'expo-location';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [location, setLocation] = useState(null);

    const searchApi = async (searchTerm) => {
        try {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied');
              return;
            }
      
            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);

            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    latitude: currentLocation.coords.latitude,
                    longitude: currentLocation.coords.longitude
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            console.log(err);
            setErrorMessage('Something went wrong')
        }

    };

    useEffect(() => { searchApi('burger') }, []);

    return [searchApi, results, location, errorMessage];
};

