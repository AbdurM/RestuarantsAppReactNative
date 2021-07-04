import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from './components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from './components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        //price === $ || $$ ||$$$
        return results.filter(x => x.price === price);
    };

    return <>
        <Text style={styles.Header}>Find a restuarant {"\n"}based on your budget!</Text>
        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
            <ResultsList results={filterResultsByPrice('$')} title='Budget Friendly' />
            <ResultsList results={filterResultsByPrice('$$')} title='Regular' />
            <ResultsList results={filterResultsByPrice('$$$')} title='Expensive' />
        </ScrollView>
    </>
};

const styles = StyleSheet.create({
    Header: {
        color: "gray",
        fontSize: 25,
        marginHorizontal: 25,
        marginTop: 15,
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