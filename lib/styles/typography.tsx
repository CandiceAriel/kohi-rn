/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { StyleSheet } from "react-native";

export const typography = StyleSheet.create({
  baseText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 1.92,
    fontFamily: 'Montserrat',
  },
  mediumText: {
    fontSize: 20,
    lineHeight: 21,
    letterSpacing: 2.4,
    fontFamily: 'Montserrat',
  },
  titleText: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    marginTop: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: 'black',
  },
  buttonSmallText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    color: 'black',
  },
});