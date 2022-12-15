
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
 import WordCards from './components/WordCards.js';

 const App = () => {
   const [search, setSearch] = useState(null);
   return (
     <View style={styles.container}>
    
       <View style={styles.optionArea} >
         <View style={styles.topBar}>
           <View style={styles.profileInfo}>
             <View style={styles.profileImage}></View>
             <Text style={styles.profileName}>My Name</Text>
           </View>
           <TouchableOpacity><Image style={ styles.menuIcon} source={require('./components/images/menu.png')} /></TouchableOpacity>
         </View>
         <View style={styles.filterOptions}>
         <TouchableOpacity style={ styles.top}><Image style={ styles.fireIcon} source={require('./components/images/fire.png')} /><Text style={styles.topText}>Top</Text></TouchableOpacity>
         <TouchableOpacity style={ styles.favourites}><Image style={ styles.favouriteIcon} source={require('./components/images/favourite.png')} /><Text style={styles.favText}>Favourites</Text></TouchableOpacity>
         </View>
         <View style={styles.searchBar}>
         <TextInput
            style={styles.searchInput}
            onChangeText={setSearch}
            value={search}
            placeholder="search a word"
          />
          <TouchableOpacity style={ styles.searchIconBox}><Image style={ styles.searchIcon} source={require('./components/images/search.png')} /></TouchableOpacity>
         </View>
       </View>
       <View style={styles.resultArea}>
        <WordCards/>
       </View>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: 'rgb(247, 239, 230)',
   },
   optionArea: {
     flex: 1, 
     marginTop: 70,
     marginLeft: 30,
     marginRight: 30,   
     backgroundColor: 'rgb(247, 239, 230)',
   }, 
   resultArea: {
     flex: 2, 
     backgroundColor: 'rgb(246, 247, 249)',
     alignItems: 'center'
    },
     profileImage: {
     height: 30,
     width: 30,
     borderRadius: 30,
     backgroundColor: 'rgb(148, 165, 165)'
   },
   topBar:{
     flexDirection: 'row',
     alignItems: 'center',
     display: 'flex',
     justifyContent: 'space-between'
   },
   profileInfo: {
     flexDirection: 'row',
     alignItems: 'center',
     display: 'flex',
     justifyContent: 'center'
   },
   menuIcon: {
     width: 20,
     height: 20
   },
   profileName: {
     paddingLeft: 5,
     fontSize: 17
   },
   searchBar: {
     flex: 1, 
     width: '100%',
     marginTop: 15,
     marginBottom: 15,
     flexDirection: 'row',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'white',
     height: 50,
     borderRadius: 10,
   },
   filterOptions: {
     flex: 2,
     flexDirection: 'row',
     display: 'flex',
     alignItems: 'flex-end',
     justifyContent: 'center',
   },
   searchInput: {
    width: '80%',
    padding: 10,
    backgroundColor: 'white'
   },
   searchIcon: {
    width: 15,
    height: 15,
   },
   searchIconBox: {
     width: 40,
     height: 40,
     borderRadius: 6,
     alignItems: 'center',
     display: 'flex',
     justifyContent: 'center',
    backgroundColor: 'rgb(230, 228, 253)'
   },
   favourites: {
    width: 120,
    height: 40,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
     display: 'flex',
     justifyContent: 'center',
    backgroundColor: 'rgb(241, 211, 208)'
   },
   favText: {
     fontSize: 15,
     fontWeight: 'bold',
    color: 'rgb(236, 106, 92)'
   },
   favouriteIcon: {
    width: 20,
    height: 20,
    marginRight: 5,

   },
   top: {
    width: 80,
    height: 40,
    marginRight: 10,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#A7C7E7'
   },
   topText: {
     fontSize: 15,
     fontWeight: 'bold',
    color: '#6495ED'
   },
   fireIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
   },

 
 });
 
 export default App;