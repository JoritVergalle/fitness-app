import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

export default class LoginScreen extends React.Component {

    _onPressShowEdit() {
        this.props.openEdit(this.props.item);
    }

    _onPressShowDetails() {
        this.props.openDetails(this.props.item);
    }

    render() {
        return (
                <View style={styles.itemContainer}>
                    <View style={styles.rowContainer}>
                        <Image style={styles.exerciseImage} source={{uri: this.props.item.image}}/>
                        <View style={styles.columnContainer}>
                            <Text style={styles.exerciseTitleText}>{this.props.item.name}</Text>
                            {/*<Text>{item.type === 'Cardio' ? item.watt + ' Watt voor ' + item.minutes + ' minuten' :'todo' }</Text>*/}
                            {this.props.item.type === 'Cardio' ? <View><Text style={styles.exerciseSmallText}>{this.props.item.watt + ' Watt'}</Text><Text style={styles.exerciseSmallText}>{this.props.item.minutes + ' Minuten'}</Text></View> : <View><Text style={styles.exerciseSmallText}>{this.props.item.kg + ' Kg'}</Text><Text style={styles.exerciseSmallText}>{'3 x '+ this.props.item.amount}</Text></View> }
                        </View>
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={this._onPressShowEdit.bind(this)}>
                            <Image style={styles.editImage} source={require('../images/editIcon.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._onPressShowDetails.bind(this)}>
                            <Image style={styles.detailImage} source={require('../images/detailIcon.png')}/>
                        </TouchableOpacity>
                    </View>
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
