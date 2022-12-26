
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import Icon from 'react-native-vector-icons/FontAwesome';
 import React, {useState,useEffect, useRef} from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TouchableOpacity,
   Image,
   TextInput, 
   ActivityIndicator,Button
 } from 'react-native';
 import RBSheet from "react-native-raw-bottom-sheet";
 import { AsyncStorage } from 'react-native';
 
 const FavPage = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const refRBSheet = useRef();
    const [words, setWords] = useState("")
    useEffect( () => {
        AsyncStorage.getItem('@favData')
        .then((value) => {
          if(value !== null){
            setWords(JSON.parse(value));
            setLoading(false);
          }
          console.log("recieved data: ", value)
            
            //setLoading(false);
        }) 
        console.log("Word Data: ", words)
        /*if(words){
          let data = JSON.parse(words);
          console.log(data.word)
          setWords(data)
          console.log(words.word)

        }*/

    }, [])

    if(!isLoading){
      return (
        <View style={styles.container}>
          <View style={styles.favContainer}>
            <View  style={styles.favItem}>
              <View style={styles.circle}><Text style={styles.circleText}>{words.word[0]}</Text></View>
              <Text>{words.word}</Text>
            </View>
           
          </View>
          
        </View>
      )
    }
    return <View><Text>'Loading..'</Text></View>


    };

 const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    padding: 20,
    marginBottom: 10,
    backgroundColor: 'rgb(246, 247, 249)',
  },
  favContainer: {
    width: 350,
    height: 60,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 10,
    shadowOffset: {width: 0, height: 0},  
    shadowColor: '#171717',  
    shadowOpacity: 0.1,  
    shadowRadius: 5,
    
  },
  circle: {
    backgroundColor: '#A7C7E7',
    width: 25,
    height: 25 ,
    borderRadius: 15,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    maxWidth: '80%',

  },
  circleText: {
    color: '#6495ED',
    fontWeight: 'bold'
  }
    
});
 
 export default FavPage;