import { StyleSheet, Text, View } from "react-native";

import Avatar from "./Avatar";
import { Colors } from "@/constants/colors";
import dayjs from "dayjs";

interface PullRequestProps {
  title: string;
  description: string;
  username: string;
  author: string;
  createdAt: string;
  imageUrl?: string;
}

export default function PullRequest(props: PullRequestProps) {
  const { title, description, imageUrl, username, author, createdAt } = props;
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text
          style={styles.title}
          numberOfLines={1}
          ellipsizeMode="tail"
          testID="title"
        >
          {title}
        </Text>
        <Text
          style={styles.description}
          numberOfLines={2}
          ellipsizeMode="tail"
          testID="description"
        >
          {description}
        </Text>
      </View>
      <View style={styles.bottom} testID="avatar">
        <Avatar
          size="sm"
          imageUrl={imageUrl}
          name={author}
          username={username}
          horizontal
        />
        <View>
          <Text style={styles.date} testID="date">
            {dayjs(createdAt).format("DD/MM/YYYY")}
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
    rowGap: 4,
    paddingTop: 16,
    paddingVertical: 1,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    backgroundColor: Colors.background,
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
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
    color: Colors.tint,
  },
  description: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.text,
  },
  date: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.subtext,
  },
});
