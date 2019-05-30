//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { DIMENSION } from '../module';

// create a component
class ButtomScreen extends Component {
    render() {
        return (
            <View style={{ width: DIMENSION(100), height: DIMENSION(50) }}>
                <View style={{ position: 'absolute', bottom: 0 }}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
                        <View style={{ marginHorizontal: 25, width: DIMENSION(50), height: DIMENSION(10), alignContent: 'flex-start', justifyContent: 'center' }}>
                            <Text
                                minimumFontScale={5}>
                                Total: $
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.buttomBuy} >
                                <Text style={{ color: '#FFF' }}>Buy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
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
export default ButtomScreen;
