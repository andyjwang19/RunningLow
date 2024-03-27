import { View, Text } from "react-native";
import { Item } from "./models/item";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type ChecklistItemProps = { item: Item };
const ChecklistItem = ({ item }: ChecklistItemProps) => {
  return (
    <View className="w-full ">
      <BouncyCheckbox
        size={35}
        fillColor="black"
        unfillColor="white"
        text={item.name}
        iconStyle={{ borderColor: "black" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{
          fontFamily: "JosefinSans-Regular",
          textDecorationLine: "none",
          color: "black",
          fontSize: 24,
        }}
        onPress={(isChecked: boolean) => {}}
        className="ml-4 py-8 "
      />
      {/* <Text className="ml-4">{item.name}</Text> */}
    </View>
  );
};

export default function ChecklistView() {
  const lowItems: Item[] = [
    {
      name: "Paper Towels",
      claimed: false,
      claimer: null,
    },
  ];
  return (
    <View className="overflow-scroll  w-full">
      {lowItems.map((item) => (
        <ChecklistItem item={item} />
      ))}
    </View>
  );
}
