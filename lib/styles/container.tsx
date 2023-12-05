/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native';

const SCREENSIZE = Dimensions.get('screen');

export const customContainer = StyleSheet.create({
  baseContainer: {
    padding: 20,
    flex: 1,
    minHeight: SCREENSIZE.height,
    backgroundColor: '#191970',
  },
  navBarContainer: {
    width: SCREENSIZE.width * .8,
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 30,
  },
  cardContainer: {
    height: 200,
    width: 175,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  tileContainer: {
    padding: 20,
    minHeight: 80,
    width: SCREENSIZE.width * .9,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
});