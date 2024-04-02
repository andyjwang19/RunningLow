import { View, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import { RunningLowData } from "../src/API";
import { Dropdown } from "react-native-element-dropdown";
import { getGroup } from "./util/group";

type GroupHeaderProps = {
  groups: RunningLowData[] | undefined;
  currentGroup: RunningLowData | undefined;
  setCurrentGroup: (arg0: string) => Promise<void>;
};
export default function GroupHeader({
  groups,
  currentGroup,
  setCurrentGroup,
}: GroupHeaderProps) {
  // const currentGroup = getGroup(groups, currentGroupId);
  if (groups === undefined || currentGroup === undefined) {
    return (
      <View className="h-16 pb-2 w-full bg-navy flex flex-row items-center gap-2 -skew-x-12 ">
        <View className="">
          <Text className="text-white text-5xl ml-4 mb-0 font-[Pioggia] italic tracking-tight scale-y-90">
            Loading...
          </Text>
        </View>
      </View>
    );
  }

  const data = groups.map((group) => {
    return { label: group.name, value: group.id };
  });

  return (
    <View className="h-16 pb-4 w-full bg-navy flex flex-row items-center gap-2 -skew-x-12 ">
      <Dropdown
        data={data}
        labelField={"label"}
        valueField={"value"}
        placeholder={currentGroup.name}
        onChange={(value) => setCurrentGroup(value.value as unknown as string)}
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        // inputSearchStyle={styles.inputSearchStyle}
        itemContainerStyle={styles.itemContainerStyle}
        itemTextStyle={styles.itemTextStyle}
        iconStyle={styles.iconStyle}
        renderRightIcon={() => (
          <FontAwesomeIcon
            icon={faCaretDown}
            color="white"
            size={30}
          ></FontAwesomeIcon>
        )}
      ></Dropdown>
    </View>
  );
}
const styles = StyleSheet.create({
  dropdown: {
    flex: 1,
    height: 50,
    // width: 300,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  // label: {
  //   position: "absolute",
  //   backgroundColor: "white",
  //   left: 22,
  //   top: 0,
  //   zIndex: 999,
  //   paddingHorizontal: 8,
  //   fontSize: 14,
  //   textTransform: "lowercase",
  // },

  // text-white text-5xl ml-4 mb-0 tracking-tight scale-y-90
  placeholderStyle: {
    // transform: [{ skewX: "10deg" }],
    color: "white",
    fontFamily: "Pioggia",
    letterSpacing: -0.025,
    textTransform: "lowercase",
    fontSize: 48,
    height: 50,
  },
  itemContainerStyle: {},
  itemTextStyle: {
    backgroundColor: "#0D3B66",
    color: "white",
    fontFamily: "Pioggia",
    letterSpacing: -0.025,
    textTransform: "lowercase",
    fontSize: 48,
    borderWidth: 0.5,
    borderRadius: 8,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 0,
    height: 0,
  },
  // inputSearchStyle: {
  //   height: 40,
  //   fontSize: 16,
  // },
});
