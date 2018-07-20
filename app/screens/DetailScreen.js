import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class DetailScreen extends React.Component {
    // static navigationOptions = {
    //     title: 'Details',
    // };

    render() {
        const { navigation } = this.props;
        //const name = navigation.getParam('name', 'no-name');
        //const description = navigation.getParam('description', 'no description');
        const item = navigation.getParam('item');

        return (
            <View style={styles.container}>

                <Text style={styles.titleText}>{item.name}</Text>
                <Text style={{textAlign: 'center', color: 'white'}}>{item.description}</Text>
                <Image style={styles.exerciseImage} source={{uri: item.image}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#202020'
    },
    titleText: {
        padding: 5,
        fontSize: 35,
        fontWeight:'bold',
        textDecorationLine: 'underline',
        color:'#BCCF03'
    },
    exerciseImage: {
        width: 150,
        height: 150,
    },
});