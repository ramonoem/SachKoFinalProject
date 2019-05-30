//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { DIMENSION } from '../../module/';
import { observer, inject } from 'mobx-react';
import CartCountryListViewScreen from './cartCountryListView';

@inject('products')
@observer
class CountrySelectedListView extends Component {
    constructor(props) {
        super(props);
        this.state={
            country: ''
        }
    }
    
    // componentDidMount() {
    //     this.props.products.query();
    // }
    _onDetail = () => {
        const { nav } = this.props
        this.props.products.fetchProduct()
        nav.navigate('Detail',{...this.props})
    }
    render() {
        const { products, loading, queriedProducts  } = this.props.products
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <View style={{ flex: 1, backgroundColor: '#F53B55' }}>
                        <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                            <View style={styles.body}>
                                <View style={{ backgroundColor: '#FFF', flex: 1 }}>
                                    <View style={{ height: DIMENSION(20) }}>
                                        <Text style={styles.stylessubSlideText}>
                                            ALL Products
                                         </Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <FlatList
                                            numColumns={2}
                                            showsHorizontalScrollIndicator={false}
                                            keyExtractor={(item, index) => index.toString()}
                                            data={products}
                                            renderItem={({ item }) =>
                                                <CartCountryListViewScreen
                                                    nav={this.props.navigation}
                                                    {...item}
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
export default CountrySelectedListView;
