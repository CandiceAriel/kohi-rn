/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Typography, Utils } from '../styles/index';

import Card from '../components/MenuCard';

type Menu = {
  id: string;
  name: string;
};

const HomePage = () => {
  const [menu,setMenu] = useState([]);

  // const getMenu = async () => {
  //   try {
  //     const response = await fetch(
  //       '../assets/coffee.json',
  //     );
  //     const json = await response.json();
  //     setMenu(json.coffee)
  //     console.warn(menu);
  //     return menu;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getMenu();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[])

  return (
    <SafeAreaView  style={styles.container}>
      <Text style={styles.headerText}>Hi, User! What can we get you today?</Text>
      <TouchableOpacity>
          <Card name="Americano" price="5"/>
        </TouchableOpacity>
      {/* { menu.map(({name, price}) => {
        return <TouchableOpacity>
          <Card name={name} price='5'/>
        </TouchableOpacity>
      })} */}
    </SafeAreaView >
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    ...Utils.baseContainer
  },
  headerText: {
    ...Typography.titleText,
    color: '#ffffff',
  }
})