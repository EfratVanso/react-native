import React, {useState} from 'react'
import { TextInput, StyleSheet,View, Text } from 'react-native'

export default function TextScreen() {
    const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newValue => setPassword(newValue)}// necessary to access to text value
      />
      {password.length < 4 ? <Text>Password must be 4 characters</Text> : null}
    </View>
  );
}
const styles = StyleSheet.create({
    input:{
         margin:20,
        height:40,
        borderColor:'black',
        borderWidth:1
    }
})
