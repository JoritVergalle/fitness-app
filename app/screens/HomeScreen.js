import React from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            oefening: {name: 'De Loopband', description: 'hier komt de uitleg over hoe je het best de loopband kunt gebruiken, pjetty hard rite. Het belangrijkste is dadt je je niet overdoet '}
        };
    };

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');


        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        this.props.navigation.navigate('Detail', {
                            name: this.state.oefening.name,
                            description: this.state.oefening.description,
                        });
                    }}
                />
            </View>
        );
    }
}