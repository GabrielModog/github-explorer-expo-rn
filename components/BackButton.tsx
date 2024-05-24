import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Colors } from "@/constants/colors";

interface BackButtonProps {
  title: string;
  handleGoBack: () => void;
}

export default function BackButton(props: BackButtonProps) {
  const { title, handleGoBack } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} testID="goBackBtn">
        <Ionicons name="arrow-back" size={24} color={Colors.background} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text
          style={styles.title}
          numberOfLines={1}
          ellipsizeMode="tail"
          testID="title"
        >
          {title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.black,
    paddingHorizontal: 4,
  },
  titleContainer: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: Colors.background,
  },
});
