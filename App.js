import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button,  TextInput, FlatList, SafeAreaView} from 'react-native';


export default function App() {
//Tilamuuttujat ja niiden alustaminen
//syötetylle tekstille ja flatList osille
const [text, setText] = useState ('');
const [data, setData] = useState ([ ]);

//Funktio lisää tekstin listaan
const pressedAdd = () => {
  setData([...data, { key: text }]);
  setText('');
}

//Funktio tyhjentää listan
const pressedClear = () => {
  setData([]);
} 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Shopping list </Text>
      {/*Syöttökenttä ostosten kirjoittamiseen*/}
      {/*onChange antaa muuttujalle sisällön */}
      <TextInput 
          style={styles.input} 
          onChangeText= {text=> setText(text)}
          value={text}/>

       {/*Painikkeet ja funktiokutsut */} 
       <View style={styles.container2}>
       <Button onPress={pressedAdd} title= "ADD" /> 
       <Button onPress={pressedClear} title= "CLEAR" /> 
       </View>

       {/*Flatlist listan näyttämiseen */}
       <FlatList 
        data={data}
        renderItem={({item}) => <Text style ={styles.item}>{item.key}</Text>}
        keyExtractor ={(item, index) => index.toString() } />
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  input : {
    marginTop: 100,
    width:200  , 
    height: 30,
    borderColor: 'gray', 
    borderWidth: 1
  },
  text:{
    fontSize: 20,    
  },
  item: {
    padding : 5,
    fontSize: 20,
    marginTop: 1,
  }
  
  
});
