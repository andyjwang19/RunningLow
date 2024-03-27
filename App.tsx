import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

import { NativeWindStyleSheet } from "nativewind";
import MainView from "./app/MainView";

export default function App() {
  const [fontsLoaded] = useFonts({
    Anybody: require("./assets/fonts/AnybodyUltraCondensed-Bold.ttf"),
  });

  if (!fontsLoaded) return null;
  return <MainView />;
}

NativeWindStyleSheet.setOutput({
  default: "native",
});
