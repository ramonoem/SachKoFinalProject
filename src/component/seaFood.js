//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import { DIMENSION } from '../module';
import { observer, inject } from 'mobx-react';


@inject('products')
@observer
class SeaFoodHomeScreen extends Component {
    componentDidMount() {
        this.props.products.fetchProduct();
    }
    _onDetail = () => {
        const { nav } = this.props
        this.props.products.fetchProduct()
        nav.navigate('Detail', {product:this.props.product})
    } 
  
    _queryCategorySeaFood(SEAFOOD) {
        this.props.products.queryCategorySeaFood(SEAFOOD)
    }

    render() {
        const  queriedCategoryTypeSeaFood  = this.props.product

        return (
            <TouchableOpacity
                onPress={this._onDetail}
                style={styles.card} >
                <View style={styles.cardBody}>
                    <Image
                        style={styles.image}
                        source={{uri: queriedCategoryTypeSeaFood.imageUrl}}/>
                    <Text style={styles.cardText}>{queriedCategoryTypeSeaFood.productName}</Text>
                    <Text style={styles.cardTextPrice}>${queriedCategoryTypeSeaFood.price}</Text>
                    <Text style={styles.cardTextDiscount}>${queriedCategoryTypeSeaFood.discount}</Text>

                </View>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    image: {
        width: DIMENSION(90),
        height: DIMENSION(40),
        borderRadius: 10,
    },
    card: {
        width: DIMENSION(100),
        height: DIMENSION(20),
        shadowOffset:{  width: 1,  height: 2,  },
        shadowColor: '#000',
        shadowOpacity: 0.2,
        marginHorizontal: 5,
        marginTop: 5,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        // paddingHorizontal: 15,
        paddingVertical: 10,
        padding: 0,

    },
    cardText: {
        marginVertical: 2.5,
        color: '#000', 
        fontWeight: '800', 
        letterSpacing: 1.2,
        fontSize: 20, 
        fontFamily: 'Arial',
        paddingHorizontal: 15,
        textAlign:'center'
    },
    cardBody: {
        backgroundColor: '#85C7E5',
        alignItems: 'center',
        borderRadius: 15,
        height: DIMENSION(65),
        paddingVertical: 10,
        width: DIMENSION(97),
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
    cardTextPrice:{
        fontWeight: '500', 
        color: '#000000', 
        letterSpacing: 1.5, 
        fontSize: 20,
        textAlign:'center'
    },
    cardTextDiscount:{
        textDecorationLine: 'line-through', 
        color: '#505050', 
        letterSpacing: 1.5, 
        fontSize: 18, 
    },
});

//make this component available to the app
export default SeaFoodHomeScreen;
