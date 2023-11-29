/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect} from "react";
import { firebase } from '@react-native-firebase/database';

const HomeLogic = () => {
  const db = firebase.database();
  const [menu,setMenu] = useState([]);

  const getMenu = async () => {
    const dbData =  db.ref('/coffee')
    .on('value', snapshot => {
      let data = snapshot.val() || {};
      setMenu(data);
      console.log(menu.length)
    });

    return dbData;
  };

  const handleMenu = () => {

  }

  useEffect(() => {
    getMenu();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return menu;
}

export default HomeLogic;