//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { DIMENSION } from '../../module';
import { observer, inject } from 'mobx-react';


@inject('products')
@observer
class CartCategoryScreen extends Component {
    _onDetail = () => {
        const { nav } = this.props
        this.props.products.fetchProduct()
        nav.navigate('Detail',{product:this.props.product})
    }
    render() {
        const products = this.props.product
        return (
            <TouchableOpacity
            onPress={this._onDetail}
            style={styles.card} >
             {/* <ActivityIndicator 
            size="large" 
            color="#0000ff"
            animating = {loading} /> */}
            <View style={styles.cardBody}>
                <Image
                    style={styles.image}
                    source={{uri: products.imageUrl}} />
                <Text style={styles.cardText}>{products.productName}</Text>
                <Text style={styles.cardTextPrice}>${products.price}</Text>
                <Text style={styles.cardTextDiscount}>${products.discount}</Text>
            </View>
        </TouchableOpacity>
        );
    }
}

// define your styles

const styles = StyleSheet.create({
    image: {
        width: DIMENSION(40),
        height: DIMENSION(32),
        marginBottom: DIMENSION(2),
        borderRadius: 10,
    },
    card: {
        width: DIMENSION(47),
        height: DIMENSION(60),
        shadowOffset:{  width: 1,  height: 2,  },
        shadowColor: '#000',
        shadowOpacity: 0.2,
        marginHorizontal: DIMENSION(1)
    },
    cardBody: {
        backgroundColor: '#F9E0E1',
        alignItems: 'center',
        borderRadius: 15,
        marginHorizontal: DIMENSION(1),
        height: DIMENSION(57),
        paddingVertical: 10,
        width: DIMENSION(47),
        borderColor: '#FFF',
        borderWidth: 0.2,

    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
        paddingVertical: 10,

    },
    cardText: {
        marginVertical: 2.5,
        color: '#070707', 
        fontWeight: '900', 
        letterSpacing: 1.2,
        fontSize: 14, 
        fontFamily: 'Arial',
        paddingHorizontal: 15,
        textAlign:'center'
    },
   
    imageheart: {
        width: DIMENSION(5),
        height: DIMENSION(5),
    },
    cardTextPrice:{
        fontWeight: '500', 
        color: '#000000', 
        letterSpacing: 1.5, 
        fontSize: 15,
    },
    cardTextDiscount:{
        textDecorationLine: 'line-through', 
        color: '#505050', 
        letterSpacing: 1.5, 
        fontSize: 11, 
    },
    textheader: {
        color: '#84878A',
    },
});

//make this component available to the app
export default CartCategoryScreen;
