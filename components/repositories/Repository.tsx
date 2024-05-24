import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import Avatar from "../Avatar";
import { Colors } from "@/constants/colors";
import { IRepository } from "@/types";

type RepositoryProps = IRepository;

export default function Repository(props: RepositoryProps) {
  const { title, description, imageUrl, forks, stars, username, author } =
    props;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.body}>
          <Text style={styles.title} testID="title">
            {title}
          </Text>
          <Text
            style={styles.description}
            numberOfLines={3}
            ellipsizeMode="tail"
            testID="description"
          >
            {description}
          </Text>
        </View>
        <View style={styles.avatar} testID="avatar">
          <Avatar imageUrl={imageUrl} name={author} username={username} />
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.counter}>
          <Ionicons name="git-branch" size={14} />
          <Text style={styles.counterText} testID="forks">
            {forks}
          </Text>
        </View>
        <View style={styles.counter}>
          <Ionicons name="star-outline" size={14} />
          <Text style={styles.counterText} testID="stars">
            {stars}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "column",
    rowGap: 2,
    marginTop: 6,
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: Colors.black,
  },
  content: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  body: {
    flexShrink: 1,
    alignSelf: "stretch",
    textAlign: "justify",
  },
  avatar: {
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    flexBasis: 80,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 8,
    color: Colors.tint,
  },
  description: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
    color: Colors.text,
  },
  stats: {
    alignItems: "center",
    flexDirection: "row",
    columnGap: 18,
    paddingVertical: 4,
  },
  counter: {
    alignItems: "center",
    flexDirection: "row",
    columnGap: 2,
  },
  counterText: {
    color: Colors.text,
    fontWeight: "600",
  },
});
