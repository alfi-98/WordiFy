import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home.js'
import WordCards from './components/WordCards.js'
import FavPage from './pages/FavPage.js'
import Realm from 'realm';
const Stack = createNativeStackNavigator();


const WordSchema = {
  word: [],
  primaryKey: "_id"
};

/*
( async ()=> {const realm = await Realm.open({
  path: "myrealm",
  schema: [WordSchema],
});


realm.write(() => {
  word1 = realm.create("Word", {
    _id: 1,
    name: "Bus",
  });
  word2 = realm.create("Word", {
    _id: 2,
    name: "Snow",
  });
  console.log(`saved two words: ${word1.name} & ${word2.name}`);
});

})();
*/



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
        headerShown: false,
        headerStyle: {backgroundColor: 'rgb(247, 239, 230)',
      }
        }
        }
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="WordCards" component={WordCards} />
        <Stack.Screen name="FavPage" component={FavPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;