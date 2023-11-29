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
import { Typography, Container, btn } from '../styles/index';

const HomePage = ({ navigation } : {navigation: any}) => {
  const menuDt = useMenu();

  const goToCart = () => {
    navigation.navigate('Orders');
  };

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView  style={styles.container}>
        <View>
          <Pressable style={styles.buttonSmall} onPress={goToCart}>
            <Text style={styles.buttonSmallText}>Cart</Text>
          </Pressable>
          <Text style={styles.headerText}>Hi, User! What can we get you today?</Text>
          
        </View>
        
        { menuDt.length > 0 ? (
            menuDt.map((menu) => (
              <TouchableOpacity key={menu['id']}>
                <Card name={menu['name']} price={menu['price']} id={menu['id']}/>
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

export default HomePage;

const styles = StyleSheet.create({
  container: {
    ...Container.baseContainer,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20
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