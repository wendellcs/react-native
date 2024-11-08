import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PaginaPrincipal from './Components/PaginaPrincipal';
import EditarTarefa from './Components/EditarTarefa';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='PaginaPrincipal' screenOptions={{headerShown: false}}>
        <Stack.Screen name='PaginaPrincipal' component={PaginaPrincipal}/>
        <Stack.Screen name='EditarTarefa' component={EditarTarefa}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
