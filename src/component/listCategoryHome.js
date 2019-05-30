//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { DIMENSION } from '../module';

class ListCategoryHome extends Component {
    _onDetail = () => {
        const { nav } = this.props
        nav.navigate('ListCountry')
    }
    render() {
        return (
            <TouchableOpacity
                onPress={this._onDetail}
                style={styles.card} >
                <View style={styles.cardBody}>
                        <Image
                            style={styles.image}
                            source={this.props.categoryImage} />
                        <Text style={styles.cardText}>{this.props.titleCategory}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: DIMENSION(12),
        height: DIMENSION(12),
    },
    card: {
        flex: 1,
    },
    cardBody: {
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
    cardText: {
        color: '#333',
        color: '#070707',
        fontWeight: '500',
        letterSpacing: 1.5,
        fontSize: 15,
        marginHorizontal: 25,
       
    },
    
});
export default ListCategoryHome;



