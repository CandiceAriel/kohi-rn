/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Typography, baseContainer } from '../styles/index';

const HomePage = () => {
  return (
    <SafeAreaView  style={styles.container}>
      <Text style={styles.headerText}>Hi, User! What can we get you today?</Text>
    </SafeAreaView >
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    ...baseContainer
  },
  headerText: {
    ...Typography.titleText,
    color: '#ffffff',
  }
})