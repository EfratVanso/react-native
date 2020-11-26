import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetails";

export default function ImageScreen() {
  return (
    <View>
      <ImageDetail
        myTitle="Forest"
        ImageSource={require("../../assets/mountain.jpg")}
        score={7}
      />
      <ImageDetail
        myTitle="Forest"
        ImageSource={require("../../assets/beach.jpg")}
        score={4}
        />
      <ImageDetail
        myTitle="Forest"
        ImageSource={require("../../assets/forest.jpg")}
        score={10}
     />
    </View>
  );
}
const styles = StyleSheet.create({
  //style
});
