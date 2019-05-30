//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import HeaderScreen from '../../component/header';
import { DIMENSION } from '../../module/';
import ButtomScreen from '../../component/buttom';
import { observer, inject } from 'mobx-react';

@inject('products')
@observer
class BuyNowScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            phone: null
        };
    }
    onChanged(text) {
        let newText = '';
        let numbers = '0123456789';

        for (var i = 0; i < text.length; i++) {
            if (numbers.indexOf(text[i]) > -1) {
                newText = newText + text[i];
            }
            else {
                alert("please enter numbers only");
            }
        }
        this.setState({ phone: newText });
    }

    _showAlert() {
        const { name, phone } = this.state;
        Alert.alert(
            'Finished the Shot',
            'Thanks YOU',
            [
                { text: 'OK', onPress: () => this.props.products.order(name,phone) },
                { text: 'Cancel', onPress: () => this.props.navigation.navigate("CartScreen") },
            ],
            { cancelable: false }
        )
    }
    _onGoBack = () => {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1, backgroundColor: '#F2F3F5' }}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.header}>
                            <HeaderScreen
                                title='BuyNow'
                            />
                        </View>
                        <View style={styles.body}>
                            <View style={{ height: DIMENSION(15) }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: DIMENSION(5), }}>
                                    <Text style={{ color: '#000', fontSize: 20, fontFamily: 'Courier', }}>Let's finish the shot</Text>
                                </View>
                                <View style={styles.tittelcardaddproduct}>
                                    <Text style={styles.nametitel}>Name:</Text>
                                    <TextInput
                                        placeholderTextColor={'rgba(0,0,0,0.5)'}
                                        autoCapitalize={'none'}
                                        style={styles.textInput}
                                        onChangeText={(value) => this.setState({name : value })}
                                    />
                                </View>
                                {/* <View style={{height: DIMENSION(5)}}></View> */}
                                <View style={styles.tittelcardaddproduct}>
                                    <Text style={styles.nametitel}>Phone:</Text>
                                    <TextInput
                                        placeholderTextColor={'rgba(0,0,0,0.5)'}
                                        autoCapitalize={'none'}
                                        keyboardType='numeric'
                                        style={styles.textInput}
                                        onChangeText={(value) => this.onChanged(value)}
                                        value={this.state.myNumber}
                                        maxLength={10}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: DIMENSION(100), height: DIMENSION(10) }}>
                        <View style={{ position: 'absolute', bottom: 0 }}>
                            <View style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
                                <View style={{ marginHorizontal: DIMENSION(0), width: DIMENSION(65), height: DIMENSION(10), alignContent: 'flex-start', justifyContent: 'center' }}>
                                    <TouchableOpacity
                                        onPress={this._onGoBack}
                                        style={styles.buttomBuy} >
                                        <Text style={{ color: '#FFF' }}>Cancel</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity 
                                    onPress = {() => {
                                        this._showAlert()
                                    }}
                                    style={styles.buttomBuy} >
                                        <Text style={{ color: '#FFF' }}>Finish</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F53B55',
    },
    body: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    stylessubSlideText: {
        fontSize: 25,
        fontWeight: '900',
        marginLeft: 25,
        letterSpacing: 0.5,
        marginTop: 5,
    },
    Interested: {
        fontSize: 20,
        fontWeight: '600',
        letterSpacing: 0.5,
        color: 'rgba(0,0,0,0.5)',
    },
    buttomBuy: {
        width: DIMENSION(35),
        height: DIMENSION(10),
        backgroundColor: '#F53B55',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,

    },
    tittelcardaddproduct: {
        paddingHorizontal: DIMENSION(5),
        paddingVertical: DIMENSION(5),

    },
    nametitel: {
        color: '#20898A',
        fontWeight: '900',
        paddingVertical: DIMENSION(2),

    },
    textInput: {
        width: DIMENSION(90),
        height: 50,
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: DIMENSION(3),
        borderColor: '#20898A',
        color: '#000',
    },
    buttomBuy: {
        width: DIMENSION(35),
        height: DIMENSION(10),
        backgroundColor: '#F53B55',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,

    },
});
//make this component available to the app
export default BuyNowScreen;
