//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { observer, inject } from 'mobx-react';

import CardDetailProfile from './cardDetailProfile'

@inject('products')
@observer
class FlatListOrderProducts extends Component {
    render() {

        const { products, orderList } = this.props.products

        return (
            <View style={styles.container}>
                <Text>Hello</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    data={products}
                    renderItem={({ item }) =>
                        <CardDetailProfile
                            nav={this.props.navigation}
                            {...item}
                        />}
                >

                </FlatList>
                {/* <FlatList
                    // numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    data={orderList}
                    renderItem={({ item }) =>
                        <CardDetailProfile
                            nav={this.props.navigation}
                            {...item}
                        />}
                /> */}
            </View>

        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
export default FlatListOrderProducts;
