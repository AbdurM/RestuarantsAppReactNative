import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from './components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from './components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByRating = (min, max) => {
        return results.filter(x => x.rating >= min && x.rating < max);
    };

    return <View style={styles.container}>
        <Text style={styles.Header}>Find the best rated{"\n"}Restaurants here!</Text>
        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView} >
            <ResultsList results={filterResultsByRating(4, 5)} title='Best rated' />
            <ResultsList results={filterResultsByRating(3, 4)} title='Regular' />
            <ResultsList results={filterResultsByRating(0, 3)} title='Poor rating' />
        </ScrollView>
    </View>
};

SearchScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container: {
        marginTop:40,
        backgroundColor: 'transparent',
        flex: 1
    },
    Header: {
        color: "gray",
        fontSize: 25,
        marginHorizontal: 25,
        marginTop: 20,
        fontWeight: 'bold'

    },
    Divider: {
        paddingHorizontal: 0,
        height: 10,
        backgroundColor: 'lightgray',
        opacity: 0.3,
        marginBottom: 30
    }
});

export default SearchScreen;