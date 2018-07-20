import React from 'react';
import { View, Text, Image } from 'react-native';

export default class DetailScreen extends React.Component {
    // static navigationOptions = {
    //     title: 'Details',
    // };

    render() {
        const { navigation } = this.props;
        const name = navigation.getParam('name', 'no-name');
        const description = navigation.getParam('description', 'no description');
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#242424'}}>
                <Text style={{padding: 5, fontSize: 35, fontWeight:'bold', textDecorationLine: 'underline', color:'#409915'}}>{name}</Text>
                {/*<Image source={{uri: 'https://image.freepik.com/iconen-gratis/stok-man-lopen-op-een-loopband_318-47657.jpg'}}*/}
                       {/*style={{width: '100%', height:200, resizeMode: 'contain'}}/>*/}
                <Text style={{textAlign: 'center', color: 'white'}}>{description}</Text>
            </View>
        );
    }
}