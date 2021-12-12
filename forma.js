import React, { useState } from 'react';
import { StyleSheet,TextInput,Text,Button,View } from 'react-native';//Tachhable эффект нажатия


export default function Forma({addtext}) {
 //каждый рах когда мы будем что либо вводить в поле 
 // что либо будет срабатывать функция onChange в этой функции мы получаем то что ввел пользователь
    const [text, setValue]= useState('');
    const onGhange = (text) => {
        setValue(text);

 };
 
 
 
    return (
   // при нажатии на кнопку мы в параметр addtext передаем текст 
   <View>
       <TextInput style={styles.input} onChangeText={onGhange} placeholder=' Поле ввода текста ....' color= "#fffafa"  /> 
      
       <Button  color={"#BC8F8F" }  onPress={() => addtext (text)} title='Добавить задание' /> 
   </View>
  );
}

    const styles = StyleSheet.create({
        input:{
          color:"#fffafa",
          opacity: +6,
          borderBottomWidth: 5,
          borderColor: "black", //#000
          padding: 3,
          fontWeight: "bold",
          marginVertical: 35,
          marginHorizontal: 10
          
        },
    });
