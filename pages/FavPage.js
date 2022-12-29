
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import Icon from 'react-native-vector-icons/Ionicons';
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
   ActivityIndicator,Button,FlatList
 } from 'react-native';
 import RBSheet from "react-native-raw-bottom-sheet";
 import { AsyncStorage } from 'react-native';
 
 const FavPage = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const refRBSheet = useRef();
    const [words, setWords] = useState("")
    const [data, setData] = useState([])
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

        fetch("http://192.168.68.106:4000/")
        .then(res => res.json())
        .then(results => {
          console.log(results)
          setData(results)
          //setLoading(false)
        })

    }, [])

    const renderList = ({item}) => {
      return(
        <View style={styles.favContainer}>
            <View  style={styles.favItem}>
              <View style={styles.circle}><Text style={styles.circleText} key={item._id}>{item.wordName[0]}</Text></View>
              <Text key={item._id} style={styles.wordText}>{item.wordName}</Text>
            </View>
           
          </View>
      )
      
    };
 

    if(!isLoading){
      return ( 
        <View style={styles.container}>
          <View style={styles.test}>
            <TouchableOpacity onPress={() => navigation.goBack()}><Icon name="ios-arrow-back-outline" size={25}  style={styles.favouriteIconClicked}/></TouchableOpacity>
          </View>
           <FlatList
            data = {data}
            renderItem = {renderList}
            keyExtractor = {item => item._id}
           />
          
        </View>
      )
    }
    return <View><Text>'Loading..'</Text></View>


    };

 const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20,
    marginBottom: 10,
    backgroundColor: 'rgb(246, 247, 249)',
    alignItems: 'flex-start',  },
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
    backgroundColor: 'rgb(247, 239, 230)',
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
    color: '#CD853F',
    fontWeight: 'bold',
  },
  wordText: {
    fontSize: 16,
  },
  test: {
    marginTop: 50,
    marginBottom: 20
  },
  dotIcon:{
    width: 20,
    height: 20,
    marginRight: 15,
   },
   bsWord: {
    fontSize: 50,
    fontWeight: '700',
  },
  bottomSheet: {
    padding: 15,
  },
  bsType: {
    width: 80,
     height: 30,
     marginRight: 10,
     marginTop: 10,
     backgroundColor: 'rgb(230, 228, 253)',
     alignItems: 'center',
     justifyContent: 'center',
     borderRadius: 5,
     borderColor: 'black',
     borderWidth: 1,
  },
  bsPronunciation: {
    width: 50,
    height: 30,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  bsProps: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bsDefView: {
    marginTop: 25,
    flexDirection: 'row'
  },
  bsDefinition: {
    fontSize: 20,
    maxWidth: 250
  },
  bsDf: {
    fontSize: 20,
    fontStyle: 'italic',
    opacity: 0.3
  }, 
  bsExm: {
    marginTop: 30
  },
  bsExmText: {
    color: '#80558C',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20
  },
  divider: {
    marginLeft: 25,
    marginTop: 30,
    marginBottom: 10,
    height: 1,
    maxWidth: 300,
    backgroundColor: 'grey',
    opacity: 0.2
  },
  bsEmoji: {
    marginLeft:155,
    fontSize: 30
  },
});
 
 export default FavPage;