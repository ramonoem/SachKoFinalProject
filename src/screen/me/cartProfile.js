//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { DIMENSION } from '../../module/';
import { observer, inject } from 'mobx-react';




@inject('products')
@observer
class CartProfileScreen extends Component {
    _onDetail = () => {
        const { nav } = this.props;
        this.props.products.profileOrder()
        nav.navigate('FlatListOrderProducts', { product: this.props.product })
    }
    render() {
        const profile = this.props.product;
        return (
            <TouchableOpacity
                onPress={() => this._onDetail()}
                style={styles.card} >
                <View style={styles.cardBody}>
                    <Text style={[styles.cardText, {
                        color: '#070707',
                        fontWeight: '700',
                        letterSpacing: 1.5,
                        fontSize: 15,
                        height: DIMENSION(5)
                    }]}>{profile.name}</Text>
                    <Text style={[styles.cardText, {
                        fontWeight: '500',
                        color: '#000000',
                        letterSpacing: 1.5,
                        fontSize: 12,
                    }]}>Phone: {profile.phone}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: DIMENSION(30),
        height: DIMENSION(20),
        marginBottom: DIMENSION(5)
    },
    card: {
        width: DIMENSION(48),
        height: DIMENSION(20),
        shadowOffset: { width: 1, height: 2, },
        shadowColor: '#000',
        shadowOpacity: 0.2,
        marginHorizontal: 2,
        marginTop: DIMENSION(5),
        // margin: 5,
    },
    cardText: {
        marginVertical: 2.5,
        color: '#333',
    },
    cardBody: {
        backgroundColor: '#85C7E5',
        alignItems: 'center',
        borderRadius: 15,
        marginHorizontal: DIMENSION(1),
        paddingVertical: 10,
        width: DIMENSION(47),
        borderColor: '#FFF',
        borderWidth: 0.2,

    },
    imageheart: {
        width: DIMENSION(5),
        height: DIMENSION(5),
    },
    textheader: {
        color: '#84878A',
    },
});
//make this component available to the app
export default CartProfileScreen;
