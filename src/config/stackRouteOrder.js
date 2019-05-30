import { createStackNavigator } from 'react-navigation';
import Ionicons from "react-native-vector-icons/Ionicons";
import MeScreen from '../screen/me';
import FlatListOrderProducts from '../screen/me/flatListOrderProducts';

const OrderNavigator = createStackNavigator({

    Main: {
        screen: MeScreen,
    },
    FlatListOrderProducts:{
        screen: FlatListOrderProducts
      }
},{
  headerMode: 'none',

})

export default OrderNavigator;