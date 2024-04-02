import { View, Text, Button } from "react-native";
import { Item } from "../models/item";
import ChecklistItem from "./CheckListItem";

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
      {items.map((item) => {
        if (!item._deleted) {
          return (
            <ChecklistItem
              key={item.name}
              item={item}
              selected={selected}
              addToSelected={addToSelected}
              removeFromSelected={removeFromSelected}
            />
          );
        }
      })}
      {selected.map((selectedItem) => (
        <Text key={selectedItem.name}>{selectedItem.name}</Text>
      ))}
    </View>
  );
}
