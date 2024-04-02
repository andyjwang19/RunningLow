import { useEffect, useState } from "react";
import { View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Item } from "../models/item";
import { Entry } from "../../src/API";

type ChecklistItemProps = {
  item: Entry;
  selected: Entry[];
  addToSelected: (item: Entry) => null;
  removeFromSelected: (item: Entry) => null;
};

export default function ChecklistItem({
  item,
  selected,
  addToSelected,
  removeFromSelected,
}: ChecklistItemProps) {
  const [isChecked, setIsChecked] = useState(
    selected.find((sItem) => sItem.content === item.content) !== undefined
  );
  useEffect(() => {
    setIsChecked(
      selected.find((sItem) => sItem.content === item.content) !== undefined
    );
  }, [selected]);
  return (
    <View className="w-full ">
      <BouncyCheckbox
        size={35}
        fillColor="black"
        unfillColor="white"
        text={item.content}
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
