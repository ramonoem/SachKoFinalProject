//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { DIMENSION } from '../module';

class ListFooderHomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 0,
        };
    }

    _btnfaverite = () => {

    }
    onAdd = async () => {
        await this.setState({
            qty: 1
        })
    }
    _onDetail = () => {
        let { nav } = this.props
        nav.navigate('Detail')
    }
    render() {
        return (
            <TouchableOpacity
            onPress={this._onDetail}
                style={styles.card} >
                <View style={styles.cardHeader}>
                    <View style={{flex:1}}></View>
                    <TouchableOpacity >
                        <Image style={styles.imageheart} source={this.props.faverite} />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardBody}>
                    <Image
                    style = {styles.image}
                    source={{uri: this.props.imageUrl}} />
                    <Text style={[styles.cardText, { color: '#070707', fontWeight: '800', letterSpacing: 1.5, fontSize: 15 }]}>{this.props.title}</Text>
                    <Text style={[styles.cardText, { fontWeight: '700', color:'#000000', letterSpacing: 1.5, fontSize: 18, }]}>${this.props.price}</Text>
                    <Text style={[styles.cardText, { textDecorationLine: 'line-through', color:'#505050', letterSpacing: 1.5, }]}>${this.props.discount}</Text>

                </View>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: DIMENSION(30),
        height: DIMENSION(20),
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
export default ListFooderHomeScreen;



