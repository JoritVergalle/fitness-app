import React from 'react';
import {View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';
import _ from 'lodash';

export default class ModalFillCardioWatt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item,
            KMU: this.props.item.KMU,
            minutes: this.props.item.minutes,
        };
    };

    _onChangeKMU = (value) => {
        this.setState({
            KMU: value
        });
    };

    _onChangeMinutes = (value) => {
        this.setState({
            minutes: value
        });
    };

    _onCancel() {
        this.props.onCancel();
    };

    _onEdit = () => {
        const item = this.state.item;
        item.KMU = this.state.KMU;
        item.minutes = this.state.minutes;
        this.setState({item: item}, this.props.onEdit(this.state.item));
    };

    _onDelete = () => {
        this.props.onDelete(this.state.item);
    };

    render() {
        return (
            <View style={styles.modalContainer}>
                <View style={styles.modalTitleContainer}>
                    <Text style={styles.titleText}>{this.state.item.name}</Text>
                </View>
                <View style={styles.modalContentContainer}>
                    <View><View style={styles.rowContainer}>
                        <Text style={styles.textModal}>Km/u: </Text>
                        <TextInput
                            style={styles.textInputValues}
                            keyboardType='numeric'
                            value={_.toString(this.state.KMU)}
                            onChangeText={(value) => this._onChangeKMU(value)}/>
                    </View><View style={styles.rowContainer}>
                        <Text style={styles.textModal}>Minuten: </Text>
                        <TextInput
                            style={styles.textInputValues}
                            keyboardType='numeric'
                            value={_.toString(this.state.minutes)}
                            onChangeText={(value) => this._onChangeMinutes(value)}/>
                    </View>

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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        padding: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.35)'
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
    titleText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 35,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    touchableContainer: {
        paddingVertical: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    editText: {
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    cancelText: {
        fontSize: 20,
        color: '#BCCF03',
        textAlign: 'center',
    }
});