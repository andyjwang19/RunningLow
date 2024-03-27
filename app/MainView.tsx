import {
  View,
  Text,
  StatusBar,
  Animated,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import ChecklistView from "./ChecklistView";
import { useEffect, useRef, useState } from "react";
import { Item } from "./models/item";

export default function MainView() {
  const [selected, setSelected] = useState<Item[]>([]);
  const [confirmPressed, setConfirmPressed] = useState(false);

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
    setSelected([]);
    setConfirmPressed(false);
  };

  const textButtonStyle = "font-sans text-3xl text-salmon mt-5";
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
      <View className="flex flex-col pt-20 w-full h-56 bg-navy px-4">
        <Text className="font-[Anybody] text-6xl text-white tracking-widest">
          Running Low!
        </Text>
      </View>
      <ChecklistView selected={selected} setSelected={setSelected} />
      <Animated.View
        className="flex items-center justify-center absolute bottom-0 w-28 h-28 rounded-full bg-navy mb-8"
        style={{ transform: [{ translateY: addSlideAnim }] }}
      >
        <Text className="mt-1 ml-1 text-6xl text-salmon">+</Text>
      </Animated.View>
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
        onPress={() => setConfirmPressed(true)}
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
