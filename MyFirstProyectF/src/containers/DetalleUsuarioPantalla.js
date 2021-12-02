import React from 'react';
import { Text, View} from 'react-native';


import styles from "../styles/Styles";

//PANTALLA DETALLE USUARIOexport 
export default function DetalleUsuarioPantalla({ route }) {
    const { nombre, edad, sexo } = route.params;
    return (
      <View style={styles.view}>
        <Text style={styles.letra}><Text style={styles.letraGordita}>Nombre: </Text>{nombre}</Text>
        <Text style={styles.letra}><Text style={styles.letraGordita}>Edad: </Text>{edad}</Text>
        <Text style={styles.letra}><Text style={styles.letraGordita}>Sexo: </Text>{sexo}</Text>
      </View>
    );
  }