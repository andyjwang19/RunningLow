import { View, Text, Button } from "react-native";
import { Item } from "./models/item";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useEffect, useState } from "react";

type ChecklistItemProps = {
  item: Item;
  selected: Item[];
  addToSelected: (item: Item) => null;
  removeFromSelected: (item: Item) => null;
};

const ChecklistItem = ({
  item,
  selected,
  addToSelected,
  removeFromSelected,
}: ChecklistItemProps) => {
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
          fontFamily: "JosefinSans-Regular",
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
};

type CheckListViewProps = {
  items: Item[];
  selected: Item[];
  setSelected: React.Dispatch<React.SetStateAction<Item[]>>;
};

export default function ChecklistView({
  items,
  selected,
  setSelected,
}: CheckListViewProps) {
  const addToSelected = (item: Item) => {
    if (selected.find((sItem) => sItem.name === item.name)) {
      return null;
    } else {
      setSelected([...selected, item]);
      return null;
    }
  };

  const removeFromSelected = (item: Item) => {
    if (selected.find((sItem) => sItem.name === item.name)) {
      setSelected(selected.filter((sItem) => sItem.name !== item.name));
      return null;
    } else {
      return null;
    }
  };

  return (
    <View className="overflow-scroll  w-full pt-4">
      {items.map((item) => (
        <ChecklistItem
          item={item}
          selected={selected}
          addToSelected={addToSelected}
          removeFromSelected={removeFromSelected}
        />
      ))}
      {selected.map((selectedItem) => (
        <Text>{selectedItem.name}</Text>
      ))}
    </View>
  );
}
