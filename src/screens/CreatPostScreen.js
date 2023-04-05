import { Text, StyleSheet, View, Image, TextInput, Button, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";



const user = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  name: "Vadim Savin",
};



const CreatPostScreen = () => {
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    // const insets = useSafeAreaInsets();
    
   
    const onSubmit = () => {
        console.warn('submitted');
    }


      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
          setImage(result.uri);
        }
      };
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={[styles.container, { marginBottom: 10 }]}
        contentContainerStyle={styles.container}
        // keyboardVerticalOffset={150}
      >
        <View style={styles.header}>
          <Image source={{ uri: user.image }} style={styles.profileImage} />
          <Text style={styles.name}>{user.name}</Text>
          <Entypo
            onPress={pickImage}
            name="images"
            size={24}
            color="limegreen"
            style={styles.icon}
          />
        </View>
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="What's happening?"
          multiline
            />
            <Image source={{ uri: image }} style={styles.image } />
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
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginRight: 10,
    },
    image: {
        width: "100%",
        alignSelf: "center",
        aspectRatio: 4 / 3,
  },
  name: {
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: "auto",
    marginBottom: 30,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
  icon: {
    marginLeft: "auto",
  },
});

export default CreatPostScreen;
