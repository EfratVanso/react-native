import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default function TextScreen() {
    return (
        <TextInput
        autoCapitalize="none"// for case like user name {IOS}
        autoCorrect={false}// "
        style={styles.input}/>
    )
}
const styles = StyleSheet.create({
    input:{
         margin:20,
        height:40,
        borderColor:'black',
        borderWidth:1
    }
})
