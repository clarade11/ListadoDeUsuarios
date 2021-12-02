import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity ,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import ListadoPantalla from '../containers/ListadoPantalla';
import DetalleUsuarioPantalla from '../containers/DetalleUsuarioPantalla';

const HomeStack = createNativeStackNavigator();
//stack para pulsar para la navegacion
//inicio pantalla STACK
export default function ListadoStackScreen() { //LAS DOS VENTANAS POR LAS QUE NAVEGAREMOS
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Listado" component={ListadoPantalla} //PANTALLA DE LISTADO
          options={{
            title: 'Listado de usuarios',
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }} />
        <HomeStack.Screen name="Detalles" component={DetalleUsuarioPantalla} //PANTALLA DE DETALLE
          options={{
            title: 'Detalle de usuario',
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }} />
      </HomeStack.Navigator>
    );
  }