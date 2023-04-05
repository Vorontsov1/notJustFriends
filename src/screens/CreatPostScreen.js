import { Text, StyleSheet, View, Image, TextInput, Button, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";
// import { useSafeAreaInsets } from "react-native-safe-area-context";



const user = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  name: "Vadim Savin",
};



const CreatPostScreen = () => {
    const [description, setDescription] = useState("hello world");
    // const insets = useSafeAreaInsets();
    
   
    const onSubmit = () => {
        console.warn('submitted');
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={[styles.container, { marginBottom: 10 }]}
            contentContainerStyle={styles.container}
            // keyboardVerticalOffset={150}
        >
          <View style={styles.header}>
            <Image source={{ uri: user.image }} style={styles.image} />
            <Text style={styles.name}>{user.name}</Text>
          </View>
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="What's happening?"
            multiline
          />
          <View style={styles.buttonContainer}>
            <Button title="Post" onPress={onSubmit} />
          </View>
      </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 20,
    paddingTop: 50,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
  },
    buttonContainer: {
      marginTop: 'auto',
        backgroundColor: "#FF6C00",
   borderRadius: 20,
  },
});

export default CreatPostScreen;
