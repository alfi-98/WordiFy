
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import Icon from 'react-native-vector-icons/FontAwesome';
 import React, {useState,useEffect} from 'react';
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
   ActivityIndicator
 } from 'react-native';
 
 const WordCards = (props) => {
   console.log("props: ",props.searchedWord)

   const [words, setWords] = useState(null);
   const [isLoading, setLoading] = useState(false);
   console.log('words', words);
   
    useEffect( () => {

      const getWord  = async () => {
        const res = await fetch(`https://owlbot.info/api/v4/dictionary/`+ props.searchedWord, {
          method: 'GET',
          headers: {
              "Authorization": 'Token cf5dd14b9e30388005dee0f08e249f51fe7099e3',
              "Content-Type" :'application/json'
            }
        })
        setLoading(true);
        const json = await res.json()
        setWords(json)
        setLoading(false);
  
      }
        getWord()
      
      
    }, [props?.searchedWord]);

   const getContent = () => {
     return <ActivityIndicator size="large"/>
   }
   return (
     <View style={styles.container}>
         <View style={styles.items}>
           <View style={styles.itemsTop}>
             {!isLoading &&  (<Text>
               {words?.word}
               
               </Text> : 'Loading...')}
            <TouchableOpacity style={ styles.dot}><Image style={ styles.dotIcon} source={require('./images/dot.png')} /></TouchableOpacity>
            </View>
            <View style={styles.property}>
              <View style={styles.propertyOne}><Text style={styles.propertyText}>
                {words?.definitions[0].type}
                
                </Text></View>
              <View style={styles.propertyTwo}><Text style={styles.propertyText}>
                {words?.pronunciation}
                
                </Text></View>
            </View>
            <View style={styles.wordBrief}>
              <Text style={styles.wordBriefText}>
                {words?.definitions[0].definition}
                
                </Text>           
            </View>
         </View>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 150,
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 10,
        shadowOffset: {width: 0, height: 0},  
        shadowColor: '#171717',  
        shadowOpacity: 0.1,  
        shadowRadius: 5, 
    }, 
    wordName: {
        fontSize: 20,
    },
    items: {
        marginLeft: 15,
        marginTop: 15

    },
     dotIcon:{
      width: 20,
      height: 20,
      marginRight: 15,
     },
     itemsTop: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center'
     },
     property: {
      flexDirection: 'row',
      alignItems: 'center'
     },
     propertyOne: {
       width: 80,
       height: 30,
       marginRight: 10,
       marginTop: 10,
       backgroundColor: 'rgb(230, 228, 253)',
       alignItems: 'center',
       borderRadius: 5,
       borderColor: 'grey',
       borderWidth: 0.5
     },
     propertyTwo: {
      width: 50,
      height: 30,
      marginTop: 10,
      alignItems: 'center',
      borderWidth: 0.5,
      borderColor: 'grey',
      borderRadius: 5

    }, 
    propertyText: {
      margin: 5
    },
    wordBrief: {
      marginTop: 20,
      maxWidth: '80%'
    },
    wordBriefText: {
      color: 'grey'
    }

});
 
 export default WordCards;