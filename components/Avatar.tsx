import { Colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface AvatarBaseProps {
  name: string;
  username: string;
  size?: "sm" | "md";
  imageUrl?: string;
}

interface AvatarProps extends AvatarBaseProps {
  horizontal?: boolean;
}

const avatarSizes = {
  sm: 32,
  md: 46,
};

export function AvatarCol(props: AvatarBaseProps) {
  const { name, username, imageUrl, size = "md" } = props;
  return (
    <View style={styles.col}>
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} width={50} height={50} />
      ) : (
        <Ionicons name="person" size={avatarSizes[size]} />
      )}
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

export function AvatarRow(props: AvatarBaseProps) {
  const { name, username, imageUrl, size = "md" } = props;

  return (
    <View style={styles.row}>
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} width={50} height={50} />
      ) : (
        <Ionicons name="person" size={avatarSizes[size]} color={Colors.icon} />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
}

export default function Avatar(props: AvatarProps) {
  const { horizontal } = props;

  if (horizontal) return <AvatarRow {...props} />;

  return <AvatarCol {...props} />;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  col: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  row: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    columnGap: 6,
    paddingBottom: 6,
  },
  textContainer: {
    height: 32,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 4,
    paddingBottom: 12,
  },
  username: {
    fontSize: 16,
    fontWeight: "800",
    color: Colors.tint,
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.subtext,
  },
});
