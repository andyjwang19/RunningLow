import {
  View,
  Text,
  StatusBar,
  Animated,
  Button,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import ChecklistView from "./Checklist/ChecklistView";
import { useEffect, useRef, useState } from "react";
import { Item } from "./models/item";
import { listTextStyle, textButtonStyle } from "./util/text";
import { generateClient } from "aws-amplify/api";
import { listEntries, listRunningLowData } from "../src/graphql/queries";
import { createEntry, deleteEntry } from "../src/graphql/mutations";
import { addEntry, removeEntry } from "./util/entryAPI";
import GroupHeader from "./GroupHeader";
import { Entry, ListEntriesQueryVariables, RunningLowData } from "../src/API";
import { getGroup } from "./util/group";

export default function MainView() {
  const [groups, setGroups] = useState<RunningLowData[]>([]);
  const [lowItems, _setLowItems] = useState<Entry[]>([]);

  // const [groupId, setGroupId] = useState("");

  const [selected, setSelected] = useState<Entry[]>([]);
  const [confirmPressed, setConfirmPressed] = useState(false);
  const [addingItem, setAddingItem] = useState(false);
  const [addItemName, setAddItemName] = useState("");
  const [currentGroup, setCurrentGroup] = useState<
    RunningLowData | undefined
  >();

  // request data from backend upon load up, but then keep local state. Updates are sent to database, but no more getter requests.
  useEffect(() => {
    // console.log(`group number a`, groupId);
    initialFetchGroup();
  }, []);

  const client = generateClient();

  async function fetchEntryData(group: RunningLowData) {
    try {
      const entryVariables: ListEntriesQueryVariables = {
        filter: {
          runningLowDataEntriesId: {
            eq: group.id,
          },
        },
      };
      const entryData = (
        await client.graphql({
          query: listEntries,
          variables: entryVariables,
        })
      ).data.listEntries.items;
      _setLowItems(entryData);
    } catch (err) {
      console.log(`Error fetching entries `, err);
    }
  }
  async function fetchGroupData(groupId?: string) {
    try {
      const firstOrCurrentGroup =
        groupId !== undefined ? getGroup(groups, groupId) : groups[0];

      if (firstOrCurrentGroup === undefined) {
        throw new Error();
      }
      if (groupId !== undefined) {
        _setLowItems([]);
      }
      fetchEntryData(firstOrCurrentGroup);

      setCurrentGroup(firstOrCurrentGroup);
    } catch (err) {
      console.log("error fetching/updatign group specific data ", err);
    }
  }
  async function initialFetchGroup() {
    try {
      const groupData = (
        await client.graphql({
          query: listRunningLowData,
        })
      ).data.listRunningLowData.items;

      await setGroups(groupData);
      fetchGroupData();
    } catch (err) {
      console.log("error fetching groups initially ", err);
    }
  }

  const addLowItem = async (entryName: string) => {
    if (
      lowItems.find(
        (lowItem) => lowItem.content === entryName && !lowItem._deleted
      )
    ) {
      throw new Error("name exists already");
    }

    if (currentGroup === undefined || currentGroup.id === undefined) {
      throw new Error();
    }

    const entry = await addEntry(client, entryName, currentGroup.id);
    if (entry !== undefined && entry !== null) {
      _setLowItems([entry, ...lowItems]);
    }
  };

  const removeLowItems = (items: Entry[]) => {
    items.map((item) => removeEntry(client, item));
    _setLowItems(
      lowItems.filter((lowItem) => {
        return items.find((i) => lowItem.content === i.content) === undefined;
      })
    );
  };

  const addSlideAnim = useRef(new Animated.Value(0)).current;
  const confirmSlideAnim = useRef(new Animated.Value(200)).current;

  const addSlideIn = () => {
    Animated.timing(addSlideAnim, {
      toValue: 200,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const addSlideOut = () => {
    Animated.timing(addSlideAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const confirmSlideIn = () => {
    Animated.timing(confirmSlideAnim, {
      toValue: 200,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const confirmSlideOut = () => {
    Animated.timing(confirmSlideAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (selected.length > 0) {
      addSlideIn();
      confirmSlideOut();
    } else {
      addSlideOut();
      confirmSlideIn();
    }
  }, [selected]);

  enum whenOptions {
    today = "Today",
    tomorrow = "Tomorrow",
    thisWeek = "This Week",
    thisMonth = "This Month",
  }
  const confirm = (when: whenOptions) => {
    console.log(`confirm rem selected `, selected);
    removeLowItems(selected);
    setSelected([]);
    setConfirmPressed(false);
  };

  const buttonBorder = " border border-periwinkle border-4 ";

  const DeadlineOption = ({
    bottom,
    deadline,
  }: {
    bottom: string;
    deadline: whenOptions;
  }) => {
    return (
      <View
        className={`flex items-center absolute ${bottom} w-96 h-32 rounded-t-[56px] bg-navy mb-8 ${buttonBorder} `}
        onTouchStart={() => {
          confirm(deadline);
        }}
      >
        <Text className={`${textButtonStyle} `}>{deadline}</Text>
      </View>
    );
  };

  return (
    <View className="w-screen h-screen bg-periwinkle items-center">
      <View className="flex flex-col w-full  bg-navy px-4">
        <Text className="font-[Anybody] mt-20 text-7xl h-20 text-white tracking-widest">
          Running Low!
        </Text>
        <GroupHeader
          groups={groups}
          currentGroup={currentGroup}
          setCurrentGroup={fetchGroupData}
        />
      </View>
      {addingItem ? (
        <TextInput
          className={`w-full h-16 bg-gray-200 px-[67px] ${listTextStyle} pt-1 pb-1`}
          onChangeText={setAddItemName}
        />
      ) : null}
      <ChecklistView
        items={lowItems}
        selected={selected}
        setSelected={setSelected}
      />

      <TouchableWithoutFeedback
        onPress={() => {
          if (addingItem) {
            addLowItem(addItemName);
            setAddItemName("");
            setAddingItem(false);
          } else {
            setAddingItem(true);
          }
        }}
      >
        <Animated.View
          className="flex items-center justify-center absolute bottom-0 w-28 h-28 rounded-full bg-navy mb-8"
          style={{ transform: [{ translateY: addSlideAnim }] }}
        >
          <Text className="mt-1 ml-1 text-6xl text-salmon">+</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      {confirmPressed ? (
        <View className="absolute bottom-0 flex flex-col items-center">
          <DeadlineOption
            bottom={"bottom-[200px] "}
            deadline={whenOptions.thisMonth}
          />
          <DeadlineOption
            bottom={"bottom-32 "}
            deadline={whenOptions.thisWeek}
          />
          <DeadlineOption
            bottom={"bottom-14 "}
            deadline={whenOptions.tomorrow}
          />
        </View>
      ) : null}
      <TouchableWithoutFeedback
        onPress={() => {
          if (confirmPressed) {
            confirm(whenOptions.today);
          } else {
            setConfirmPressed(true);
          }
        }}
        // onLongPress={() => setConfirmPressed(true)}
        // onPressOut={(event) => {setConfirmPressed(false)}}
      >
        <Animated.View
          className={`flex items-center justify-center absolute bottom-0 w-96 h-28 rounded-full bg-navy mb-8 ${buttonBorder} `}
          style={{ transform: [{ translateY: confirmSlideAnim }] }}
          // onTouchStart={() => {

          // }}
          // onTouchEnd={() => {
          //   setConfirmPressed(false);
          // }}
        >
          <Text className="mt-1 ml-1 text-3xl text-salmon">
            {confirmPressed ? "today!" : "I'll get these..."}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}
