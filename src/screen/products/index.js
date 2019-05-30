//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { DIMENSION } from '../../module/';
import { observer, inject } from 'mobx-react';
import HeaderScreen from '../../component/header';
import CartListProduct from '../addProducts/CartListProduct';

@inject('products')
@observer
// create a 
class ProductScreen extends Component {
    componentDidMount() {
        this.props.products.fetchProduct();
    }

    render() {
        const { products } = this.props.products
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <View style={{ flex: 1, backgroundColor: '#F53B55' }}>
                        <View style={{ height: DIMENSION(10), marginVertical: DIMENSION(10), }}>
                            <HeaderScreen
                                title=' ALL Products'
                            />
                        </View>
                        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                            <View style={styles.body}>
                                <View style={{ backgroundColor: '#FFF', flex: 1 }}>
                                    <View style={{ height: 30, marginBottom: DIMENSION(7), }}>
                                        {/* <Text style={styles.stylessubSlideText}>
                                            ALL Products
                                       </Text> */}
                                        <View style={styles.mainbtnadd}>
                                            <TouchableOpacity
                                                onPress={() => this.props.navigation.navigate('AddProduct')}
                                                style={styles.buttonAdd}
                                            >
                                                <Text style={{
                                                    color: '#FFF', 
                                                    alignItems: 'flex-end', 
                                                    fontWeight: '600',
                                                    fontSize: 15,
                                                }}>Add Products</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <FlatList
                                            numColumns={2}
                                            showsHorizontalScrollIndicator={false}
                                            keyExtractor={(item, index) => index.toString()}
                                            data={products}
                                            renderItem={({ item }) =>
                                                <CartListProduct
                                                    nav={this.props.navigation}
                                                    product={item}
                                                />}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    body: {
        flex: 1,
        backgroundColor: '#F2F3F5',
    },
    stylessubSlideText: {
        fontSize: 20,
        fontWeight: '900',
        marginLeft: 25,
        letterSpacing: 0.5,
        marginTop: 5,
    },
    mainbtnadd: {
        flex: 1,
        width:DIMENSION(38),
        height:DIMENSION(13),
        marginVertical: DIMENSION(1),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: DIMENSION(50),
        position: 'absolute',
        backgroundColor:'#FFF',
        right: 5,
        borderRadius: 30,
        shadowOffset:{  width: 1,  height: 2,  },
        shadowColor: '#FFF',
        shadowOpacity: 0.2,
    },
    buttonAdd: {
        marginVertical: 5,
        backgroundColor: '#85C7E5',
        width: 140,
        height: 45,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        marginLeft: 5,
    },
});
//make this component available to the app
export default ProductScreen;
