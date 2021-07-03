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
        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}

        <View style={styles.Divider} />
        <ScrollView>
            <ResultsList results={filterResultsByPrice('$')} title='Budget Friendly' />
            <ResultsList results={filterResultsByPrice('$$')} title='Regular Prices' />
            <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' />
        </ScrollView>
    </>
};

const styles = StyleSheet.create({
    Divider: {
        paddingHorizontal: 0,
        height: 10,
        backgroundColor: 'lightgray',
        opacity: 0.3,
        marginBottom: 30
    }
});

export default SearchScreen;