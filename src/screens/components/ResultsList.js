import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';


const ResultsList = ({ title, results, navigation }) => {

    if (!results.length) {
        return null;
    }

    return <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={results}
            keyExtractor={result => result.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                        <ResultsDetail result={item} />
                    </TouchableOpacity>
                );
            }
            }
        />
    </View>
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    titleStyle: {
        color: '#52747E',
        alignSelf: 'flex-start',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
        borderRadius: 10,
        padding: 3
    }
});

export default withNavigation(ResultsList);
