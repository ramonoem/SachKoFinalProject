//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,ActivityIndicator, TextInput } from 'react-native';
import { DIMENSION } from '../module';
// import Spinner from 'react-native-spinkit'
import { observer, inject } from 'mobx-react';


@inject('products')
@observer
class SellerRecommendation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 0,
        };
    }
 
    onAdd = async () => {
        await this.setState({
            qty: 1
        })
    }
    componentDidMount() {
        this.props.products.fetchProduct();
      }
    _onDetail = () => {
        let { nav } = this.props
        this.props.products.fetchProduct()
        nav.navigate('Detail',{product:this.props.product})
    }
    render() {
        const product = this.props.product;
        return (
            <TouchableOpacity
                onPress={this._onDetail}
                style={styles.card} >
                
                <View style={styles.cardHeader}>
                    <View style={{ flex: 1 }}></View>

                    {/* <Image style={styles.imageheart} source={this.props.faverite} /> */}

                </View>
                <View style={styles.cardBody}>
                    <Image
                        style={styles.image}
                        source={{uri: product.imageUrl}} />
                    <Text style={[styles.cardText, { color: '#070707', fontWeight: '700', letterSpacing: 1.5, fontSize: 15, height: DIMENSION(10) }]}>{product.productName}</Text>
                    <Text style={[styles.cardText, { fontWeight: '700', color: '#000000', letterSpacing: 1.5, fontSize: 18, }]}>${product.price}</Text>
                    <Text style={[styles.cardText, { textDecorationLine: 'line-through', color: '#505050', letterSpacing: 1.5, }]}>${product.discount}</Text>
                </View>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: DIMENSION(30),
        height: DIMENSION(20),
        marginBottom: DIMENSION(5)
    },
    card: {
        width: DIMENSION(45),
        height: DIMENSION(60),
        flex: 1,
        // margin: 5,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
        paddingVertical: 10,
        padding: 0,

    },
    cardText: {
        marginVertical: 2.5,
        color: '#333',
    },
    cardBody: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: 0,

    },
    imageheart: {
        width: DIMENSION(5),
        height: DIMENSION(5),
    },
    activeView: {
        width: 45,
        height: 45,
        borderColor: '#AED09A',
        borderWidth: 2,
    },
    textheader: {
        color: '#84878A',
    },
});
export default SellerRecommendation;



