import React, {useState} from "react";
import { View, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

export default function SquareScreen() {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    return (
    <View>
      <ColorCounter color="Red" onIncrease={() =>setRed(red+1)} onDecrease={() =>setRed(red-1)} />
      <ColorCounter color="Blue" onIncrease={() =>setBlue(blue+1)} onDecrease={() =>setBlue(blue-1)}/>
      <ColorCounter color="Green" onIncrease={() =>setGreen(green+1)} onDecrease={() =>setGreen(green-1)}/>
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      />
    </View>
  );
}
