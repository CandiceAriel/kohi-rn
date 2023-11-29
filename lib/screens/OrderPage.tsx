/* eslint-disable dot-notation */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

//import dependencies
import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { firebase } from '@react-native-firebase/database';

//import Components
import OrderTile from '../components/OrderTile';
import { Typography, Container, btn } from '../styles/index';

const OrdersPage = ( { navigation } : {navigation: any} ) => {
  const orders = [ {
    id: '01',
    name: 'Americano',
    price: '10'
  }];

  const goHome = () => {
    navigation.navigate('Home');
  };


  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView  style={styles.container}>
        <View>
          <Pressable style={styles.buttonSmall} onPress={goHome}>
            <Text style={styles.buttonSmallText}>Home</Text>
          </Pressable>
            
          <Text style={styles.headerText}>Your Orders</Text>
        </View>
        
        { orders.length > 0 ? (
            orders.map((o) => (
              <TouchableOpacity key={o['id']}>
                <OrderTile name={o['name']} price={o['price']} id={o['id']}/>
              </TouchableOpacity>  
            ))
          ) : (
            <Text>No todo item</Text>
          )
        }
      </SafeAreaView >
    </ScrollView>
    
  );
};

export default OrdersPage;

const styles = StyleSheet.create({
  container: {
    ...Container.baseContainer,
    flexWrap: "wrap",
    gap: 20,
  },
  headerText: {
    ...Typography.titleText,
    color: '#ffffff',
  },
  buttonSmall: {
    ...btn.buttonSmall,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  buttonSmallText: {
    ...Typography.buttonSmallText,
    fontWeight: 'bold',
    color: 'black',
  }
})