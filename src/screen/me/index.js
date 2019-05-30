//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import { observer, inject } from 'mobx-react';
import { DIMENSION } from '../../module/';
import HeaderScreen from '../../component/header';
import CartProfileScreen from './cartProfile';



@inject('products')
@observer
class MeScreen extends Component {
    componentWillMount() {
        this.props.products.profileOrder();
    }
    render() {
        const {orderList } = this.props.products
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <HeaderScreen
                        title='Me'
                    />
                    <TouchableOpacity
                     onPress={() => this.props.navigation.openDrawer()}
                    >
                    </TouchableOpacity>

                </View>
                <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                    <View style={styles.body}>
                        <View style={{ backgroundColor: '#FFF', flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <FlatList
                                    numColumns={2}
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={(item, index) => index.toString()}
                                    data={orderList}
                                    renderItem={({ item }) =>
                                        <CartProfileScreen
                                            nav={this.props.navigation}
                                            product={item}
                                        />}
                                />
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
    container: {
        flex: 1,
        backgroundColor: '#F53B55',
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
export default MeScreen;
