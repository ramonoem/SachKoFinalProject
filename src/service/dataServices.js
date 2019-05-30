import firebase from 'react-native-firebase'
export function getProducts() {
    return (
        firebase.firestore().collection('data').limit(10)
    )
};
export function updateProducts() {
    return (
        firebase.firestore().collection('data')
    )
};


export function orderService () {
    return firebase.firestore().collection('orderproduct')
}

export function getCountry(country) {
    const db = firebase.firestore().collection('data')
    const data =  db.where('country', '==', country).limit(15)
    return (
           data
    )
    
};
export function getOrderedProducts(products) {
    const db = firebase.firestore().collection('orderproduct')
    const data =  db.where('prodcuts', '==', products)
    return (
           data
    )
    
};


export function getBrand(brand) {
    const db = firebase.firestore().collection('data')
    const data =  db.where('brand', '==', brand).limit(15)
    return (
           data
    )
    
};

export function getCategory(categoryType) {
    const db = firebase.firestore().collection('data')
    const data =  db.where('categoryType', '==', categoryType).limit(15)
    return (
           data
    )
    
};
export function getCategorySeaFood(SEAFOOD) {
    const db = firebase.firestore().collection('data')
    const data = db.where('categoryType', '==', SEAFOOD).where('productName','==', 'Salmon Head Fresh' ).limit(5)
    return (
           data
    )
};


export function pushOrderList(id, name, phone) {
    const db = firebase.firestore().collection('data')
    const data =  db.where('categoryType', '==', categoryType).limit(15)
    return (
           data
    )
    
};