import { View, Text, StatusBar } from "react-native";
import ChecklistView from "./ChecklistView";

export default function MainView() {
  return (
    <View className="w-screen h-screen bg-periwinkle items-center">
      <View className="flex flex-col pt-20 w-full h-56 bg-navy px-4">
        <Text className="font-[Anybody] text-6xl text-white tracking-widest">
          Running Low!
        </Text>
      </View>
      <ChecklistView />

      <View className="flex items-center justify-center absolute bottom-0 w-28 h-28 rounded-full bg-navy mb-8">
        <Text className="mt-1 ml-1 text-6xl text-salmon">+</Text>
      </View>
    </View>
  );
}
