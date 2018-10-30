import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <RootNavigator />;
  }
}

import LoginScreen from "./app/screens/NL/LoginScreen";
import HomeScreen from "./app/screens/NL/HomeScreen";
import DetailScreen from "./app/screens/NL/DetailScreen";
import SettingsScreen from "./app/screens/NL/SettingsScreen";
import RegisterScreen from './app/screens/NL/RegisterScreen';
import RegisterScreen_ENG from './app/screens/ENG/RegisterScreen_ENG';

const RootNavigator = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
        },
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: "Trainingsschema"
            }
        },
        Detail: {
            screen: DetailScreen,
            navigationOptions: {
                title: "Detail"
            }
        },
        Settings: {
            screen: SettingsScreen,
            navigationOptions: {
                title: "Settings"
            }
        },
        Register: {
            screen: RegisterScreen,
            navigationOptions: {
                title: "Registeer"
            }
        },
        Register_ENG: {
            screen: RegisterScreen_ENG,
            navigationOptions: {
                title: "Register"
            }
        }
    },
    {
        initialRouteName: 'Login',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#0F0F0F',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);


// export default class App extends React.Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>Open up App.js to start working on your app!</Text>
//                 <Text>Changes you make will automatically reload.</Text>
//                 <Text>Shake your phone to open the developer menu.</Text>
//             </View>
//         );
//     }
// }