import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import yelp from '../../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
        console.log(result);
    }

    const getAddress = () => {
        let address = "";
        if (result.location.address1 != "")
            address += `${result.location.address1}`
        if (result.location.city != "")
            address += `,\n${result.location.city}`
        return address;

    };

    const getOpenString = () => {
        let openString = "";
        openString += result.hours.is_open_now ? 'Open' : 'Closed'
        return openString;
    }


    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return <View style={{ flex: 1 }}>
        <View style={styles.upperView}>
            <Image
                source={{ uri: result.image_url }}
                style={{ flex: 1 }}
            />
        </View>

        <View style={styles.lowerView}>
            <Text style={styles.title}>{result.name}</Text>
            <View style={styles.detailView}>
                <View style={styles.subView1}>
                    <Text style={styles.subText1}>{result.display_phone}</Text>
                    <Text style={styles.subText2}>{getOpenString()}</Text>
                </View>
                <View style={styles.verticalDivider} />
                <View style={styles.subView2}>
                    <Text style={styles.subText2}>{getAddress()}</Text>
                </View>
            </View>
            <View style={styles.horizontalDivider} />

            <FlatList
                style={{ height: 50, marginLeft: 20 }}
                data={result.photos}
                horizontal
                keyExtractor={(photo) => photo}
                renderItem={({ item }) =>
                    <Image
                        source={{ uri: item }}
                        style={styles.image}
                    />
                }
            />
        </View>

    </View >
}

const styles = StyleSheet.create({
    upperView: {
        flex: 1
    },
    lowerView: {
        marginTop: -50,
        flex: 1.5,
        backgroundColor: 'white',
        borderRadius: 40
    },
    detailView: {
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    subView1: {
        alignItems: 'flex-start',
        alignSelf: 'flex-start'
    },
    verticalDivider: {
        height: 70,
        width: 2,
        marginHorizontal: 55,
        alignSelf: 'center',
        backgroundColor: 'lightgray',
        opacity: 0.5
    },
    horizontalDivider: {
        height: 2,
        marginHorizontal: 30,
        marginVertical: 20,
        backgroundColor: 'lightgray',
        opacity: 0.5
    },
    subview2: {
        alignItems: 'flex-end',
        alignSelf: 'flex-end'
    },
    title: {
        alignItems: 'center',
        marginLeft: 25,
        marginTop: 25,
        color: '#52747E',
        fontSize: 25,
        fontWeight: 'bold',
        opacity: 0.85

    },
    image: {
        height: 100,
        width: 100,
        marginTop: 10,
        borderRadius: 20,
        marginRight: 10
    },
    subText1: {
        alignSelf: 'flex-start',
        color: 'gray'
    },
    subText2: {
        marginTop: 10,
        color: 'gray'
    }
});

export default ResultsShowScreen;