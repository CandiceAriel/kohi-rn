/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { typography, customContainer } from '../styles/index';
import { FlatList } from 'react-native-gesture-handler';
import CartItem from '../redux/types/cartItem';

interface CartItemTileProps {
  item: CartItem;
}

const OrderTile : React.FC<CartItemTileProps> = ({ item }) => {
 
  return (
    <View style={styles.tileContainer}>
      <Text style={typography.cardTitle}>{ item.name }</Text>
      <Text style={typography.cardTitle}>{ item.price }</Text>
      <Text style={typography.cardTitle}>{ item.quantity }</Text>
    </View >
  );
};

export default OrderTile;

const styles = StyleSheet.create({
  tileContainer: {
    ...customContainer.tileContainer,
    flex: 1,
    padding: 10,
  },
})