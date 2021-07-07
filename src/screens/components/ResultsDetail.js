import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {


    const getOpenString = () => {
        let openString = "";
        openString += result.hours.is_open_now ? 'Open' : 'Closed'
        return openString;
    }

    return <View style={styles.container}>
        <Image
            style={styles.imageStyle}
            source={{ uri: result.image_url }}
        />
        <Text style={styles.name}>{result.name}</Text>
        <View style={styles.detailsView}>
            <Text style={styles.ratingText}>{result.rating} star rating</Text>
            <Text style={styles.pricingText}>{result.price}</Text>
        </View>
    </View>
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        borderColor: 'white',
        padding: 10,
        borderRadius: 16,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 5
    },
    detailsView: {
        flexDirection: 'row'
    },
    imageStyle: {
        height: 180,
        width: 150,
        borderRadius: 14,
        marginBottom: 5
    },
    name: {
        fontSize: 12,
        height: 15,
        width: 150,
        color: 'gray',
        flexWrap: 'wrap',
        flexShrink: 1,
        fontWeight: 'bold',
        marginBottom: 5
    },
    ratingText: {
        flex: 1,
        fontSize: 10,
        fontWeight: 'bold',
        color: 'orange',
        opacity: 0.8
    },
    pricingText: {
        flex: 0.2,
        alignSelf: 'flex-end',
        fontSize: 10,
        fontWeight: 'bold',
        color: 'green',
        opacity: 0.8
    }
});

export default ResultsDetail;