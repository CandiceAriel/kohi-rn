/* eslint-disable dot-notation */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

//import dependencies
import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, Pressable, SafeAreaView, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { firebase } from '@react-native-firebase/database';
import { useDispatch, useSelector } from 'react-redux';

//import Components
import useMenu from '../hooks/useMenu';
import Card from '../components/MenuCard';
import { typography, customContainer, customBtn } from '../styles/index';
import { RootState } from '../redux/store';
import { Order } from '../redux/reducers/ordersReducer';
import { addToCart, orderSelector } from '../redux/slices/orderSlice';


const HomePage = ({ navigation } : {navigation: any}) => {
  const menuDt = useMenu();

  const goToCart = () => {
    navigation.navigate('Orders');
  };

  const [orders, setOrders] = useState<Array<Order>>([]);
  const selectedOrders = useSelector((state: RootState) => state.orderReducer.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    setOrders(selectedOrders);
  }, [selectedOrders]);

  function handleAddOrder(itemId: string, itemName: string, itemPrice: string) {
    const newOrder = {
      id: (orders.length + 1).toString(),
      itemId: itemId,
      name: itemName,
      price: itemPrice,
    };
    dispatch(addToCart(newOrder));
    console.log(newOrder);
  }

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View  style={styles.container}>
        <View>
          <Pressable style={customBtn.buttonSmall} onPress={goToCart}>
            <Text style={typography.buttonSmallText}>Cart</Text>
          </Pressable>
          <Text style={styles.headerText}>Hi, User! What can we get you today?</Text>
        </View>
        { menuDt.length > 0 ? (
            menuDt.map((menu) => (
              <TouchableOpacity key={menu['id']} onPress={() => handleAddOrder( menu['id'],menu['name'], menu['price'])}>
                <Card menu={menu}/>
              </TouchableOpacity>  
            ))
          ) : (
            <Text>No todo item</Text>
          )
        }
      </View >
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    ...customContainer.baseContainer,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20
  },
  headerText: {
    ...typography.titleText,
    color: '#ffffff',
  },
  buttonSmallText: {
    ...typography.buttonSmallText,
    fontWeight: 'bold',
    color: 'black',
  }
})