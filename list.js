import React from 'react';
import { StyleSheet,TouchableOpacity,Text } from 'react-native';//Tachhable эффект нажатия


export default function List({el,deletelist}) {
  return (
   < TouchableOpacity onPress={() => deletelist (el.key)  } >
       <Text style = {styles.text}>{el.text}</Text>
   </TouchableOpacity>
  );
}

    const styles = StyleSheet.create({
        text:{
         padding: 20, // внутренние отступы
        textAlign: "center", // р8спрложение по центру
        borderRadius: 4,// скругление углов
        backgroundColor: "#008080",
        opacity: 0.8,
        borderWidth: 2, // обводка задач  
        marginHorizontal: 5, // отсуп от края
        marginVertical: 7
      

    }
    

    });
