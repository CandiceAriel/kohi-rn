/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { typography, customContainer } from '../styles/index';
import { FlatList } from 'react-native-gesture-handler';

type OrderProps = {
  name: string;
  price: string,
  id: string
};

const OrderTile = (props: OrderProps) => {
 
  return (
    <View style={styles.tileContainer}>
      <Text style={typography.cardTitle}>{ props.name }</Text>
      <Text style={typography.cardTitle}>{ props.price }</Text>
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