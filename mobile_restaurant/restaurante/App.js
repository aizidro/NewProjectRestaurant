import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from "./src/screen/home/Login";
import PedidosScreen from './src/screen/entregas/pedidos';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ title: 'Bem vindo ' }} />
            <Stack.Screen
                name="Pedidos"
                component={PedidosScreen}
                options={{ title: 'pedidos ' }} />
        </Stack.Navigator>
    </NavigationContainer>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
