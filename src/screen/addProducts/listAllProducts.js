//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { DIMENSION } from '../../module/';
import { observer, inject } from 'mobx-react';
import HeaderScreen from '../../component/header';
import CartListProduct from './CartListProduct';




@inject('products')
@observer
// create a component
class ListAllProducts extends Component {
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
                                title='Country Store'
                            />
                        </View>
                        <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                            <View style={styles.body}>
                                <View style={{ backgroundColor: '#FFF', flex: 1 }}>
                                    <View style={{ height: 30 }}>
                                        <Text style={styles.stylessubSlideText}>
                                            ALL Products
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
                                                <CartListProduct
                                                    nav ={this.props.navigation}
                                                    product = {item}
                                                />}
                                        />
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
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
        // justifyContent: 'center',
        // alignItems: 'center',
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
});

//make this component available to the app
export default ListAllProducts;
