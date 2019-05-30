//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, SafeAreaView, Image, TouchableOpacity, } from 'react-native';
import Carousel from '../../component/carousel';
import ENTRIES2 from '../../dummy/enTries2';
import MainCard from '../../component/mainCard';
import HeaderScreen from '../../component/header';
import { DIMENSION } from '../../module/';
import CountryTypeScreen from '../../component/countryType';
import SeaFoodHomeScreen from '../../component/seaFood';
import ListFooterScreen from './../listFooter/index';
import { observer, inject } from 'mobx-react';

@inject('products')
@observer
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: ''
        }
    }
    
    componentWillMount() {
        this.props.products.fetchProduct();
        this.props.products.queryCategorySeaFood()
    }
    _queryBrand(brand) {
        this.props.products.queryBrand(brand)
    }
    _goToCountryType = () => {
        this.props.navigation.navigate('ListCountryScreen')
    }
    _goToAllCategory = () => {
        this.props.navigation.navigate('AllCategoryScreen')
    }
    _goToBrandScreen = () => {
        this.props.navigation.navigate('BrandScreen')
    }
    render() {
        const { products, loading, queriedBrand, queriedCategoryTypeSeaFood } = this.props.products
        return (
            <SafeAreaView style={styles.container}>
                <HeaderScreen
                    title='សាច់គោ'
                />
                <ScrollView style={{ flex: 1, backgroundColor: '#F2F3F5' }}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.header}>
                            <Text></Text>
                            <View style={styles.headerslide}>
                                <Carousel
                                    data={ENTRIES2}
                                />
                            </View>
                            <View style={{ height: DIMENSION(25), backgroundColor: '#FFF', paddingHorizontal: 15, }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                                    <TouchableOpacity
                                        onPress={this._goToAllCategory}
                                        style={styles.card} >
                                        <View style={styles.cardBody}>
                                            <Image
                                                style={styles.image1}
                                                source={require('../../image/categoryList.png')} />
                                            <Text style={styles.cardTextAllCategory}>All Category</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={this._goToBrandScreen}
                                        style={styles.card} >
                                        <View style={styles.cardBody}>
                                            <Image
                                                style={styles.image1}
                                                source={require('../../image/brands.png')} />
                                            <Text style={styles.cardTextBrand}>Brand</Text>
                                        </View>
                                    </TouchableOpacity> 
                                    <TouchableOpacity
                                        onPress={this._goToCountryType}
                                        style={styles.card} >
                                        <View style={styles.cardBody}>
                                            <Image
                                                style={styles.image1}
                                                source={require('../../image/countryList.jpg')} />
                                            <Text style={styles.cardTextCountry}>Country</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ height: DIMENSION(25), backgroundColor: '#FFF' }}>
                                <CountryTypeScreen />
                            </View>
                        </View>
                        {/* Boday */}
                        <View style={{ backgroundColor: '#F2F3F5', width: DIMENSION(100), height: DIMENSION(2) }}></View>
                        <View style={styles.body}>
                            <View style={{ backgroundColor: '#FFF', flex: 1 }}>
                                <View style={{ height: DIMENSION(73), backgroundColor: '#FFF' }}>
                                    <View style={{ height: DIMENSION(9) }}>
                                        <Text style={[styles.stylessubSlideText, { fontWeight: '700' }]}>
                                            New Arrivals
                                       </Text>
                                    </View>
                                        <FlatList
                                            horizontal={true}
                                            style={{height: DIMENSION(50)}}
                                            showsHorizontalScrollIndicator={false}
                                            keyExtractor={(item, index) => index.toString()}
                                            data={products}
                                            renderItem={({ item }) =>
                                                <MainCard
                                                    nav={this.props.navigation}
                                                    product = {item}
                                                />}

                                        />
                                </View>
                            </View>
                        </View>
                        {/* Boday 2*/}
                        <View style={{ backgroundColor: '#F2F3F5', width: DIMENSION(100), height: DIMENSION(2) }}></View>
                        <View style={styles.body3}>
                            <View style={{ backgroundColor: '#FFF', flex: 1 }}>
                                <View style={{ height: DIMENSION(77), backgroundColor: '#FFF' }}>
                                    <View style={{ height: DIMENSION(10) }}>
                                        <Text style={[styles.stylessubSlideText, { fontWeight: '700' }]}>
                                            Shop Fresh Seafood
                                       </Text>
                                    </View>
                                    <FlatList
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        keyExtractor={(item, index) => index.toString()}
                                        data={queriedCategoryTypeSeaFood}
                                        renderItem={({ item }) =>
                                            <SeaFoodHomeScreen
                                                nav={this.props.navigation}
                                                product = {item}
                                            />}
                                    />
                                </View>
                            </View>
                        </View>
                        {/* Boday 3*/}
                        <View style={{ backgroundColor: '#F2F3F5', width: DIMENSION(100), height: DIMENSION(2) }}></View>
                        <View style={styles.body}>
                            <View style={{ backgroundColor: '#FFF', flex: 1 }}>
                                <View style={{ height: 30 }}>
                                    <Text style={styles.stylessubSlideText}>
                                        Beefs
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
                                            <ListFooterScreen
                                                nav={this.props.navigation}
                                                product = {item}
                                            />}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#F53B55',
    },
    header: {
        backgroundColor: '#FFF'
    },
    headerslide: {
        backgroundColor: '#FFF'
    },
    body: {
        flex: 1,
        backgroundColor: '#F2F3F5',
    },
    body3: {
        flex: 1,
        backgroundColor: '#F2F3F5',
    },
    subSlide: {
        flexDirection: 'row',
    },
    stylessubSlideText: {
        fontSize: 20,
        fontWeight: '900',
        marginLeft: 25,
        letterSpacing: 0.5,
        marginTop: 5,
    },
    countryList: {
        width: DIMENSION(100),
        height: DIMENSION(22),
        flexDirection: 'row',
    },
    storeCardUSA: {
        backgroundColor: '#48B6FB',
        flex: 1,
        marginLeft: 15,
        borderRadius: 15,

    },
    storeCardCanada: {
        backgroundColor: '#FDBB35',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginRight: 15,
        borderRadius: 15,


    },
    image: {
        width: DIMENSION(13),
        height: DIMENSION(13),
        marginBottom: 2,

    },

    image1: {
        width: DIMENSION(12),
        height: DIMENSION(12),
    },
    card: {
        flex: 1,
    },
    cardBody: {
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
    cardTextAllCategory: {
        color: '#333',
        color: '#070707',
        fontWeight: '500',
        letterSpacing: 1.5,
        fontSize: 15,
        width: DIMENSION(30),
        marginLeft: DIMENSION(1),
    },
    cardTextBrand: {
        color: '#333',
        color: '#070707',
        fontWeight: '500',
        letterSpacing: 1.5,
        fontSize: 15,
        marginLeft: DIMENSION(1),
    },
    cardTextCountry: {
        color: '#333',
        color: '#070707',
        fontWeight: '500',
        letterSpacing: 1.5,
        fontSize: 15,
        width: DIMENSION(30),
        marginLeft: DIMENSION(13),
    },


});

//make this component available to the app
export default HomeScreen;
