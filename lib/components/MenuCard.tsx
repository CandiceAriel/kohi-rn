/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { typography, customContainer, } from '../styles/index';
import Menu from '../redux/types/menu';

interface MenuCardProps {
  menu: Menu;
}

const Card : React.FC<MenuCardProps> = ({ menu }) => {
  return (
    <View  style={customContainer.cardContainer}>
      <Text style={typography.cardTitle}>{ menu.name }</Text>
      <Text style={typography.cardTitle}>{ menu.price }</Text>
    </View >
  );
};

export default Card;

const styles = StyleSheet.create({
})