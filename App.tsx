import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

import { NativeWindStyleSheet } from "nativewind";
import MainView from "./app/MainView";

import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
import TestingGraphQL from "./app/TestingGraphQL";
Amplify.configure(amplifyconfig);

export default function App() {
  const [fontsLoaded] = useFonts({
    Anybody: require("./assets/fonts/AnybodyUltraCondensed-Bold.ttf"),
  });

  if (!fontsLoaded) return null;
  return <MainView />;
  // return <TestingGraphQL />;
}

NativeWindStyleSheet.setOutput({
  default: "native",
});
