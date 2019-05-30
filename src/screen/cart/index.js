//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, FlatList, TouchableOpacity, TextInput, Image, } from 'react-native';
import { DIMENSION } from '../../module/';
import HeaderScreen from '../../component/header';
import OrderedListCart from '../../component/orderedListCart';
import { inject, observer } from 'mobx-react';
import BeInterestedIn from '../../component/beInterestedInCart';


@inject('products')
@observer
class CartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subTotal: 0,
        }
    }
    componentWillMount() {
        this.props.products.fetchProduct();
        this.props.products.profileOrder();
    }
    _onBuyNow = () => {
        this.props.navigation.navigate('BuyNowScreen')
    }
    itemSeperator() {
        return (
            <View style={{ margin: 5, backgroundColor: '#F2F3F5', height: DIMENSION(1) }}></View>
        )
    }
    render() {
        const { products , selectedProducts, orderList } = this.props.products
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1, backgroundColor: '#F2F3F5' }}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.header}>
                            <HeaderScreen
                                title='Cart'
                            />
                        </View>
                        <View style={{ height: DIMENSION(11), backgroundColor: '#FFF' }}>
                            <Text style={styles.stylessubSlideText}>
                                Item ({orderList.length})
                            </Text>
                        </View>
                        <ScrollView style={styles.body}>
                            <View style={{ backgroundColor: '#FFF', flex: 1 }}>
                                <View style={{ backgroundColor: '#FFF' }}>
                                    <View style={{ flex: 1, }}>
                                        <FlatList
                                            ItemSeparatorComponent={() =>
                                                this.itemSeperator()
                                            }
                                            style={{ flex: 1, backgroundColor:'#F9F9F9' }}
                                            showsHorizontalScrollIndicator={false}
                                            keyExtractor={(item, index) => index.toString()}
                                            data={this.props.products.orderList.slice()}
                                            renderItem={({ item }) =>
                                                <OrderedListCart
                                                    product = {item}
                                                    addSubTotal={(value) => this.setState({ subTotal: this.state.subTotal + value })}
                                                    reduceSubTotal={(value) => this.setState({ subTotal: this.state.subTotal - value })}
                                                />}
                                        />
                                    </View>
                                    <View style={{ backgroundColor: '#F2F3F5', width: DIMENSION(100), height: DIMENSION(1) }}></View>
                                    <View style={styles.body}>
                                        <View style={{ backgroundColor: '#FFF', flex: 1 }}>
                                            <View style={{ width: DIMENSION(100), height: DIMENSION(10), alignItems: 'center', }}>
                                                <Text style={styles.Interested}>
                                                    You May Be Interested In
                                                </Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <FlatList
                                                    //horizontal={true}
                                                    // ItemSeparatorComponent = { () =>
                                                    //     this.itemSeperator()
                                                    // }
                                                    numColumns={2}
                                                    showsHorizontalScrollIndicator={false}
                                                    keyExtractor={(item, index) => index.toString()}
                                                    data={products}
                                                    renderItem={({ item }) =>
                                                        <BeInterestedIn
                                                        nav={this.props.navigation}
                                                        product = {item}
                                                        />}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={{ position: 'absolute', bottom: 0 }}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
                        <View style={{ marginHorizontal: 25, width: DIMENSION(50), height: DIMENSION(10), alignContent: 'flex-start', justifyContent: 'center' }}>
                            <Text
                                minimumFontScale={5}>
                                Total: $ {(this.state.subTotal).toFixed(2)}
                            </Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F53B55',
    },
    body: {
        flex: 1,
        backgroundColor: '#F2F3F5',
    },
    stylessubSlideText: {
        fontSize: 25,
        fontWeight: '900',
        marginLeft: 25,
        letterSpacing: 0.5,
        marginTop: 5,
    },
    Interested: {
        fontSize: 20,
        fontWeight: '600',
        letterSpacing: 0.5,
        color: 'rgba(0,0,0,0.5)',
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
export default CartScreen;
