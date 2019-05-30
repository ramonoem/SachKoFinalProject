//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Alert, ScrollView, FlatList } from 'react-native';
import { DIMENSION } from '../../module';
import { observer, inject } from 'mobx-react';
import HeaderScreen from '../../component/header';
import SellerRecommendation from '../../component/sellerRecommendations';

@inject("products")
@observer
class DetailScreen extends Component {
    
    
    showAlert() {
        const selectedProduct = this.props.navigation.state.params.product
        this.props.products.selectProduct(selectedProduct)
        Alert.alert(
            'Added to Cart',
            'Thanks YOU',
            [
                { text: 'OK', onPress: () => this.props.navigation.goBack() },
                { text: 'Go to Cart', onPress: () => this.props.navigation.navigate("Cart") },
            ],
            { cancelable: false }
        )
    }
    _onBuyNow = () => {
        this.props.navigation.navigate('BuyNowScreen')
    }
    
    render() {
        const { products } = this.props.products
        const { productName, price, imageUrl, productDescription, discount } = this.props.navigation.state.params.product;
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <HeaderScreen
                        title='Detail'
                    />
                </View>
                <ScrollView style={styles.body}>
                    <View
                        style={styles.card} >
                        <View style={styles.cardBody}>
                            <Image
                                style={styles.image}
                                source={{ uri: imageUrl }} />
                            <Text style={[styles.cardText, { color: '#070707', fontWeight: '700', letterSpacing: 1.5, fontSize: 15, height: DIMENSION(10) }]}>{productName}</Text>
                            <Text style={[styles.cardText, { color: '#070707', fontWeight: '700', letterSpacing: 1.5, fontSize: 15, height: DIMENSION(10) }]}>{productDescription}</Text>
                            <Text style={[styles.cardText, { fontWeight: '700', color: '#000000', letterSpacing: 1.5, fontSize: 20, }]}>US ${price}</Text>
                        </View>
                    </View>
                    <View style={styles.secondBody}>
                            <View style={styles.Discount}>
                                <Text style={styles.Discount1}>
                                    Discount:
                                    </Text>
                                <Text style={[styles.cardText, { textDecorationLine: 'line-through', color: '#505050', letterSpacing: 1.5, fontSize: 18, paddingHorizontal: 15, }]}>${discount}</Text>
                            </View>
                            <View style={styles.Discount}>
                                <Text style={styles.Discount1}>
                                    Shipping:
                                </Text>
                                <Text style={{ color: '#505050', letterSpacing: 1.5, fontSize: 18, paddingHorizontal: 15, }}>
                                    Free
                                </Text>
                            </View>
                        </View>
                    <View style={{ backgroundColor: '#F2F3F5', width: DIMENSION(100), height: DIMENSION(1) }}></View> 
                    <View style={styles.sellerRecommendation}>
                        <View style={{ backgroundColor: '#FFF', width:DIMENSION(100), height:DIMENSION(85) }}>
                            <View style={{ width: DIMENSION(100), height: DIMENSION(10), alignItems: 'flex-start', marginLeft: DIMENSION(3), }}>
                                <Text style={styles.SellerRecom}>
                                    Seller Recommendations
                                </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <FlatList
                                    horizontal={true}
                                    // ItemSeparatorComponent = { () =>
                                    //     this.itemSeperator()
                                    // }
                                    // numColumns={2}
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={(item, index) => index.toString()}
                                    data={products}
                                    renderItem={({ item }) =>
                                        <SellerRecommendation
                                            nav={this.props.navigation}
                                            product = {item}
                                        />}
                                />
                            </View>
                        </View>
                    </View> 
                </ScrollView>
                <View style={{ position: 'absolute', bottom: 0 }}>
                        <View style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
                            <View style={{ width: DIMENSION(65), height: DIMENSION(10), alignContent: 'flex-start', justifyContent: 'center', }}>
                                <TouchableOpacity
                                    style={styles.addToCart}
                                    onPress={() => this.showAlert()
                                    }
                                >
                                    <Text style={{ color: '#FFF' }}>ADD TO CART</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity 
                                onPress={this._onBuyNow}
                                style={styles.buttomBuy} >
                                    <Text style={{ color: '#FFF' }}>Buy Now</Text>
                                </TouchableOpacity>
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
        backgroundColor: '#F53B55',
    },
    body: {
        flex: 1,
        backgroundColor: '#F2F3F5'
    },
    sellerRecommendation:{
        flex: 1,
        backgroundColor: '#F2F3F5',
    },
    image: {
        width: DIMENSION(90),
        height: DIMENSION(60),
        marginBottom: DIMENSION(5),
        marginTop: DIMENSION(5),
    },
    card: {
        width: DIMENSION(100),
        marginBottom: DIMENSION(1),
        
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    cardBody: {
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',

    },
    secondBody: {
        width: DIMENSION(100),
        height: DIMENSION(30),
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        paddingHorizontal: 10,

    },
    Discount: {
        flexDirection: 'row',
    },
    Discount1: {
        color: '#070707',
        fontWeight: '700',
        letterSpacing: 1.5,
        fontSize: 15,
        height: DIMENSION(10)
    },
    shipping: {

    },
    shipping1: {
        color: '#505050',
        fontWeight: '700',
        letterSpacing: 1.5,
        fontSize: 15,
        height: DIMENSION(10)
    },
    buttomBuy: {
        width: DIMENSION(40),
        height: DIMENSION(10),
        backgroundColor: '#F53B55',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addToCart: {
        width: DIMENSION(40),
        height: DIMENSION(10),
        backgroundColor: '#F53B55',
        alignItems: 'center',
        justifyContent: 'center',
    },
    SellerRecom:{
        color: '#505050',
        fontWeight: '700',
        letterSpacing: 1.5,
        fontSize: 20,
        height: DIMENSION(10),
        marginTop: DIMENSION(3),
    },
});

//make this component available to the app
export default DetailScreen;
