import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => console.log("Inventario")}
        >
          <Text style={styles.optionText}>Inventario</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => console.log("Detalle del Vehículo")}
        >
          <Text style={styles.optionText}>Detalle del Vehículo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => console.log("Solicitud de Información")}
        >
          <Text style={styles.optionText}>Solicitud de Información</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => console.log("Agendar Prueba de Manejo")}
        >
          <Text style={styles.optionText}>Agendar Prueba de Manejo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => console.log("Solicitud de Servicio")}
        >
          <Text style={styles.optionText}>Solicitud de Servicio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => console.log("Notificaciones")}
        >
          <Text style={styles.optionText}>Notificaciones</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebe9e9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 45,
    textAlign: 'center',
  },
  optionsContainer: {
    marginTop: 20,
    width: '80%',
  },
  option: {
    backgroundColor: '#888787',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
  },
});

export default App;
