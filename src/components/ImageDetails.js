import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native';

export default function ImageDetail(props) {
    return (
        <View>
            <Text style={styles.text}>{props.myTitle} </Text>
            <Text>score:{props.score}</Text>
<Image source= {props.ImageSource} />
 </View>
    )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
