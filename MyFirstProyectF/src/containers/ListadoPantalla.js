import React from 'react';
import { Text, View, TouchableOpacity ,FlatList} from 'react-native';

import styles from '../styles/Styles';

const DATA =[{ nombre: 'Antonio Morlanes', edad: 34, sexo: 'Varón' },
              {nombre: 'Margarita Fuentes', edad: 32, sexo: 'Mujer'},
              { nombre: 'Manuel Machado', edad: 28, sexo: 'Varón' }]

//PANTALLA LISTADO
export default function ListadoPantalla({navigation}) {
    //recomendable hacerlo con flatlist en vez de texts para asi no tener que editarlo cuando queramos meter mas objetos
    
    return (
  
      <View style={styles.view}>
        <FlatList
            data={DATA}
            renderItem={({item}) => {
                return(
                  <TouchableOpacity //bucle con todos los objetos para mostrarlos y si se pulsan mandan al navigation el objeto pulsado
                    onPress={() => navigation.navigate('Detalles', { nombre: item.nombre, edad: item.edad, sexo: item.sexo })}>
                    <Text style={styles.letra}>{item.nombre}</Text>
                  </TouchableOpacity>
                )
              }
            }
          />
      </View>
    );
  }