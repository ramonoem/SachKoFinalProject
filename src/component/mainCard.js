//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,ActivityIndicator, TextInput } from 'react-native';
import { DIMENSION } from '../module';
import { observer, inject } from 'mobx-react';


@inject('products')
@observer
class MainCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 0,
        };
    }
    _btnfaverite = () => {

    }
    onAdd = async () => {
        await this.setState({
            qty: 1
        })
    }
    componentDidMount() {
        this.props.products.fetchProduct();
      }
    _onDetail = () => {
        const { nav } = this.props
        this.props.products.fetchProduct()
        nav.navigate('Detail',{product:this.props.product})
    }

    _queryCategorySeaFood() {
        this.props.products
    }

    render() {
        const  products  = this.props.product
        return (
            <TouchableOpacity
                onPress={this._onDetail}
                style={styles.card} >
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
        fontWeight: '900', 
        letterSpacing: 1.2,
        fontSize: 14, 
        fontFamily: 'Arial',
        paddingHorizontal: 15,
        textAlign:'center'
    },
    cardBody: {
        backgroundColor: '#F9E0E1',
        alignItems: 'center',
        borderRadius: 15,
        marginHorizontal: DIMENSION(1),
        height: DIMENSION(63),
        paddingVertical: 10,
        width: DIMENSION(47),
        borderColor: '#FFF',
        borderWidth: 0.2,

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
export default MainCard;



