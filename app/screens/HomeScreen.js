import React from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';

import TrainingSchemaListItem from '../components/TrainingSchemaListItem';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: 'Jorit',
                password: '123',
                trainingsSchema: [{
                    "_id":"5b4f4388d1e0bd202c4b0860",
                    "name":"Fiets",
                    "description":"stap erop, getalleks ingeven & letsgoooh",
                    "image":"https://d30y9cdsu7xlg0.cloudfront.net/png/185394-200.png",
                    "type":"Cardio",
                    "watt":350,
                    "minutes":15,
                },
                {
                    "_id":"5b4f4388d1e0bd202c4b0860",
                    "name":"Loopband",
                    "description":"stap erop, getalleks ingeven & letsgoooh",
                    "image":"https://d30y9cdsu7xlg0.cloudfront.net/png/185394-200.png",
                    "type":"Cardio",
                    "watt":350,
                    "minutes":15,
                },
                {
                    "_id":"5b4f4388d1e0bd202c4b0860",
                    "name":"Loopband",
                    "description":"stap erop, getalleks ingeven & letsgoooh",
                    "image":"https://d30y9cdsu7xlg0.cloudfront.net/png/185394-200.png",
                    "type":"Cardio",
                    "watt":350,
                    "minutes":15,
                },
                {
                    "_id":"5b4f4388d1e0bd202c4b0860",
                    "name":"Loopband",
                    "description":"stap erop, getalleks ingeven & letsgoooh",
                    "image":"https://d30y9cdsu7xlg0.cloudfront.net/png/185394-200.png",
                    "type":"Cardio",
                    "watt":350,
                    "minutes":15,
                },
                {
                    "_id":"5b4f4388d1e0bd202c4b0860",
                    "name":"Loopband",
                    "description":"stap erop, getalleks ingeven & letsgoooh",
                    "image":"https://d30y9cdsu7xlg0.cloudfront.net/png/185394-200.png",
                    "type":"Cardio",
                    "watt":350,
                    "minutes":15,
                },
                {
                    "_id":"5b4f4388d1e0bd202c4b0860",
                    "name":"Loopband",
                    "description":"stap erop, getalleks ingeven & letsgoooh",
                    "image":"https://d30y9cdsu7xlg0.cloudfront.net/png/185394-200.png",
                    "type":"Cardio",
                    "watt":350,
                    "minutes":15,
                },
                {
                    "_id":"5b4f4388d1e0bd202c4b0860",
                    "name":"Shoulder press",
                    "description":"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"",
                    "image":"https://d30y9cdsu7xlg0.cloudfront.net/png/185394-200.png",
                    "type":"Power",
                    "KG":35,
                    "amount":15,
                }]
                ,_id:"5b4f4a8e753a00106cc9ceac",
            }
        };
    };

    componentDidMount() {
        const { navigation } = this.props;
        if(this.state.user !== navigation.getParam('user')){
            this.setState({user: navigation.getParam('user')});
        }
    }

    _openEdit = (item) => {
        console.log('hai');
    };

    _openDetails = (item) => {
        this.props.navigation.navigate('Detail', {
            item: item,
        });
    };

    _renderItem = ({item}) => (
        <TrainingSchemaListItem
            id={item._id}
            openDetails={this._openDetails}
            openEdit={this._openEdit}
            item={item}
        />
    );

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                data={this.state.user.trainingsSchema}
                keyExtractor={item => item._id}
                renderItem={this._renderItem}
                // renderItem={({item}) =>
                //     <View style={styles.itemContainer}>
                //         <View style={styles.rowContainer}>
                //             <Image style={styles.exerciseImage} source={{uri: item.image}}/>
                //             <View style={styles.columnContainer}>
                //                 <Text style={styles.exerciseTitleText}>{item.name}</Text>
                //                 {/*<Text>{item.type === 'Cardio' ? item.watt + ' Watt voor ' + item.minutes + ' minuten' :'todo' }</Text>*/}
                //                 {item.type === 'Cardio' ? <View><Text style={styles.exerciseSmallText}>{item.watt + ' Watt'}</Text><Text style={styles.exerciseSmallText}>{item.minutes + ' Minuten'}</Text></View> : <View><Text style={styles.exerciseSmallText}>{item.KG + ' Kg'}</Text><Text style={styles.exerciseSmallText}>{'3 x '+ item.amount}</Text></View> }
                //             </View>
                //         </View>
                //         <View style={styles.iconContainer}>
                //             <TouchableOpacity onPress={this._onPressEdit()}>
                //                 <Image style={styles.editImage} source={require('../images/editIcon.png')}/>
                //             </TouchableOpacity>
                //             <TouchableOpacity onPress={this._onPressShowDetails(item)}>
                //                 <Image style={styles.detailImage} source={require('../images/detailIcon.png')}/>
                //             </TouchableOpacity>
                //         </View>
                //     </View>
                // }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: '#202020'
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        marginBottom: 5
    },
    columnContainer: {
        flexDirection: 'column',
    },
    rowContainer: {
        flexDirection: 'row',
    },
    iconContainer: {
        justifyContent: 'space-evenly'
    },
    exerciseTitleText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 25
    },
    exerciseSmallText: {
        color: '#FFFFFF'

    },
    exerciseImage: {
        width: 75,
        height: 75,
    },
    editImage: {
        width: 30,
        height: 30,
    },
    detailImage: {
        width: 30,
        height: 30,
    },
});


