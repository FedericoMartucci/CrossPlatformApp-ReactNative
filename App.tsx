import Home from './components/Home';
import {NavigationContainer, NavigationProp, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import { styles } from './util/styles';
import { Text, TouchableHighlight, Image, View } from 'react-native';
import { Product } from './util/types';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
          />
        <Stack.Screen name="Product" component={ProductDetails} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

