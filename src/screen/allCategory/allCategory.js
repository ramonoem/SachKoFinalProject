//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import { DIMENSION } from '../../module';
import { observer, inject } from 'mobx-react';
import MainCard from '../../component/mainCard';
import HeaderScreen from '../../component/header';
import CartCategoryScreen from './cartCategory';
import LightCategoryListCartCategoryScreen from './LightCategoryListCart';


@inject('products')
@observer
class AllCategoryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryType: ''
        }
    }
    componentDidMount() {
        this.props.products.fetchProduct();
        // this.props.products.queryCategory(categoryType)

    }
    _goToCountrySelectedListView = () => {
        this.props.navigation.navigate('CountrySelectedListView')
    }
    _queryCategoryType(categoryType) {
        this.props.products.queryCategory(categoryType)
    }

    _onDetail = () => {
        const { nav } = this.props;
        this.props.products.fetchProduct()
        nav.navigate('Detail', { product: this.props.peoduct })
    }
    render() {
        const { queriedCategoryType } = this.props.products
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <View style={{ flex: 1, backgroundColor: '#F53B55' }}>
                        <View style={{ height: DIMENSION(10), marginVertical: DIMENSION(10), }}>
                            <HeaderScreen
                                title='Country Store'
                            />
                        </View>
                        <View style={styles.bodyMenu}>
                                <TouchableOpacity
                                    onPress={() => this._queryCategoryType('BEEF')}
                                    style={styles.cardBody}>
                                    <Image
                                        style={styles.image}
                                        source={require('../../image/beef.jpg')} />
                                    <Text style={styles.cardText}>BEEF </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this._queryCategoryType('SEAFOOD')}
                                    style={styles.cardBody}>
                                    <Image
                                        style={styles.image}
                                        source={require('../../image/seefood.jpg')} />
                                    <Text style={styles.cardText}>SEAFOOD </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this._queryCategoryType('LAMB')}
                                    style={styles.cardBody}>
                                    <Image
                                        style={styles.image}
                                        source={require('../../image/lamb.jpg')} />
                                    <Text style={styles.cardText}>LAMB </Text>
                                </TouchableOpacity>
                            </View>
                        <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                            <FlatList
                                numColumns={2}
                                keyExtractor={(item, index) => index.toString()}
                                data={queriedCategoryType}
                                renderItem={({ item }) =>
                                    <CartCategoryScreen
                                        nav={this.props.navigation}
                                        product={item}
                                    />}
                            />
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
    },
    body: {
        flex: 1,
        backgroundColor: '#F2F3F5',
    },
    bodyMenu:{
        flexDirection: 'row', 
        backgroundColor: '#FFF', 
        //alignItems: 'center', 
        //justifyContent: 'center', 
    },
    cardBody: {
        backgroundColor: '#85C7E5',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: DIMENSION(1),
        paddingVertical: DIMENSION(2),
        borderRadius: 20,
        marginVertical:10,
        paddingTop: 13,
        marginHorizontal:2,
        shadowOffset:{  width: 1,  height: 2,  },
        shadowColor: '#000',
        shadowOpacity: 0.2,
        height: DIMENSION(25)
    },
    cardText: {
        marginVertical: 2.5,
        color: '#FFF', 
        fontWeight: '500', 
        letterSpacing: 1.2,
        fontSize: 14, 
        fontFamily: 'Arial',
        paddingHorizontal: 15,
        textAlign:'center',
    },
    storeCardUSA: {
        backgroundColor: '#FFF',
        borderRadius: 15,
    },
    image: {
        width: DIMENSION(30),
        height: DIMENSION(16),
        borderRadius: 20,
        marginBottom: 5,
    },
});






// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     body: {
//         flex: 1,
//         backgroundColor: '#F2F3F5',
//     },
//     headCategoryMenu: {
//         backgroundColor: '#FFF',
//         width: DIMENSION(100),
//         height: DIMENSION(100),
//         flexDirection: 'column',
//     },
//     categoryMenu: {
//         backgroundColor: '#FFF',
//         width: DIMENSION(100),
//         alignItems: 'center',
//         paddingVertical: 5,
//     },
//     styleCountry: {
//         alignItems: 'center',
//         marginTop: DIMENSION(2),
//     },
//     categoryBeef: {
//         //width: DIMENSION(24),
//         backgroundColor: '#F2F3F5',
//         justifyContent: 'center',
//         alignItems: 'center',

//     },
//     image: {
//         width: DIMENSION(20),
//         height: DIMENSION(18),
//     },
//     cardText: {
//         color: '#000',
//         fontWeight: '400',
//         fontSize: 15,
//     },
// });
//make this component available to the app
export default AllCategoryScreen;
