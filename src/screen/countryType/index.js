//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import { DIMENSION } from '../../module/';
import HeaderScreen from '../../component/header';
import MainCard from '../../component/mainCard';
import { observer, inject } from 'mobx-react';
import CartCountryListViewScreen from './cartCountryListView';


@inject('products')
@observer
class ListCountryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: ''
        }
    }
    componentDidMount() {
        this.props.products.fetchProduct();

    }
    _goToCountrySelectedListView = () => {
        this.props.navigation.navigate('CountrySelectedListView')
    }
    _queryCountry(country) {
        this.props.products.queryCountry(country)
    }
    render() {
        const {queriedCountry, products } = this.props.products
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
                            <View style={{ height: DIMENSION(20), width: DIMENSION(100), flexDirection: 'row', marginLeft: DIMENSION(2), marginTop:DIMENSION(5) }}>
                                <TouchableOpacity
                                    onPress={() => this._queryCountry('USA')}
                                    style={styles.storeCardUSA}>
                                    <View>
                                        <Image
                                            style={styles.image}
                                            source={require('../../image/usa.png')} />
                                    </View>
                                    <View style={{ marginLeft: DIMENSION(24), marginTop: DIMENSION(1), }}>
                                        <Text style={styles.cardText}>USA </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.storeCardCanada}
                                    onPress={() => this._queryCountry('Canada')}
                                >
                                    <View style={styles.styleCountry}>
                                        <Image
                                            style={styles.image}
                                            source={require('../../image/canada.png')} />
                                    </View>
                                    <View style={{ marginLeft: DIMENSION(20), }}>
                                        <Text style={styles.cardText}>Canada</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.storeCardUSA}
                                    onPress={() => this._queryCountry('AUS')}
                                >
                                    <View style={styles.styleCountry}>
                                        <Image
                                            style={styles.image}
                                            source={require('../../image/australia.png')} />
                                    </View>
                                    <View style={{ marginLeft: DIMENSION(17), }}>
                                        <Text style={styles.cardText}>Australia</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.storeCardCanada}
                                    onPress={() => this._queryCountry('Cambodia')}

                                >
                                    <View style={styles.styleCountry}>
                                        <Image
                                            style={styles.image}
                                            source={require('../../image/cambodia.png')} />
                                    </View>
                                    <View style={{ marginLeft: DIMENSION(15), }}>
                                        <Text style={styles.cardText}>Cambodia</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                numColumns={2}
                                keyExtractor={(item, index) => index.toString()}
                                data={queriedCountry}
                                renderItem={({ item }) =>
                                    <CartCountryListViewScreen
                                    nav={this.props.navigation}
                                    product = {item}
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
    styleCountry: {
        alignItems: 'center',
        marginTop: DIMENSION(2),


    },
    countryList: {
    },
    storeCardUSA: {
        backgroundColor: '#48B6FB',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginRight: 15,
        borderRadius: 15,
        shadowOffset:{  width: 1,  height: 2,  },
        shadowColor: '#000',
        shadowOpacity: 0.2,
        marginHorizontal: 2,
        borderColor: '#FFF',
        borderWidth: 1,
        borderRadius: 13
    },
    storeCardCanada: {
        backgroundColor: '#FDBB35',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginRight: 15,
        borderRadius: 15,
        shadowOffset:{  width: 1,  height: 2,  },
        shadowColor: '#000',
        shadowOpacity: 0.2,
        marginHorizontal: 2,
        borderColor: '#FFF',
        borderWidth: 1,
        borderRadius: 13


    },
    image: {
        width: DIMENSION(10),
        height: DIMENSION(10),
        marginBottom: 2,
        shadowOffset:{  width: 1,  height: 2,  },
        shadowColor: '#000',
        shadowOpacity: 0.2,
        marginHorizontal: 2,
        borderColor: '#FFF',
        borderWidth: 1,
        borderRadius: 18
    },
    cardText: {
        color: '#fff',
        fontWeight: '400',
        fontSize: 12,
        width: DIMENSION(30),
    },
});

//make this component available to the app
export default ListCountryScreen;
