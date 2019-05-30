//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Picker } from 'react-native';
import { observer, inject } from 'mobx-react';
import ImagePicker from 'react-native-image-crop-picker';
import { DIMENSION } from '../../module/';


@inject('products')
@observer

// create a component
class FormAddProduct extends Component {
    _goToEditeAndDeleteScreen = () => {
        this.props.navigation.navigate('ListAllProducts')
    }
    constructor(props) {
        super(props);
        this.state = {
            Brand: '',
            Country: '',
            CategoryType: '',
            ProductName: '',
            ProductDescription: 'Standard Delivery (Tomrrow evening)',
            Price: '',
            Discount: '',
            Packing: '',
            ImageUrl: 'https://firebasestorage.googleapis.com/v0/b/sachko-ba7ed.appspot.com/o/image%2FSmokeSalmon.jpeg?alt=media&token=e34bc21d-e02c-43ea-965e-d2ff125b91e7',
        };
    }
    onSelectImg() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
        });
    }
    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.harder}>
                    <Text style={styles.textharder}>ADD PRODUCTS</Text>
                </View>
                <ScrollView style={styles.formInsert}>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>Country:</Text>
                        <Picker
                            selectedValue={this.state.Country}
                            style={styles.picker}
                            onValueChange={(itemValue, ) => this.setState({ Country: itemValue })}>
                            <Picker.Item label="USA" value="USA" />
                            <Picker.Item label="Canada" value="Canada" />
                            <Picker.Item label="Australia" value="Australia" />
                            <Picker.Item label="Cambodia" value="Cambodia" />
                        </Picker>
                    </View>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>CategoryType:</Text>
                        <Picker
                            selectedValue={this.state.CategoryType}
                            style={styles.picker}
                            onValueChange={(itemValueType, ) => this.setState({ CategoryType: itemValueType })}>
                            <Picker.Item label="BEEF" value="BEEF" />
                            <Picker.Item label="SEAFOOD" value="SEAFOOD" />
                            <Picker.Item label="LAMB" value="LAMB" />
                        </Picker>
                    </View>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>Brand:</Text>
                        <Picker
                            selectedValue={this.state.Brand}
                            style={styles.picker}
                            onValueChange={(itemValueType, ) => this.setState({ Brand: itemValueType })}>
                            <Picker.Item label="LEE" value="LEE" />
                            <Picker.Item label="AK" value="AK" />
                            <Picker.Item label="LSH" value="LSH" />
                        </Picker>
                    </View>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>ProductName:</Text>
                        <TextInput
                            placeholder='ProductName'
                            onChangeText={(text) => this.setState({ ProductName: text })}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>Price :</Text>
                        <TextInput
                            placeholder='$'
                            onChangeText={(text) => this.setState({ Price: text })}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>Discount:</Text>
                        <TextInput
                            placeholder='$'
                            onChangeText={(text) => this.setState({ Discount: text })}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>KG : </Text>
                        <TextInput
                            placeholder='KG'
                            onChangeText={(text) => this.setState({ Packing: text })}
                            style={styles.textInput}
                        />
                    </View>

                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>ImageUrl:</Text>

                        <TextInput
                            placeholder='ImageUrl'
                            onChangeText={(text) => this.setState({ ImageUrl: text })}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.mainbtnadd}>
                        <TouchableOpacity
                            style={styles.buttonAdd}
                            onPress={() => this.props.products.addProduct(
                                this.state.Brand,
                                this.state.Country,
                                this.state.CategoryType,
                                this.state.ProductName,
                                this.state.ProductDescription,
                                this.state.Price,
                                this.state.Discount,
                                this.state.Packing,
                                this.state.ImageUrl,
                            )}
                        >
                            <Text style={{ color: '#FFF', alignItems: 'flex-end' }}>ADD</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

// define your styles
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    harder: {
        margin: 0,
        height: '12%',
        width: '100%',
        backgroundColor: '#F53B55',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textharder: {
        marginLeft: 15,
        marginTop: 35,
        fontSize: 20,
        fontWeight: '900',
        color: '#FFF',
        fontFamily: 'Times',
    },
    formInsert: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    picker: {
        width: 100,
        marginTop: -50,
        marginBottom: -50,
        justifyContent: 'flex-end'
    },
    tittelcardaddproduct: {
        marginTop: DIMENSION(5),
        marginLeft: DIMENSION(2),
        marginBottom: DIMENSION(1),
    },
    nametitel: {
        color: '#000',
        fontWeight: '700',
        marginLeft: 15,
    },
    mainbtnadd: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonAdd: {
        marginVertical: 10,
        backgroundColor: '#F53B57',
        width: 140,
        height: 45,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        marginLeft: 5,
    },
    textInput: {
        width: '90%',
        height: 40,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        //marginBottom: 5,
        //marginTop: 5,
        marginLeft: DIMENSION(3),
        backgroundColor: '#85C7E5',
    },

});

//make this component available to the app
export default FormAddProduct;
