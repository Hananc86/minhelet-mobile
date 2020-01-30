import React from 'react';
import { View, Text, StyleSheet } from  'react-native';
import SearchBar from './SearchBar';

const Home = () => {
    return (
        <View style={styles.home}>
            <SearchBar />
            <Text style={styles.text}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        backgroundColor: '#282840',
        ...StyleSheet.absoluteFillObject,
    },
    text: {
        color: 'white'
    }
});

export default Home;