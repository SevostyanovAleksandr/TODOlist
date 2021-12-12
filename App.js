import React,{useState} from 'react'; //useState состояние
import { StyleSheet, View,FlatList, ImageBackground,Image} from 'react-native';//Flatlist обьект который может вывест спиок
import Shapka from './componeti/shapka';
import List from './componeti/list';
import Forma from './componeti/forma';



export default function App() {
  const image = { uri: "https://kartinkin.net/uploads/posts/2021-04/1617310282_13-p-drevesina-fon-19.jpg" };

  const [list1 , lisst2] = useState([
    {text: "Как составить проект по веб программированию",  key:"1" },
    {text: "Сколько я буду исползовать классов",  key:"2"},
    {text: "Где мне взять информацию по будущему проекту",  key: "3"},
    {text: "Расписать в какое аремя мне будет удобней заниматься проектом",  key: "4"},
  ])
    const addtext = (text)=>{   //
      lisst2((list3) => { // 
        return [
          { text: text, key: Math.random().toString(36.).substring(7) },// присваиваение случайного значения для значения ключа которого мы добавляем в список
          ...list3
        ]
      })

    } 

      const deletelist = (key) => {
      lisst2((list3) => { //  возвращен будет новый список без элемента ключ которого указан в параметре key
      return list3.filter(list1 => list1.key != key) // удаление элемента  

     });
    }
  return (
    
    
      <View style={styles.container} >
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
       <Shapka/>
       <Image style={styles.stiker} source={{uri: 'https://iossro37.ru/upload/iblock/37d/24.04_1.jpg',
        }}></Image>
       <Forma addtext ={addtext}/>
      <View>
        <FlatList data={list1} renderItem={({ item }) => (
          <List el={item} deletelist={deletelist}/>
        )} />
          </View>
          </ImageBackground>
      </View>
    
  ); 
}

    const styles = StyleSheet.create({
      container: {
        flex: 1
      },
       
      stiker:{
         width:69,
         height: 85,
         top: -50,
        left: +310
        
      
      }
    });
