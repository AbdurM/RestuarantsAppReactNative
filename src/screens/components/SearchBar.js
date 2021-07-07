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
        height: 60,
        borderRadius: 15,
        marginHorizontal: 25,
        flexDirection: 'row',
        marginBottom: 15,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 5
    },
    inputStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1
    },
    iconStyle: {
        fontSize: 25,
        color: 'gray',
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;
