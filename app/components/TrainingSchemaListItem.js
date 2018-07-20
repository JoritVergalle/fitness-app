import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Image, TextInput, Button, Text} from 'react-native';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        };
    };


    render() {
        return (
            <Text>Heey</Text>
        );
    }
}

const styles = StyleSheet.create({

});
