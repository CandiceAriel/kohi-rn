/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Typography, Utils } from '../styles/index';

import Card from '../components/MenuCard';

import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/database';
import { db } from '../../firebase-config.js';
import {
  ref,
  onValue,
  push,
  update,
  remove
} from 'firebase/database';


type Menu = {
  id: string;
  name: string;
};

const HomePage = () => {
  const [menu,setMenu] = useState([]);

  const getMenu = async () => {
    return onValue(ref(db, '/coffee'), querySnapShot => {
      let data = querySnapShot.val() || {};
      setMenu(data);
      console.log(menu.length)
    });
  };

  useEffect(() => {
    getMenu();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <SafeAreaView  style={styles.container}>
      <Text style={styles.headerText}>Hi, User! What can we get you today?</Text>
      {/* <TouchableOpacity>
          <Card name="Americano" price="5"/>
        </TouchableOpacity> */}
      { menu.length > 0 ? (
          menu.map( (result, i) =>  (
            <TouchableOpacity key={i}>
              <Card name={result['name']} price={result['price']} id={result['id']}/>
            </TouchableOpacity> 
          ))
        ) : (
          <Text>No todo item</Text>
        )
      }
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