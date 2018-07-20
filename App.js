import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <RootNavigator />;
  }
}

import LoginScreen from "./app/screens/LoginScreen";
import HomeScreen from "./app/screens/HomeScreen";
import DetailScreen from "./app/screens/DetailScreen";
import SettingsScreen from "./app/screens/SettingsScreen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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