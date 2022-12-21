import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home.js'
import WordCards from './components/WordCards.js'
import FavPage from './pages/FavPage.js'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
        headerShown: false  
        }}
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