//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import HeaderScreen from '../../component/header';
import { DIMENSION } from '../../module';
import { observer, inject } from 'mobx-react';
import MainCard from '../../component/mainCard';
import CartBrandListViewScreen from './CartBrandListView';


@inject('products')
@observer
class BrandScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: ''
        }
    }
    componentWillMount() {
        this.props.products.fetchProduct();
        // this.props.products.queryCountry(this.state.country)

    }
    _goToCountrySelectedListView = () => {
        this.props.navigation.navigate('CountrySelectedListView')
    }
    _queryBrand(brand) {
        this.props.products.queryBrand(brand)
    }
    render() {
        const {queriedBrand, products}  = this.props.products
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
                                <View style={{ flexDirection: 'row', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', }}>
                                    <TouchableOpacity
                                     onPress={() => this._queryBrand('LEE')}>
                                    <View style={styles.cardBody}>
                                        <Image
                                            style={styles.image}
                                            source={require('../../image/lee.jpg')}  />
                                        <Text style={styles.cardText}>LEE</Text>
                                    </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                     onPress={() => this._queryBrand('AK')}>
                                    <View style={styles.cardBody}>
                                        <Image
                                            style={styles.image}
                                            source={require('../../image/ak.png')}  />
                                        <Text style={styles.cardText}>AK</Text>

                                    </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                     onPress={() => this._queryBrand('LSH')}>
                                    <View style={styles.cardBody}>
                                        <Image
                                            style={styles.image}
                                            source={require('../../image/lsh.jpg')}  />
                                        <Text style={styles.cardText}>LSH</Text>

                                    </View>
                                    </TouchableOpacity>
                            </View>
                            <FlatList
                                numColumns={2}
                                keyExtractor={(item, index) => index.toString()}
                                data={queriedBrand}
                                renderItem={({ item }) =>
                                    <CartBrandListViewScreen
                                        nav={this.props.navigation}
                                        product = {item}
                                    />}
                            />
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
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
    cardBody: {
        flex: 1,
        backgroundColor: '#85C7E5',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: DIMENSION(1),
        paddingVertical:DIMENSION(2),
        borderRadius: 15,
        shadowOffset:{  width: 1,  height: 2,  },
        shadowColor: '#000',
        shadowOpacity: 0.2,
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 2,

    },
    cardText: {
        marginVertical: 2.5,
        color: '#FFF', 
        letterSpacing: 1.5, 
        fontWeight: '700',
        marginTop: 8,
        fontSize: 15,
    },
    storeCardUSA: {
        backgroundColor: '#FFF',
        borderRadius: 15,
    },
    image: {
        width: DIMENSION(30),
        height: DIMENSION(16),
        borderRadius: 20,
        shadowOffset:{  width: 1,  height: 2,  },
        shadowColor: '#000',
        shadowOpacity: 0.2,
    },
});

//make this component available to the app
export default BrandScreen;
