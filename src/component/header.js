import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { DIMENSION } from '../module';
import { observer, inject } from 'mobx-react';



@inject('products')
@observer
export default class HeaderScreen extends Component {
  componentDidMount() {
    this.props.products.fetchProduct();
  }
  render() {
    const { products } = this.props.products;
    return (
      <View style={styles.containerStyle}>
        <View style={styles.harder}>
          <Text style={styles.textharder}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    width: DIMENSION(100),
    marginTop: -10,
  },
  harder: {
    height: DIMENSION(20),
    backgroundColor: '#F53B55',
    //justifyContent:'flex-start',
    //flex:1
  },
  mainCard: {
    padding: 5,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  textharder: {
    justifyContent: 'flex-end',
    paddingTop: 20,
    paddingLeft: 20,
    fontSize: 30,
    fontWeight: '900',
    color: '#FFF',
    fontFamily: 'Times',
  },
  titelhomecard: {
    marginLeft: 15,
    marginTop: 10,
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    fontFamily: 'Arial',
  },
  textTitellHarder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: -3,
    marginBottom: -5,

  },
  searchertext: {
    height: DIMENSION(20),
    width: '90%',
    borderRadius: 25,
    padding: 5,
    marginTop: -5,
    marginBottom: -45,
    backgroundColor: '#fff',
    margin: 5,
    flexDirection: 'row'
  },
  inputStyle: {
    flex: 1,
  },
})
