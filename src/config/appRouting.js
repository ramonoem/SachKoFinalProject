import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HomeNavigator from './stackRouteHome'
import OrderNavigator from './stackRouteOrder'
import AddProductsNavigator from './stackRouteAddProducts';
import CartNavigator from './stackRouteCart';

const color = "#373737";
const activeColor = "#F15C53";
const AppRouting = createBottomTabNavigator({
    Home:{
        screen: HomeNavigator,
        navigationOptions: {
            title: "Home",
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
                  name="ios-home"
                  size={24}
                  iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                  color={color}
                />
              )
          }
    },
    Cart:{
        screen: CartNavigator,
        navigationOptions: {
            title: "Cart",
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
                  name="ios-cart"
                  size={24}
                  iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                  color={color}
                />
              )
          }
    },
    AddProduct:{
      screen: AddProductsNavigator,
      navigationOptions: {
        title: "Products",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <FontAwesome
              name="product-hunt"
              size={24}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={activeColor}
            />
          ) : (
            <FontAwesome
              name="product-hunt"
              size={24}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={color}
            />
          )
      }

    },
    MeScreen:{
      screen: OrderNavigator,
      navigationOptions: {
        title: "Me",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <MaterialCommunityIcons
              name="face-profile"
              size={24}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={activeColor}
            />
          ) : (
            <MaterialCommunityIcons
              name="face-profile"
              size={24}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={color}
            />
          )
      }
    }
   
},
{
    removeClippedSubviews : true,
    initialRouteName: "Home",
    tabBarPosition: "bottom",
    animationEnabled: true,
    activeTintColor: activeColor,
    inActiveTintColor: color,
    lazy: true,
    tabBarOptions: {
        swipeEnabled: true,
        showLabel: true,
        showIcon: true,
        labelStyle : {
            fontSize: 12,
            fontWeight: '300'
        },
        activeTintColor : activeColor,
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


export default AppRouting;