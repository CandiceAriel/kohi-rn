/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Dimensions } from 'react-native';

const SCREENSIZE = Dimensions.get('screen');

export const baseContainer= {
  padding: 20,
  flex: 1,
  backgroundColor: "#191970",
}

export const navBarContainer= {
  width: SCREENSIZE.width * .8,
    flex: .2,
    justifyContent: 'center',
    alignItems: 'center',
  flexDirection: "row",
}

export const cardContainer = {
  height: 200,
  width: 175,
  padding: 20,
  backgroundColor: "#FFFFFF",
  borderRadius: 8
}

export const tileContainer = {
  padding: 20,
  width: SCREENSIZE.width * .9,
  backgroundColor: "#FFFFFF",
  borderRadius: 8
}