import { createStackNavigator } from 'react-navigation';
import FormAddProduct from '../screen/addProducts';
import ListAllProducts from '../screen/addProducts/listAllProducts';
import FormEditAndDelete from '../screen/addProducts/FlatListProductList';
import ProductScreen from '../screen/products';

const AddProductsNavigator = createStackNavigator({

    FormAddProduct: {
        screen: ProductScreen,
    },
    ListAllProducts:{
        screen: ListAllProducts
      },
      FormEditAndDelete:{
          screen: FormEditAndDelete
      },
      AddProduct:{
          screen: FormAddProduct
      },
    
},{
  headerMode: 'none',

})

export default AddProductsNavigator;