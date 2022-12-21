
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
   ActivityIndicator
 } from 'react-native';
 import RBSheet from "react-native-raw-bottom-sheet";
 import { AsyncStorage } from 'react-native';
 
 const FavPage = ({navigation}) => {
    const [isLoading, setLoading] = useState(false);
    const refRBSheet = useRef();
    const [value, setValue] = useState()
    const [words, setWords] = useState()

    const getValue = () => {
        AsyncStorage.getItem('@favData')
        .then((value) => {
            setValue(value);
        })
    }
    useEffect(() => {
        getValue()
    }, [])

    const BottomSheet = () => {
      return(
        
        <View style={styles.bottomSheet}>
          <Text style={styles.bsEmoji}> {words?.definitions[0].emoji} </Text>
          <Text style={styles.bsWord}>{words?.word}</Text>
          <View style={styles.bsProps}>
            <View style={styles.bsType}>
              <Text style={styles.typeText}>{words?.definitions[0].type}</Text>
            </View>
            <View style={styles.bsPronunciation}>
              <Text style={styles.pronText}>{words?.pronunciation}</Text>
            </View>
          </View>
          <View style={styles.bsDefView}>
            <Text style={styles.bsDf}>Definition </Text>
            <Text style={styles.bsDefinition}> {words?.definitions[0].definition}</Text>
          </View>
          <View style={styles.divider}>

          </View>
          <View style={styles.bsExm}>
            <Text style={styles.bsExmText}>" {words?.definitions[0].example} "</Text>
          </View>
        </View>
      )
    }

   return (
     <View style={styles.container}>
         <View style={styles.items}>
           <View style={styles.itemsTop}>
             {!isLoading &&  (<Text>
               {value?.word}
               
               </Text> : 'Loading...')}
               <View style={styles.favDot}>
                <TouchableOpacity onPress={() => refRBSheet.current.open()} style={ styles.dot}><Image style={ styles.dotIcon} source={require('../components/images/dot.png')} /></TouchableOpacity>
               </View>
           
            </View>
            <View style={styles.property}>
              <View style={styles.propertyOne}><Text style={styles.propertyText}>
                {value?.definitions[0].type}
                
                </Text></View>
              <View style={styles.propertyTwo}><Text style={styles.propertyText}>
                {value?.pronunciation}
                
                </Text></View>
            </View>
            <View style={styles.wordBrief}>
              <Text style={styles.wordBriefText}>
                {value?.definitions[0].definition}
                
                </Text>           
            </View>
         </View>
         <RBSheet
          ref={refRBSheet}
          height={500}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
             backgroundColor: 'rgba(52, 52, 52, 0.8)',
            },
            draggableIcon: {
              backgroundColor: "#000"
            },
            container: {
              backgroundColor: 'rgb(230, 228, 253)',
            }
           
          }}
        >
           <BottomSheet/>
      </RBSheet>
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
      maxWidth: '90%',
      maxHeight: 50
    },
    wordBriefText: {
      color: 'grey'
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
    favDot: {
      flexDirection: "row", 
      alignItems: 'center'
    },
    favourites: {
      marginRight: 10,
      width: 30,
      height: 30,
      backgroundColor: 'rgb(241, 211, 208)',
      borderRadius: 35,
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center'
    }, 
    favouriteIcon: {
      color: 'white',
    },
    favouriteIconClicked: {
      color: "rgb(236, 106, 92)",
    }
});
 
 export default FavPage;