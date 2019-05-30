import { createStackNavigator } from 'react-navigation';
import Ionicons from "react-native-vector-icons/Ionicons";
import CartScreen from '../screen/cart';
import BuyNowScreen from '../screen/buyNow';

const CartNavigator = createStackNavigator({

    CartScreen: {
        screen: CartScreen,
    },
    BuyNowScreen:{
        screen: BuyNowScreen
    }
    
},{
  headerMode: 'none',

})

export default CartNavigator;