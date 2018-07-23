import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Image, TextInput, Button} from 'react-native';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
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

        return fetch('https://fitness-club-backend.herokuapp.com/API/users/5b4f4a8e753a00106cc9ceac')
            .then((response) => response.json())
            .then((responseJson) => {
                this.props.navigation.navigate('Home', {
                    user: responseJson,
                });
                //return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
        // this.props.navigation.navigate('Home', {
        //     user: {
        //         name: this.state.name,
        //         password: this.state.password,
        //         trainingsSchema: [{
        //             "_id":"5b4f4388d1e0bd202c4b0860",
        //             "name":"Fiets",
        //             "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\\"\",\n",
        //             "image":"https://d30y9cdsu7xlg0.cloudfront.net/png/185394-200.png",
        //             "type":"Cardio",
        //             "watt":350,
        //             "minutes":15,
        //         }]
        //         ,_id:"5b4f4a8e753a00106cc9ceac",
        //     }
        // });
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={styles.iconContainer}>
                    <Image style={styles.icon}
                           source={require('../images/club9400.jpg')}/>
                </View>
                <View style={styles.textContainer}>
                    <TextInput style={styles.inputField}
                               fontWeight={'bold'}
                               placeholder={'Username'}
                               placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                               onChangeText={(value) => this._onChangeName(value)}/>
                    <TextInput style={styles.inputField}
                               fontWeight={'bold'}
                               placeholder={'Password'}
                               placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                               secureTextEntry={true}
                               onChangeText={(value) => this._onChangePassword(value)}/>
                    <Button  onPress={this._onPressLogin.bind(this)}
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
        // ???
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
