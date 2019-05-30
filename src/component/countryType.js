//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { DIMENSION } from '../module';
import { observer, inject } from 'mobx-react';



@inject('products')
@observer
class CountryTypeScreen extends Component {
    _gotoCountryStore = () => {
        let { nav } = this.props
        nav.navigate('Detail',{...this.props})
    }
    _queryCountryStore(){
        this.props.products.query(this.props.country)
    }
    _onDetail = () => {
        let { nav } = this.props
        this.props.products.fetchProduct()
        nav.navigate('FlastListCountry',{...this.props})
    }
    render() {
        const {loading} = this.props.products
        return (
            <View style={styles.countryList}>
                <TouchableOpacity
                onPress = {() => this._onDetail}
                 style={styles.storeCardUSA}>
                    <View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>
                            <Image
                                style={styles.image}
                                source={require('../image/usa.png')} />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={[styles.cardText, { color: '#ffff', fontWeight: '400', alignItems: 'center', justifyContent: 'center' }]}>USA Store</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ width: 10 }}></View>
                <TouchableOpacity style={styles.storeCardCanada}>
                    <View>
                        <View>
                            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                                <Image
                                    style={styles.image}
                                    source={require('../image/canada.png')} />
                            </View>
                            <View>
                                <Text style={[styles.cardText, 
                                    { color: '#fff', 
                                    fontWeight: '400', 
                                    alignItems: 'center', 
                                    justifyContent: 'center' }]}>Canada Store</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    countryList: {
        width: DIMENSION(100),
        height: DIMENSION(22),
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent:'center',
        // flex:1
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
});
export default CountryTypeScreen;



