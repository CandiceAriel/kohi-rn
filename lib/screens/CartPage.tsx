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

const OrdersPage = ( { navigation } : {navigation: any} ) => {
  const goHome = () => {
    navigation.navigate('Home');
  };

  const [orders, setOrders] = useState<Array<Order>>([]);
  const cartItem = useSelector((state: RootState) => state.orderReducer.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setOrders(cartItem);
    console.log(orders)
  }, [cartItem, orders]);

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={customContainer.baseContainer}>
        <View style={customContainer.navBarContainer}>
          <Pressable style={customBtn.buttonSmall} onPress={goHome}>
            <Text style={typography.buttonSmallText}>Home</Text>
          </Pressable>
          <Text style={styles.headerText}>Your Orders</Text>
        </View>
        { orders?.map((o) => (
          <TouchableOpacity key={o['id']}>
            <OrderTile name={o['name']} price={o['price']} id={o['id']} qty={o['qty']}/>
          </TouchableOpacity>
        ))}
      </View >
    </ScrollView>
  );
};

export default OrdersPage;

const styles = StyleSheet.create({
  headerText: {
    ...typography.titleText,
    color: '#ffffff',
  },
})