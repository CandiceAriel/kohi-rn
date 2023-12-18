/* eslint-disable dot-notation */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

//import dependencies
import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, Pressable } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useAppDispatch,useAppSelector } from '../hooks/customHooks';
import { useSelector } from 'react-redux'

//import Components
import OrderTile from '../components/OrderTile';
import { typography, customContainer, customBtn } from '../styles/index';
import { RootState } from '../redux/store';
import { Order } from '../redux/reducers/ordersReducer';

const CartPage = ( { navigation } : {navigation: any} ) => {
  const goHome = () => {
    navigation.navigate('Home');
  };

  const cartItem = useSelector((state: RootState) => state.orderReducer.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(cartItem)
  }, [cartItem]);

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={customContainer.baseContainer}>
        <View style={customContainer.navBarContainer}>
          <Pressable style={customBtn.buttonSmall} onPress={goHome}>
            <Text style={typography.buttonSmallText}>Home</Text>
          </Pressable>
          <Text style={styles.headerText}>Your Orders</Text>
        </View>
        { cartItem?.map((o) => (
          <TouchableOpacity key={o['id']}>
            <OrderTile item={o}/>
          </TouchableOpacity>
        ))}
      </View >
    </ScrollView>
  );
};

export default CartPage;

const styles = StyleSheet.create({
  headerText: {
    ...typography.titleText,
    color: '#ffffff',
  },
})