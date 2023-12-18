/* eslint-disable dot-notation */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

//import dependencies
import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, Pressable, SafeAreaView, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { firebase } from '@react-native-firebase/database';

//import Components
import useMenu from '../hooks/useMenu';
import Card from '../components/MenuCard';
import { typography, customContainer, customBtn } from '../styles/index';
import { useAppSelector, useAppDispatch } from '../hooks/customHooks';
import { Order } from '../redux/reducers/ordersReducer';
import { orderAdded, orderSelector } from '../redux/slices/orderSlice';

const HomePage = ({ navigation } : {navigation: any}) => {
  const menuDt = useMenu();

  const goToCart = () => {
    navigation.navigate('Orders');
  };

  const [orders, setOrders] = useState<Array<Order>>([]);
  const selectedOrders = useAppSelector(orderSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setOrders(selectedOrders);
  }, [selectedOrders]);

  function handleAddOrder(itemName: string, itemPrice: string) {
    const newOrder = {
      id: (orders.length + 1).toString(),
      name: itemName,
      price: itemPrice,
    };
    dispatch(orderAdded(newOrder));
    console.log(orders)
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
              <TouchableOpacity key={menu['id']} onPress={() => handleAddOrder(menu['name'], menu['price'])}>
                <Card name={menu['name']} price={menu['price']} id={menu['id']}/>
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