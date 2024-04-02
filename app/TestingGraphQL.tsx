import { Pressable, TextInput, Text, View } from "react-native";
import { generateClient } from "aws-amplify/api";
import { createTodo } from "../src/graphql/mutations";
import { useEffect, useState } from "react";
import { listEntries, listUsers } from "../src/graphql/queries";
import { Entry, User } from "../src/API";

const initialState = { name: "", description: "" };

export default function TestingGraphQL() {
  const [formState, setFormState] = useState(initialState);
  function setInput(key: string, value: string) {
    setFormState({ ...formState, [key]: value });
  }

  const client = generateClient();

  //   interface myTypeInterface {
  //     __typename?: "MyType";
  //     pk: string;
  //     sk: string;
  //     name: string;
  //     image?: string;
  //     claimer?: string;
  //   }
  const [users, setUsers] = useState<User[]>();
  const [entries, setEntries] = useState<Entry[]>();

  useEffect(() => {
    fetchTodos();
  }, []);
  // useEffect(() => {
  //   console.log(`gotten todos `, gottenTodos);
  // }, [gottenTodos]);

  async function fetchTodos() {
    // console.log(`runnign fetch`);
    // const anyData = await client.graphql({
    //   query: listTodos,
    // });
    // console.log(`any data `, anyData);
    try {
      const entryData = await client.graphql({
        query: listEntries,
      });
      const tmp = entryData.data.listEntries.items;
      console.log(`entry data `, tmp);
      setEntries(tmp);
    } catch (err) {
      console.log("error fetching ", err);
    }
  }

  //   async function addTodo() {
  //     try {
  //       if (!formState.name || !formState.description) return;
  //       const todo = { ...formState };
  //       console.log(`todo to add`, todo);
  //       setGottenTodos([...gottenTodos, todo]);
  //       setFormState(initialState);
  //       await client.graphql({
  //         query: createTodo,
  //         variables: {
  //           input: todo,
  //         },
  //       });
  //     } catch (err) {
  //       console.log("error creating todo:", err);
  //     }
  //   }

  //   console.log(`ok todos are `, gottenTodos);
  return (
    <View className="w-full h-full bg-periwinkle">
      <View className="p-8 mt-16 font-xl">
        <TextInput
          onChangeText={(value) => setInput("name", value)}
          value={formState.name}
          placeholder="Name"
        />
        <TextInput
          onChangeText={(value) => setInput("description", value)}
          value={formState.description}
          placeholder="Description"
        />
        <Pressable onPress={fetchTodos}>
          <Text>FEETCH</Text>
        </Pressable>
        {/* <Pressable onPress={addTodo}> <Text>Create todo</Text>
        </Pressable> */}
        {}
        {/* {gottenTodos?.listTodos?.items.map((todo, index) => {
          return todo ? (
            <View key={todo.pk ? todo.pk : index}>
              <Text>{todo.name}</Text>
              <Text>{todo.image}</Text>
            </View>
          ) : (
            <></>
          );
        })} */}
      </View>
    </View>
  );
}
