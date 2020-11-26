import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Efrat';

  return (
    <View style={{backgroundColor:'grey'}}>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45, color:'violet'
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;