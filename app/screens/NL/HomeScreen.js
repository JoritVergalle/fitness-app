import React from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Modal,
    Alert
} from 'react-native';
import _ from 'lodash';

import TrainingSchemaListPowerItem from '../../components/TrainingSchemaListPowerItem';
import TrainingSchemaListCardioWattItem from '../../components/TrainingSchemaListCardioWattItem';
import TrainingSchemaListCardioKMUItem from '../../components/TrainingSchemaListCardioKMUItem';

import ModalFillCardioWatt from '../../components/ModalFillCardioWatt';
import ModalFillCardioKMU from '../../components/ModalFillCardioKMU';
import ModalFillPower from '../../components/ModalFillPower';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            user: '',
            item: '',
        };
    };

    componentDidMount() {
        const { navigation } = this.props;
        if(this.state.user !== navigation.getParam('user')){
            this.setState({user: navigation.getParam('user')});
        }
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    _openEdit = (item) => {
        this.setState({KMU: item.KMU, item: item}, () => {
            this.setModalVisible(true);
            }
        );
    };

    _openDetails = (item) => {
        this.props.navigation.navigate('Detail', {
            item: item,
        });
    };

    _onCancel = () => {
        this.setModalVisible(false)
    };

    _onEdit = (item) => {
        fetch('https://fitness-club-backend.herokuapp.com/API/users/' + this.state.user._id + '/exercises/' + item._id, {
            method: "PUT",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(function (response) {

        }, function (error) {
            console.error(error);
        });
        this.setModalVisible(false);
    };

    _onDelete = (item) => {
        console.log(item);
        Alert.alert(
            'Bevestig',
            'Bent u zeker dat u deze oefening wilt verwijderen?',
            [
                {text: 'Nee'},
                {
                    text: 'Ja', onPress: () => {
                        fetch('http://fitness-club-backend.herokuapp.com/API/users/' + this.state.user._id + '/exercises/' + item._id, {
                            method: 'delete'
                        }).then(response =>
                            response.json().then(json => {
                                return json;
                            })
                        );
                        let user = this.state.user;
                        _.remove(user.trainingsSchema, (itemToDelete) => {
                            return itemToDelete.name === item.name;
                        });
                        this.setModalVisible(false);
                    }
                }
            ]
        );
    };

    _renderItem = ({item}) => {
        if(item.type === 'CardioWatt'){
            return <TrainingSchemaListCardioWattItem
                id={item._id}
                openDetails={this._openDetails}
                openEdit={this._openEdit}
                item={item}
            />
        } else if (item.type === 'CardioKMU') {
            return <TrainingSchemaListCardioKMUItem
                id={item._id}
                openDetails={this._openDetails}
                openEdit={this._openEdit}
                item={item}
            />
        } else if (item.type === 'Power') {
            return <TrainingSchemaListPowerItem
                id={item._id}
                openDetails={this._openDetails}
                openEdit={this._openEdit}
                item={item}
            />
        }
    };

    _fillModal() {
        if(this.state.item.type === 'CardioWatt') {
            return <ModalFillCardioWatt
                item={this.state.item}
                onCancel={this._onCancel}
                onEdit={this._onEdit}
                onDelete={this._onDelete}
            />
        }
        else if(this.state.item.type === 'CardioKMU'){
            return <ModalFillCardioKMU
                item={this.state.item}
                onCancel={this._onCancel}
                onEdit={this._onEdit}
                onDelete={this._onDelete}
            />
        } else if (this.state.item.type === 'Power') {
            return <ModalFillPower
                item={this.state.item}
                onCancel={this._onCancel}
                onEdit={this._onEdit}
                onDelete={this._onDelete}
            />
        }
    }

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
                        {this._fillModal()}
                </Modal>
                <FlatList
                data={this.state.user.trainingsSchema}
                keyExtractor={item => item._id}
                renderItem={this._renderItem}
                extraData={this.state}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020'
    }
});


