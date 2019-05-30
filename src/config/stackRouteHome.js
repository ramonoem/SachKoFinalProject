import { createStackNavigator } from 'react-navigation';
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from '../screen/home';
import DetailScreen from '../screen/detail';
import CartScreen from '../screen/cart';
import ListCountryScreen from '../screen/countryType';
import AllCategoryScreen from '../screen/allCategory/allCategory';
import BrandScreen from '../screen/brands';
import FormEditAndDelete from '../screen/addProducts/FlatListProductList';
import ListAllProducts from '../screen/addProducts/listAllProducts';
import CartListProduct from '../screen/addProducts/CartListProduct';
import CountrySelectedListView from '../screen/countryType/countrySelectedListView';
import CartCountryListViewScreen from '../screen/countryType/cartCountryListView';
import CartCategoryScreen from '../screen/allCategory/cartCategory';
import LightCategoryListCartCategoryScreen from '../screen/allCategory/LightCategoryListCart';
import CartBrandListViewScreen from '../screen/brands/CartBrandListView';
import BuyNowScreen from '../screen/buyNow';
import CartProfileScreen from '../screen/me/cartProfile';



const color = "#373737";
const activeColor = "#F15C53";
const HomeNavigator = createStackNavigator({

  Main: {
    screen: HomeScreen,
    navigationOptions: {
      title: "HomeScreen",
      tabBarIcon: ({ focused }) =>
        focused ? (
          <Ionicons
            name="ios-home"
            size={24}
            iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
            color={activeColor}
          />
        ) : (
            <Ionicons
              name="ios-home-outline"
              size={24}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={color}
            />
          )
    }
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      title: "DetailScreen",
      tabBarIcon: ({ focused }) =>
        focused ? (
          <Ionicons
            name="ios-home"
            size={24}
            iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
            color={activeColor}
          />
        ) : (
            <Ionicons
              name="ios-home-outline"
              size={24}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={color}
            />
          )
    }
  },
  CartScreen: {
    screen: CartScreen,
    navigationOptions: {
      title: "CartScreen",
      tabBarIcon: ({ focused }) =>
        focused ? (
          <Ionicons
            name="ios-cart"
            size={24}
            iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
            color={activeColor}
          />
        ) : (
            <Ionicons
              name="ios-cart-outline"
              size={24}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={color}
            />
          )
    }
  },
  ListCountryScreen: {
    screen: ListCountryScreen
  },
  AllCategoryScreen: {
    screen: AllCategoryScreen
  },
  BrandScreen: {
    screen: BrandScreen
  },
  ListAllProducts:{
    screen: ListAllProducts
  },
  CartListProduct:{
    screen: CartListProduct
  },
  CountrySelectedListView:{
    screen: CountrySelectedListView
  },
  CartCountryListViewScreen:{
    screen: CartCountryListViewScreen
  },
  AllCategoryScreen:{
    screen: AllCategoryScreen
  },
  CartCategoryScreen:{
    screen: CartCategoryScreen
  },
  LightCategoryListCartCategoryScreen:{
    screen: LightCategoryListCartCategoryScreen
  },
  CartBrandListViewScreen:{
    screen: CartBrandListViewScreen
  },
  CartProfileScreen:{
    screen: CartProfileScreen
  },
  

},
  {
    headerMode: 'none',
    removeClippedSubviews: true,
    //initialRouteName: "HomeScreen",
    tabBarPosition: "bottom",
    animationEnabled: true,
    activeTintColor: activeColor,
    inActiveTintColor: color,
    lazy: true,
    tabBarOptions: {
      swipeEnabled: true,
      showLabel: true,
      showIcon: true,
      labelStyle: {
        fontSize: 12,
        fontWeight: '300'
      },
      activeTintColor: activeColor,
      style: {
        elevation: 0,
        borderTopWidth: 1,
        borderTopColor: '#F0F0F5',
        backgroundColor: '#fff',
        paddingTop: 5,
      },
      indicatorStyle: {
        backgroundColor: '#fff',
      },
    },
  }
)


export default HomeNavigator;