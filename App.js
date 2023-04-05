import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import FeedScreen from "./src/screens/FeedScreen";
import CreatPostScreen from "./src/screens/CreatPostScreen";




export default function App() {
  return (
    <View style={styles.container}>
      <CreatPostScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
});
