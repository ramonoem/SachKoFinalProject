//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';


@inject('products')
@observer

class CardDetailProfile extends Component {
    componentWillMount() {
        this.props.products.profileOrder();
    }
    render() {
        //const { productName, price, imageUrl, productDescription, discount } = this.props.navigation.params.product;
        return (
            <View style={styles.container}>
                {/* <Text>{productName}</Text> */}
                <Text>Hello</Text>
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
});

//make this component available to the app
export default CardDetailProfile;
