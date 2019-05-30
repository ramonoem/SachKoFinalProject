//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Picker, ActivityIndicator, Alert } from 'react-native';
import { observer, inject } from 'mobx-react';
import { DIMENSION } from '../../module/';



@inject('products')
@observer
class FormEditAndDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.navigation.state.params.product.id,
            brand: this.props.navigation.state.params.product.brand,
            country: this.props.navigation.state.params.product.country,
            categoryType: this.props.navigation.state.params.product.categoryType,
            productName: this.props.navigation.state.params.product.productName,
            productDescription: this.props.navigation.state.params.product.productDescription,
            price: this.props.navigation.state.params.product.price,
            discount: this.props.navigation.state.params.product.discount,
            packing: this.props.navigation.state.params.product.packing,
            imageUrl:this.props.navigation.state.params.product.imageUrl,
        };
    }

    componentDidMount() {
    }

    onDelete = () => {
        Alert.alert(
            'Delete',
            'Do you want to delete?',
            [
                { text: 'OK', onPress: () => this._delete() },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            ],
            { cancelable: false }
        )
    }

    _delete() {
        this.props.products.deleteProducts(this.props.navigation.state.params.product.id,(success, error) => {
            if (success)
                this.props.navigation.goBack();
            else {
                alert(error)
            }
        })
    }

    _Update = () => {
        const {
            id,
            imageUrl, } = this.props.navigation.state.params.product;
        this.props.products.updateProducts(
            id,
            this.state.brand,
            this.state.country,
            this.state.categoryType,
            this.state.productName,
            this.state.productDescription,
            this.state.price,
            this.state.discount,
            this.state.packing,
            imageUrl, ((success, response) => {
                if (success) {
                    this.props.navigation.goBack();
                } else {
                    alert(response)
                }
            }))
    }
    render() {
        const {
            id, brand, country, categoryType,productName,productDescription,
            price, discount,  packing, imageUrl, loading, } = this.props.navigation.state.params.product;
        return (
            <View style={styles.containerStyle}>
                <View style={styles.harder}>
                    <Text style={styles.textharder}>Update & Delete</Text>
                </View>
                <ScrollView style={styles.formInsert}>
                <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>Country:</Text>
                        <TextInput
                            value={country}
                            placeholderTextColor={'#000'}
                            autoCapitalize={'none'}
                            style={styles.textInput}
                            placeholder={'user name'}
                            onChangeText={(value) => this.setState({ country: value })}
                        />
                    </View>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>CategoryType:</Text>
                        <TextInput
                            value={categoryType}
                            placeholderTextColor={'#000'}
                            autoCapitalize={'none'}
                            style={styles.textInput}
                            placeholder={'user name'}
                            onChangeText={(value) => this.setState({ categoryType: value })}
                        />
                    </View>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>Brand:</Text>
                        <TextInput
                            value={brand}
                            placeholderTextColor={'#000'}
                            autoCapitalize={'none'}
                            style={styles.textInput}
                            placeholder={'user name'}
                            onChangeText={(value) => this.setState({ brand: value })}
                        />
                    </View>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>Id:</Text>
                        <TextInput
                            value={id}
                            placeholderTextColor={'#000'}
                            autoCapitalize={'none'}
                            style={styles.textInput}
                            placeholder={'user name'}
                            onChangeText={(value) => this.setState({ id: value })}
                        />
                    </View>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>ProductName:</Text>
                        <TextInput
                            value={productName}
                            placeholderTextColor={'#000'}
                            autoCapitalize={'none'}
                            style={styles.textInput}
                            placeholder={'user name'}
                            onChangeText={(value) => this.setState({ productName: value })}
                        />
                    </View>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>ProductDescription:</Text>
                        <TextInput
                            value={productDescription}
                            placeholderTextColor={'#000'}
                            autoCapitalize={'none'}
                            style={styles.textInput}
                            placeholder={''}
                            onChangeText={(value) => this.setState({ productDescription: value })}
                        />
                    </View>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>Price :</Text>
                        <TextInput
                            value={price}
                            placeholderTextColor={'#000'}
                            autoCapitalize={'none'}
                            style={styles.textInput}
                            placeholder={''}
                            onChangeText={(value) => this.setState({ price: value })}
                        />
                    </View>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>Discount:</Text>
                        <TextInput
                            value={discount}
                            placeholderTextColor={'#000'}
                            autoCapitalize={'none'}
                            style={styles.textInput}
                            placeholder={''}
                            onChangeText={(value) => this.setState({ discount: value })}
                        />
                    </View>
                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>KG : </Text>
                        <TextInput
                            value={packing}
                            placeholderTextColor={'#000'}
                            autoCapitalize={'none'}
                            style={styles.textInput}
                            placeholder={''}
                            onChangeText={(value) => this.setState({ packing: value })}
                        />
                    </View>

                    <View style={styles.tittelcardaddproduct}>
                        <Text style={styles.nametitel}>ImageUrl:</Text>
                        <TextInput
                            value={imageUrl}
                            placeholderTextColor={'#000'}
                            autoCapitalize={'none'}
                            style={styles.textInput}
                            placeholder={''}
                            onChangeText={(value) => this.setState({ imageUrl: value })}
                        />
                    </View>
                    <View style={styles.mainbtnadd}>
                        <TouchableOpacity
                            disabled={loading}
                            style={styles.buttonAdd}
                            onPress={() => this._Update()}
                        >
                            <Text style={{ color: '#FFF', alignItems: 'flex-end' }}>UpDate</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mainbtnadd}>
                        <TouchableOpacity
                            disabled={loading}
                            onPress={() => this.onDelete()}
                            style={styles.buttonAdd}
                        >
                            <Text style={{ color: '#FFF', alignItems: 'flex-end' }}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                    {loading ?
                        <ActivityIndicator size="large" color="#0000ff" />
                        : <View />
                    }
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
        fontSize:15,
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
export default FormEditAndDelete;
