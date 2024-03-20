import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const VehicleDetails = () => {
  const [vehicleInfo, setVehicleInfo] = useState('');
  const [showServices, setShowServices] = useState(false);

  const handleSearchVehicle = () => {
    console.log(`Consultando información del vehículo: ${vehicleInfo}`);
    
  };

  const handleShowServices = () => {
    setShowServices(true);
    console.log('Mostrando historial de servicios del vehículo');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de Vehículo</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese la placa del vehículo"
        value={vehicleInfo}
        onChangeText={setVehicleInfo}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearchVehicle}>
        <Text style={styles.buttonText}>Consultar Historial</Text>
      </TouchableOpacity>
      {showServices && (
        <TouchableOpacity style={styles.servicesButton} onPress={handleShowServices}>
          <Text style={styles.buttonText}>Mostrar Historial de Servicios</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'lightblue',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  servicesButton: {
    backgroundColor: 'lightgreen',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default VehicleDetails;
