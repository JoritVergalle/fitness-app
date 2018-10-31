import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Image, TextInput, Button} from 'react-native';
import { REACT_APP_BACKEND_URL } from 'react-native-dotenv'

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'jorit',
            password: 'vergalle'
        };
    };

    static navigationOptions = {
        header: null,
    };

    _onChangeName(value) {
        this.setState({
            name: value
        });
    };

    _onChangePassword(value) {
        this.setState({
            password: value
        })
    };

    _onPressLogin() {

        return fetch(REACT_APP_BACKEND_URL + 'API/login', {
            method: "POST",
            body: JSON.stringify({
                "username": this.state.name,
                "password": this.state.password
            }),
            headers: {
                "Content-Type": "application/json"
            },
        }).then((response) => response.json())
            .then((responseJson) => {
                this.props.navigation.navigate('Home', {
                    user: responseJson,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    _onNavigateRegister() {
        this.props.navigation.navigate('Register');
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={styles.iconContainer}>
                    <Image style={styles.icon}
                           source={require('../../images/club9400.jpg')}/>
                    <Button onPress={this._onNavigateRegister.bind(this)}
                             title="Nieuw account"
                             color="#BCCF03"/>
                </View>
                <View style={styles.textContainer}>
                    <TextInput style={styles.inputField}
                               fontWeight={'bold'}
                               placeholder={'Username'}
                               onChangeText={(value) => this._onChangeName(value)}/>
                    <TextInput style={styles.inputField}
                               fontWeight={'bold'}
                               placeholder={'Password'}
                               secureTextEntry={true}
                               onChangeText={(value) => this._onChangePassword(value)}/>
                    <Button onPress={this._onPressLogin.bind(this)}
                             title="Login"
                             color="#BCCF03"/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020'
    },
    iconContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    textContainer: {
        padding: 15
    },
    icon: {
        width: 240,
        height: 180,
    },
    inputField: {
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: '#FFFFFF',
    }
});
