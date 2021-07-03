import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder={'Search your food...'}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit} />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 30,
        backgroundColor: 'white',
        borderColor: 'lightgray',
        height: 45,
        borderRadius: 5,
        marginHorizontal: 25,
        flexDirection: 'row',
        marginBottom: 30
    },
    inputStyle: {
        fontSize: 14,
        flex: 1
    },
    iconStyle: {
        fontSize: 20,
        color: 'lightgray',
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;
