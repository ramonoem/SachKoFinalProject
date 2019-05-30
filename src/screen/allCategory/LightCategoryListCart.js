//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { DIMENSION } from '../../module';

// create a component
class LightCategoryListCartCategoryScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => this._queryCategoryType('BEEF')}
                    style={styles.storeCardUSA}>
                    <View>
                        <Image
                            style={styles.image}
                            source={require('../../image/usa.png')} />
                    </View>
                    <View>
                        <Text style={styles.cardText}>BEEF </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F2F3F5',
    },
    storeCardUSA: {
        backgroundColor: '#48B6FB',
        //justifyContent: 'center',
        //alignItems: 'center',
        //flex: 1,
        //marginRight: 15,
        borderRadius: 15,
    },
    // storeCardCanada: {
    //     backgroundColor: '#FDBB35',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     flex: 1,
    //     marginRight: 15,
    //     borderRadius: 15,
    // },
    image: {
        width: DIMENSION(10),
        height: DIMENSION(10),
        marginBottom: 2,

    },
    cardText: {
        color: '#fff',
        fontWeight: '400',
        fontSize: 12,
        width: DIMENSION(30),
    },
});

//make this component available to the app
export default LightCategoryListCartCategoryScreen;
