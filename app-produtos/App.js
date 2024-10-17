import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaDeProdutos from './Components/ListaDeProdutos';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ListaDeProdutos'>
        <Stack.Screen name='ListaDeProdutos' component={ListaDeProdutos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
