//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { DIMENSION } from '../../module/';
import { observer, inject } from 'mobx-react';




@inject('products')
@observer
// create a component
class CartListProduct extends Component {
    componentDidMount() {
        this.props.products.fetchProduct();
    }
    _onDetail = () => {
        let { product, nav } = this.props;
        nav.navigate('FormEditAndDelete',{product})
    }
    _goToEditAndDelete = () => {
        const { nav } = this.props
        nav.navigate('FormEditAndDelete', {product})
    }
    render() {
        const { loading, product } = this.props
        return (
            <View style={{ flex: 1 }}>
                <View style={{height:DIMENSION(75), width:DIMENSION(100)}}>
                    <TouchableOpacity
                        onPress={this._onDetail}
                        style={styles.card} >
                        <View style={styles.cardBody}>
                            <Image
                                style={styles.image}
                                source={{ uri: product.imageUrl }} />
                            <Text style={styles.cardText}>{product.productName}</Text>
                            <Text style={styles.cardTextPrice}>Brand: {product.brand}</Text>
                            <Text style={styles.cardTextPrice}>Country: {product.country}</Text>
                            <Text style={styles.cardTextPrice}>${product.price}</Text>
                            <Text style={styles.cardTextDiscount}>${product.discount}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: DIMENSION(40),
        height: DIMENSION(32),
        marginBottom: DIMENSION(2),
        borderRadius: 10,
    },
    card: {
        width: DIMENSION(48),
        height: DIMENSION(70),
        shadowOffset:{  width: 1,  height: 2,  },
        shadowColor: '#000',
        shadowOpacity: 0.2,
        marginHorizontal: 2,
        marginTop: 5,
    },
    cardBody: {
        backgroundColor: '#F9E0E1',
        alignItems: 'center',
        borderRadius: 15,
        marginHorizontal: DIMENSION(1),
        height: DIMENSION(72),
        paddingVertical: DIMENSION(2),
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
        padding: 0,
    },
    cardText: {
        marginVertical: 2.5,
        color: '#070707', 
        fontWeight: '500', 
        letterSpacing: 1.2,
        fontSize: 18, 
        fontFamily: 'Times New Roman',
        paddingHorizontal: 15,
        textAlign:'center'
    },
    cardTextPrice:{
        fontWeight: '500', 
        color: '#000000', 
        letterSpacing: 1.5, 
        fontSize: 15,
        textAlign:'center'
    },
    cardTextDiscount:{
        textDecorationLine: 'line-through', 
        color: '#505050', 
        letterSpacing: 1.5, 
        fontSize: 15, 
        textAlign:'center'
    },
    imageheart: {
        width: DIMENSION(5),
        height: DIMENSION(5),
    },
    activeView: {
        width: 45,
        height: 45,
        borderColor: '#AED09A',
        borderWidth: 2,
    },

    textheader: {
        color: '#84878A',
    },
});

//make this component available to the app
export default CartListProduct;
