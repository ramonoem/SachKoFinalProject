import { action, observable,  } from 'mobx';
import { getProducts, getCountry, getCategory, getBrand, getCategorySeaFood, orderService, updateProducts,getOrderedProducts, getOrderedProductsList } from '../../service/dataServices';
import { pushToArray } from '../../service/mappingServices';
import firebase from 'react-native-firebase';

class Products {

    @observable loading = false;
    @observable products = [];
    @observable refreshing = false;
    @observable selectedProducts = [];
    @observable queriedProducts = [];
    @observable totalPrice = 0;
    @observable queriedCategoryType = [];
    @observable queriedBrand = [];
    @observable queriedCategoryTypeSeaFood = [];
    @observable queriedCountry = [];
    @observable profile = [];
    @observable orderList = [];
    @observable queriedOrederedProducts =[];
   
    @action profileOrder() {
        this.loading = true;
        orderService().onSnapshot(docs => {
            this.orderList = pushToArray(docs);
            console.log(this.orderList)    
            this.refreshing = false;
            this.loading = false;
        })
        
    }

    @action
    queryOrderedProducts(products) {
        this.loading = true;
        getOrderedProducts(products).onSnapshot(docs => {
            this.queriedOrederedProducts = pushToArray(docs);
            this.loading = false
        })
    }

    @action order(name,phone,qty){
        this.loading = true;
        orderService().add({
            dateOrder: new Date(),
            name: name,
            phone:phone,
            products: this.selectedProducts,
        }).then(() => {
            this.loading = false;
        }).catch(error => console.log(error))
    }

    @action
    queryBrand(brand) {
        this.loading = true;
        getBrand(brand).onSnapshot(docs => {
            this.queriedBrand = pushToArray(docs);
            this.loading = false
        })
    }


    @action
    queryCategory(categoryType) {
        this.loading = true;
        getCategory(categoryType).onSnapshot(docs => {
            this.queriedCategoryType = pushToArray(docs);
            this.loading = false
        })
    }


    @action
    queryCategorySeaFood() {
        this.loading = true;
        getCategorySeaFood('SEAFOOD').onSnapshot(docs => {
            this.queriedCategoryTypeSeaFood = pushToArray(docs);
            this.loading = false
        })
    }

    @action
    queryCountry(country) {
        this.loading = true;
        getCountry(country).onSnapshot(docs => {
            this.queriedCountry = pushToArray(docs);
            this.loading = false
        })
    }

    @action
    allPrice(price) {
        this.totalPrice = this.totalPrice + price
    }


    @action
    fetchProduct() {
        this.loading = true;
        getProducts().onSnapshot(docs => {
            this.products = pushToArray(docs);
            this.refreshing = false;
            this.loading = false;
        })
    }



    @action updateProducts(
        id,
        brand,
        country,
        categoryType,
        productName,
        productDescription,
        price,
        discount,
        packing,
        imageUrl,
        callback
    ) {
        this.loading = true;
        updateProducts().doc(id).update({
            id: id,
            brand: brand,
            country: country,
            categoryType: categoryType,
            productName: productName,
            productDescription: productDescription,
            price: price,
            discount: discount,
            packing: packing,
            imageUrl: imageUrl,
        })
            .then(() => {
                this.loading = false;
                callback(true, null)
            }).catch(error => {
                this.loading = false;
                callback(false, error)
            })
    }

    @action deleteProducts(id, callback) {
        this.loading = true;
        updateProducts().doc(id).delete().then(() => {
            this.loading = false;
            callback(true, null)
        }).catch(error => {
            this.loading = false;
            callback(false, error)
        })
    }

    @action selectedFilterProduct() {
        const filterRegex = new RegExp(String(this.state.filteredText), 'i');
        const filter = (item) => (
            filterRegex.test(item) || filterRegex.test(item.categoryType)
        )
        const selectedFilterProduct = products.filter(filter)

    }

    @action selectProduct(selectProduct) {
        console.log("Selected",selectProduct)
        this.selectedProducts = selectProduct;
    }

    @action addProduct(
        brand,

        country,
        categoryType,
        productName,
        productDescription,
        price,
        discount,
        packing,
        imageUrl,
    ) {
        this.loading = true;
        const db = firebase.firestore();
        const ref = db.collection('data').doc(id);
        const id = ref.id;
        ref.set({
            id: id,
            brand,

            country: country,
            categoryType: categoryType,
            productName: productName,
            productDescription: productDescription,
            price: price,
            discount: discount,
            packing: packing,
            imageUrl: imageUrl,
        }).then(() => {
            this.loading = false;
        })
    }
}
export default Products;