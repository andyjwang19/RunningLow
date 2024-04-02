import { View, Text, Button } from "react-native";
import { Item } from "../models/item";
import ChecklistItem from "./CheckListItem";
import { Entry } from "../../src/API";

type CheckListViewProps = {
  items: Entry[];
  selected: Entry[];
  setSelected: React.Dispatch<React.SetStateAction<Entry[]>>;
};

export default function ChecklistView({
  items,
  selected,
  setSelected,
}: CheckListViewProps) {
  const addToSelected = (item: Entry) => {
    if (selected.find((sItem) => sItem.content === item.content)) {
      return null;
    } else {
      setSelected([...selected, item]);
      return null;
    }
  };

  const removeFromSelected = (item: Entry) => {
    if (selected.find((sItem) => sItem.content === item.content)) {
      setSelected(selected.filter((sItem) => sItem.content !== item.content));
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
              key={item.id}
              item={item}
              selected={selected}
              addToSelected={addToSelected}
              removeFromSelected={removeFromSelected}
            />
          );
        }
      })}
      {selected.map((selectedItem) => (
        <Text key={selectedItem.content}>{selectedItem.content}</Text>
      ))}
    </View>
  );
}
