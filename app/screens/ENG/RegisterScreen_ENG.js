import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Text, TextInput, Button} from 'react-native';
import { REACT_APP_BACKEND_URL } from 'react-native-dotenv'

export default class RegisterScreen_ENG extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <Button
                    onPress={() => navigation.replace('Register')}
                    title="NL"
                    color="#BCCF03"
                />
            )
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        };
    };

    componentDidMount() {
        this.props.navigation.setParams({ goDutch: this._goDutch });
    }

    _goDutch() {
        this.props.navigation.navigate('Register');
    }

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

    _onPressRegister() {
        return fetch(REACT_APP_BACKEND_URL + 'API/register', {
            method: "POST",
            body: JSON.stringify({
                "username": this.state.name,
                "password": this.state.password
            }),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(this.props.navigation.goBack());
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={styles.registertextContainer}>
                    <Text style={styles.registerText}>Enter username & password</Text>
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
                    <Button onPress={this._onPressRegister.bind(this)}
                            title="Register"
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
    registerText: {
        color: "#BCCF03",
        fontSize: 35,
        fontWeight:'bold',
        textAlign: 'center'
    },
    registertextContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    textContainer: {
        padding: 15
    },
    inputField: {
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: '#FFFFFF',
    }
});
