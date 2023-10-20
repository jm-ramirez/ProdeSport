import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  FixtureScreen,
  ForecastsScreen,
  MyTournamentsScreen
} from './src/screens'

const Stack = createStackNavigator()

function App() {
  return ( // Agrega la palabra clave 'return' aquí
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
          <Stack.Screen name="ForecastsScreen" component={ForecastsScreen} />
          <Stack.Screen name="MyTournamentsScreen" component={MyTournamentsScreen} />
          <Stack.Screen name="FixtureScreen" component={FixtureScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App; // Asegúrate de exportar la función 'App'
