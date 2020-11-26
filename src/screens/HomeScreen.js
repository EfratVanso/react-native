import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hello</Text>

      <Button //simple button 
        title="Go to components demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button 
        title="Go to image screen"
        onPress={() => navigation.navigate('Image')}
      />
       <Button 
        title="Go to counter screen"
        onPress={() => navigation.navigate('Counter')}
      />
         <Button 
        title="Go to color screen"
        onPress={() => navigation.navigate('Color')}
      />
         <Button 
        title="Go to square screen"
        onPress={() => navigation.navigate('Square')}
      />
      
      <TouchableOpacity onPress={() =>navigation.navigate('List')}>
        <Text>
          Go to list demo
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
