/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { Typography, Container } from '../styles/index';

type CardProps = {
  name: string;
  price: string,
  id: string
};

const Card = (props: CardProps) => {
  return (
    <View  style={Container.cardContainer}>
      <Text style={Typography.cardTitle}>{ props.name }</Text>
      <Text style={Typography.cardTitle}>{ props.price }</Text>
    </View >
  );
};

export default Card;

const styles = StyleSheet.create({
  cardTitle: {
    ...Typography.cardTitle
  }
})