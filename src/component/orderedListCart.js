//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView, Alert } from 'react-native';
import { DIMENSION } from '../module';
import { observer, inject } from 'mobx-react';

// create a component

@inject('products')
@observer
class OrderedListCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: 1,
            qty: 0,
            price: 0,
            calPrice:0,
        };
    }
    onAdd () {
        this.addSubTotal();
        this.setState({
            items: this.state.items + 1
        })
    }
    onReduce() {
        if (this.state.items > 0) {
        this.reduceSubTotal();
            this.setState({
                items: this.state.items - 1
            })

        }
    }
    addSubTotal(){
        const {  price  } = this.props.products
        this.state.price = this.props.addSubTotal(this.state.items*price)
        
    }
    reduceSubTotal(){
        const {  price  } = this.props.products
        this.state.price =  this.props.reduceSubTotal(this.state.items*price)
    }
    onType(value) {
        const convertedValue = Number(value)
        this.setState({
            items: convertedValue
        })
    }
    renderButton() {
        if (this.state.items == 0) {
            Alert.alert(
                'Your product has been remove from cart !!!',
                'Thanks YOU',
                [
                    { text: 'OK', onPress: () => this.props.products.removeCart()},
                ],
                { cancelable: false }
            )
            return (
                <TouchableOpacity style={{ flexDirection: 'row', width: DIMENSION(20), height: DIMENSION(9), backgroundColor: '#F53B57', justifyContent: 'center', alignItems: 'center', borderRadius: 50, }}
                    onPress={() => this.setState({ items: 1 })}
                >
                    <Text style={{ fontSize: 12, color: '#FFF', fontWeight: '700' }}>DELETE</Text>
                </TouchableOpacity>
            )
        }
        else {
            return (
                <View style={styles.mainbtn}>
                    <TouchableOpacity
                        style={[styles.btncard, { width: DIMENSION(6), height: DIMENSION(6), marginRight: 9, }]}
                        onPress={() => this.onReduce()}
                    >
                        <Text style={{ justifyContent: 'center', alignItems: 'center', color: '#FFF', fontWeight: '700', fontSize: 18 }}>-</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={{ textAlign: 'center', color: '#000', fontSize: 15 }}
                        value={this.state.items.toString()}
                        placeholderTextColor={'#000'}
                        onChangeText={(value) => { this.onType(value) }}
                    />
                    <TouchableOpacity
                        onPress={() => this.onAdd()}
                        style={[styles.btncard, { width: DIMENSION(6), height: DIMENSION(6), marginLeft: 9, }]}
                    >
                        <Text style={{ justifyContent: 'center', alignItems: 'center', color: '#FFF', fontWeight: '900', fontSize: 18 }}>+</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
    render() {
        const {products } = this.props.product
        return (
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri:products.imageUrl}}/>
                </View>
                <View style={styles.description}>
                    <Text style={styles.productName}>{products.productName}</Text>
                    <Text style={styles.price}>${products.price}</Text>
                    <Text style={styles.discount}>${products.discount}</Text>
                    {this.renderButton()}
                    <Text 
                     minimumFontScale={5}
                    style = {styles.subTotal}>Sub Total: ${(products.price*this.state.items).toFixed(2)}</Text>
                </View>
            </View>
        );
    }
}
const imageSize = 40;
const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor:'#85C7E5',
        borderRadius: 10,
        width:DIMENSION(98),
        marginHorizontal: DIMENSION(1),

    },
    imageContainer: {
        width: DIMENSION(imageSize),
        height: DIMENSION(imageSize)
    },
    image: {
        width: DIMENSION(imageSize),
        height: DIMENSION(imageSize),
        borderRadius: 10,
    },

    description: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    productName:{
        marginVertical: 2.5,
        color: '#070707', 
        fontWeight: '900', 
        letterSpacing: 1,
        fontSize: 20, 
        fontFamily: 'Arial',
        paddingHorizontal: 15,
        textAlign:'center'
    },
    price:{
        fontSize:18,
        fontWeight:'700',
        color:'#333'
    },
    discount:{
        color:'rgba(0,0,0,0.5)',
        textDecorationLine: 'line-through'
    },
    btncard:{
        backgroundColor:'#F53B55',
        borderRadius:4,
        justifyContent:'center',
        alignItems: 'center',
    },
    mainbtn:{
        marginTop: 5,
        flexDirection: 'row',
    },
    subTotal:{
        fontSize:14,
        marginTop:15,
        fontWeight:'700'
    }
});

//make this component available to the app
export default OrderedListCart;
