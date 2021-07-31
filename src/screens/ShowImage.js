import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import MapView from 'react-native-maps';

const ShowImageScreen = ({ navigation }) => {
    const uri = navigation.getParam('uri');
    return (
        <View flex={1}>
            <Image
                flex={1}
                source={{ uri }}
                style={styles.Image}
            />
        </View>
    )
};

ShowImageScreen.navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('title');

    console.log(title);
    return {
        headerTitle: title
    }
}

const styles = StyleSheet.create({
    image: {
        height: 130,
        width: 180,
        marginTop: 10,
        borderRadius: 20,
        marginRight: 10
    }
});

export default ShowImageScreen;

