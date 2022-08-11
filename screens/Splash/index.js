import { Pressable } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View, ImageBackground } from "react-native";

const Splash = () => {
  return <View style={{
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
        <Pressable onPress={() => navigation.navigate("Onboarding")}><ImageBackground source="https://d3tklmlrp1a8c2.cloudfront.net/media/components/screens/react-native-splash.png" resizeMode="contain" style={{
        flex: 1,
        justifyContent: "center"
      }}>
        </ImageBackground></Pressable>
      <TextInput style={{
      position: "absolute",
      left: 42,
      top: 322,
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 113,
      height: 30
    }} defaultValue="Tap to continue..."></TextInput></View>;
};

export default Splash;