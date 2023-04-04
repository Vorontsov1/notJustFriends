import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import LikeImage from './assets/images/like.png';
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const post = {
  id: "p1",
  createdAt: "19 m",
  User: {
    id: "u1",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg",
    name: "Ievgen Vorontsov",
  },
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
  numberOfLikes: 11,
  numberOfShares: 2,
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.post}>
        {/* header */}
        <View style={styles.header}>
          <Image source={{ uri: post.User.image }} style={styles.avatar} />
          <View>
            <Text style={styles.name}>{post.User.name}</Text>
            <Text style={styles.subtitle}>{post.createdAt}</Text>
          </View>
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color="red"
            style={styles.icon}
          />
        </View>

        {/* body */}
        {post.description && (
          <Text style={styles.description}>{post.description}</Text>
        )}

        {post.image && (
          <Image style={styles.bgi} source={{ uri: post.image }} />
        )}

        {/* footer */}
        <View style={styles.footer}>
          {/* statsRow */}
          <View style={styles.statsRow}>
            <Image source={LikeImage} style={styles.likeicon} />
            <Text style={styles.likeBy}>
              David Linch and {post.numberOfLikes} others
            </Text>
            <Text style={styles.shares}>{post.numberOfShares} shares</Text>
          </View>
          {/* Buttons row */}
          <View style={styles.buttonsRow}>
            <View style={styles.iconButton}>
              <AntDesign name="like2" size={18} color="grey" />
              <Text style={styles.iconButtonText}>Like</Text>
            </View>

            <View style={styles.iconButton}>
              <FontAwesome5 name="comment-alt" size={18} color="grey" /> 
              <Text style={styles.iconButtonText}>Comment</Text>
            </View>

            <View style={styles.iconButton}>
              <MaterialCommunityIcons name="share-outline" size={18} color="grey" /> 
              <Text style={styles.iconButtonText}>Share</Text>
            </View>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  post: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "white",
  },
  // header
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  subtitle: {
    color: "gray",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 10,
  },
  icon: {
    marginLeft: "auto",
  },
  // body

  description: {
    paddingHorizontal: 10,
    letterSpacing: 1,
    lineHeight: 20,
  },
  bgi: {
    width: "100%",
    aspectRatio: 1,
    marginTop: 10,
  },
  // footer
  footer: {
    paddingHorizontal: 10,
  },
  statsRow: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
    paddingVertical: 10,
    flexDirection: "row",
  },
  likeicon: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  likeBy: {
    color: "gray",
    fontSize: 12,
    fontWeight: "bold",
  },
  shares: {
    marginLeft: "auto",
    color: "gray",
    fontSize: 12,
    fontWeight: "bold",
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButtonText: {
    marginLeft: 5,
    color: "gray",
    fontWeight: "bold",
  },
  buttonsRow: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});