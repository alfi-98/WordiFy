
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import Icon from 'react-native-vector-icons/FontAwesome';
 import React, {useState} from 'react';
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
   TextInput
 } from 'react-native';
 
 const WordCards = () => {
   const [search, setSearch] = useState(null);
   return (
     <View style={styles.container}>
         <View style={styles.items}>
           <View style={styles.itemsTop}>
              <Text style={styles.wordName}>Word Name</Text>
              <TouchableOpacity style={ styles.dot}><Image style={ styles.dotIcon} source={require('./images/dot.png')} /></TouchableOpacity>
            </View>
            <View style={styles.property}>
              <View style={styles.propertyOne}><Text style={styles.propertyText}>Noun</Text></View>
              <View style={styles.propertyTwo}><Text style={styles.propertyText}>Letter</Text></View>
            </View>
            <View style={styles.wordBrief}>
              <Text style={styles.wordBriefText}>This is a brief about the word searched</Text>
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
        margin: 30,
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