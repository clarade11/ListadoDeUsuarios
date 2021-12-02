import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity ,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ListadoPantalla from './src/containers/ListadoPantalla';
import InformacionPantalla from './src/containers/InformacionPantalla';
import DetalleUsuarioPantalla from './src/containers/DetalleUsuarioPantalla';
import ListadoStackScreen from './src/navigation/ListadoStackScreen';

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function App() {
  //--------ELEMENTOS DE LA PANTALLA-------
  return (
    //tab para navegacion abajo, o que nunca va a cambiar

    <NavigationContainer>

      <Tab.Navigator //LOS ICONOS DE LAS PANTALLAS PRINCIPALES DEL MENU
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => { //ICONOS
            let iconName;
            if (route.name === 'Informacion') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Listado') {
              iconName = focused ? 'ios-filter' : 'ios-filter-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
        })}
      >
        
        
      <Tab.Screen options={{ headerShown: false }} name="Listado" component={ListadoStackScreen}/>
      <Tab.Screen options={{ headerShown: false }} name="Informacion" component={InformacionPantalla}
          //EDITO EL HEADER DE PANTALLA INFORMACION
          options={{
            title: 'Información',
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
      }} />


      </Tab.Navigator>
    </NavigationContainer>


  )
}
export default App;