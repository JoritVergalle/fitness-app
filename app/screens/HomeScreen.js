import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Modal,
    TextInput,
    Alert
} from 'react-native';
import _ from 'lodash';

import TrainingSchemaListItem from '../components/TrainingSchemaListItem';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            titleExercise: '',
            watt: '',
            minutes: '',
            type: '',
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
                    "name":"Loopband1",
                    "description":"stap erop, getalleks ingeven & letsgoooh",
                    "image":"https://d30y9cdsu7xlg0.cloudfront.net/png/185394-200.png",
                    "type":"Cardio",
                    "watt":350,
                    "minutes":15,
                },
                {
                    "_id":"5b4f4388d1e0bd202c4b0860",
                    "name":"Loopband2",
                    "description":"stap erop, getalleks ingeven & letsgoooh",
                    "image":"https://d30y9cdsu7xlg0.cloudfront.net/png/185394-200.png",
                    "type":"Cardio",
                    "watt":350,
                    "minutes":15,
                },
                {
                    "_id":"5b4f4388d1e0bd202c4b0860",
                    "name":"Loopband3",
                    "description":"stap erop, getalleks ingeven & letsgoooh",
                    "image":"https://d30y9cdsu7xlg0.cloudfront.net/png/185394-200.png",
                    "type":"Cardio",
                    "watt":350,
                    "minutes":15,
                },
                {
                    "_id":"5b4f4388d1e0bd202c4b0860",
                    "name":"Loopband4",
                    "description":"stap erop, getalleks ingeven & letsgoooh",
                    "image":"https://d30y9cdsu7xlg0.cloudfront.net/png/185394-200.png",
                    "type":"Cardio",
                    "watt":350,
                    "minutes":15,
                },
                {
                    "_id":"5b4f4388d1e0bd202c4b0860",
                    "name":"Loopband5",
                    "description":"stap erop, getalleks ingeven & letsgoooh",
                    "image":"https://d30y9cdsu7xlg0.cloudfront.net/png/185394-200.png",
                    "type":"Cardio",
                    "watt":350,
                    "minutes":15,
                },
                {
                    "_id":"5b4f4388d1e0bd202c4b0860",
                    "name":"Shoulder press6",
                    "description":"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"",
                    "image":"https://d30y9cdsu7xlg0.cloudfront.net/png/185394-200.png",
                    "type":"Power",
                    "kg":35,
                    "amount":15,
                }]
                ,_id:"5b4f4a8e753a00106cc9ceac",
            }
        };
    };

    componentDidMount() {
        // const { navigation } = this.props;
        // if(this.state.user !== navigation.getParam('user')){
        //     this.setState({user: navigation.getParam('user')});
        // }
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    _openEdit = (item) => {
        this.setState({titleExercise: item.name, type: item.type, watt: item.watt, minutes: item.minutes, kg: item.kg, amount: item.amount}, () => {
            this.setModalVisible(true);
            }
        );
    };

    _openDetails = (item) => {
        this.props.navigation.navigate('Detail', {
            item: item,
        });
    };

    _onChangeWatt = (value) => {
        this.setState({
            watt: value
        });
    };

    _onChangeMinutes = (value) => {
        this.setState({
            minutes: value
        });
    };

    _onChangeKg = (value) => {
        this.setState({
            kg: value
        });
    };

    _onChangeAmount = (value) => {
        this.setState({
            amount: value
        });
    };

    _onEdit = () => {
        let user = this.state.user;
        if(this.state.type === 'Cardio') {
            _.find(user.trainingsSchema, { 'name': this.state.titleExercise}).watt = _.toInteger(this.state.watt);
            _.find(user.trainingsSchema, { 'name': this.state.titleExercise}).minutes = _.toInteger(this.state.minutes);
        }
        else {
            _.find(user.trainingsSchema, { 'name': this.state.titleExercise}).kg = _.toInteger(this.state.kg);
            _.find(user.trainingsSchema, { 'name': this.state.titleExercise}).amount = _.toInteger(this.state.amount);
        }
        // _.find(user.trainingsSchema, { 'name': this.state.titleExercise}).watt = _.toInteger(this.state.watt);
        // _.find(user.trainingsSchema, { 'name': this.state.titleExercise}).minutes = _.toInteger(this.state.minutes);
        this.setState({user: user}, () => {
            this.setModalVisible(false);
        })
    };

    _onCancel = () => {
        this.setModalVisible(false)
    };

    _onDelete = () => {
        Alert.alert(
            'Bevestig',
            'Bent u zeker dat u deze oefening wilt verwijderen?',
            [
                {text: 'Nee'},
                {text: 'Ja', onPress: () => {
                    let user = this.state.user;
                    _.remove(user.trainingsSchema, (item) => {return item.name === this.state.titleExercise;});
                    this.setModalVisible(false);
                }}
            ]
        );
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
                <Modal
                    style={{margin: 0}}
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalTitleContainer}>
                            <Text style={styles.titleText}>{this.state.titleExercise}</Text>
                        </View>
                        <View style={styles.modalContentContainer}>

                            {this.state.type === 'Cardio' ? <View><View style={styles.rowContainer}>
                                    <Text style={styles.textModal}>Watt: </Text>
                                    <TextInput
                                        style={styles.textInputValues}
                                        keyboardType='numeric'
                                        value={_.toString(this.state.watt)}
                                        onChangeText={(value) => this._onChangeWatt(value)}/>
                                </View><View style={styles.rowContainer}>
                                <Text style={styles.textModal}>Minuten: </Text>
                                <TextInput
                                style={styles.textInputValues}
                                keyboardType='numeric'
                                value={_.toString(this.state.minutes)}
                                onChangeText={(value) => this._onChangeMinutes(value)}/>
                            </View></View>
                                :
                                <View><View style={styles.rowContainer}>
                                    <Text style={styles.textModal}>Kg: </Text>
                                    <TextInput
                                        style={styles.textInputValues}
                                        keyboardType='numeric'
                                        value={_.toString(this.state.kg)}
                                        onChangeText={(value) => this._onChangeKg(value)}/>
                                </View><View style={styles.rowContainer}>
                                    <Text style={styles.textModal}>3x: </Text>
                                    <TextInput
                                        style={styles.textInputValues}
                                        keyboardType='numeric'
                                        value={_.toString(this.state.amount)}
                                        onChangeText={(value) => this._onChangeAmount(value)}/>
                                </View></View> }


                            {/*<View style={styles.rowContainer}>*/}
                                {/*<Text style={styles.textModal}>Watt: </Text>*/}
                                {/*<TextInput*/}
                                    {/*style={styles.textInputValues}*/}
                                    {/*keyboardType='numeric'*/}
                                    {/*value={_.toString(this.state.watt)}*/}
                                    {/*onChangeText={(value) => this._onChangeWatt(value)}/>*/}
                            {/*</View>*/}
                            {/*<View style={styles.rowContainer}>*/}
                                {/*<Text style={styles.textModal}>Minuten: </Text>*/}
                                {/*<TextInput*/}
                                    {/*style={styles.textInputValues}*/}
                                    {/*keyboardType='numeric'*/}
                                    {/*value={_.toString(this.state.minutes)}*/}
                                    {/*onChangeText={(value) => this._onChangeMinutes(value)}/>*/}
                            {/*</View>*/}



                            <View style={styles.touchableContainer}>
                                <TouchableOpacity style={styles.cancelTouchable}
                                                  onPress={this._onCancel.bind(this)}>
                                    <Text style={styles.cancelText}>CANCEL</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.editTouchable}
                                                  onPress={this._onEdit.bind(this)}>
                                    <Text style={styles.editText}>EDIT</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.deleteTouchable}
                                              onPress={this._onDelete.bind(this)}>
                                <Text style={styles.editText}>DELETE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <FlatList
                data={this.state.user.trainingsSchema}
                keyExtractor={item => item._id}
                renderItem={this._renderItem}
                extraData={this.state}
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
        backgroundColor: '#202020'
    },
    modalContainer: {
        flex: 1,
        padding: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
    //    backgroundColor: 'rgba(0, 0, 0, 0.85)'
    },
    modalTitleContainer: {
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: '#202020',
        backgroundColor: '#BCCF03',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContentContainer: {
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: '#202020',
        backgroundColor: '#FFFFFF',
        padding: 20
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    touchableContainer: {
        paddingVertical: 25,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    editTouchable: {
        borderWidth: 2,
        borderColor: '#BCCF03',
        backgroundColor: '#BCCF03',
        width: 100,
    },
    cancelTouchable: {
        borderWidth: 2,
        borderColor: '#BCCF03',
        width: 100,
    },
    deleteTouchable: {
        borderWidth: 2,
        borderColor: '#991541',
        backgroundColor: '#991541'
    },
    titleText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 35,
    },
    textModal: {
        color: '#242424',
        fontWeight: 'bold',
        fontSize: 25,
    },
    textInputValues: {
        height: 40,
        paddingHorizontal: 5,
        fontSize: 25,
        color: '#242424',
        width: 100,
        textAlign: 'center'
    },
    editText: {
        fontSize: 25,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    cancelText: {
        fontSize: 25,
        color: '#BCCF03',
        textAlign: 'center',
    }
});


