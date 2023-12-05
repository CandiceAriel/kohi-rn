/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { typography, customContainer, } from '../styles/index';

type CardProps = {
  name: string;
  price: string,
  id: string
};

const Card = (props: CardProps) => {
  return (
    <View  style={customContainer.cardContainer}>
      <Text style={typography.cardTitle}>{ props.name }</Text>
      <Text style={typography.cardTitle}>{ props.price }</Text>
    </View >
  );
};

export default Card;

const styles = StyleSheet.create({
})