import { useEffect, useState } from "react";
import { View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Item } from "../models/item";

type ChecklistItemProps = {
  item: Item;
  selected: Item[];
  addToSelected: (item: Item) => null;
  removeFromSelected: (item: Item) => null;
};

export default function ChecklistItem({
  item,
  selected,
  addToSelected,
  removeFromSelected,
}: ChecklistItemProps) {
  const [isChecked, setIsChecked] = useState(
    selected.find((sItem) => sItem.name === item.name) !== undefined
  );
  useEffect(() => {
    setIsChecked(
      selected.find((sItem) => sItem.name === item.name) !== undefined
    );
  }, [selected]);
  return (
    <View className="w-full ">
      <BouncyCheckbox
        size={35}
        fillColor="black"
        unfillColor="white"
        text={item.name}
        iconStyle={{ borderColor: "black" }}
        innerIconStyle={{ borderWidth: 2 }}
        isChecked={isChecked}
        disableBuiltInState
        textStyle={{
          fontFamily: "",
          textDecorationLine: "none",
          color: "black",
          fontSize: 24,
        }}
        onPress={() => {
          if (isChecked) {
            removeFromSelected(item);
          } else {
            addToSelected(item);
          }
        }}
        className="ml-4 py-4"
      />
    </View>
  );
}
