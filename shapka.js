import React from 'react';
import { StyleSheet,Text,View } from 'react-native';


export default function Shapka() {
  
    const image = { uri: "https://kartinkin.net/uploads/posts/2021-04/1617310282_13-p-drevesina-fon-19.jpg" };
  
    return (   
      <View style = {styles.main}> 
      <Text style = {styles.text}> Список задач</Text>o

      </View>
  
  );
}

    const styles = StyleSheet.create({
     main: {
         paddingTop:50, // отступ
         height: 100, // высота обьекта
    
         opacity: 0.8

     },
     text: {
         
         textAlign: "center",
         color: "#fffafa",
         fontSize: 32,
         lineHeight: 84,
         fontWeight: "bold",
         backgroundColor: "#808000"




     }

    });
