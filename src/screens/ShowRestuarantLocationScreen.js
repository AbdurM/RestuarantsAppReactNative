import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Text } from 'react-native';


const ShowRestuarantLocationScreen = ({ navigation }) => {

    const coordinates = navigation.getParam('coordinates');
    const name = navigation.getParam('name');

    return (
        <MapView
            flex={1}
            initialRegion={
                {
                    latitude: coordinates.latitude,
                    longitude: coordinates.longitude,
                    latitudeDelta: 0.00922,
                    longitudeDelta: 0.00099,
                }
            }

            onLayout={() => { this.mark.showCallout() }}>

            <Marker
                ref={ref => { this.mark = ref; }}
                coordinate={{ latitude: coordinates.latitude, longitude: coordinates.longitude }}
                pinColor={'red'}
                title={name} />
        </MapView >
    )
};

export default ShowRestuarantLocationScreen;