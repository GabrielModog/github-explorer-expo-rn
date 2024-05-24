import { Colors } from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

interface PRCounterProps {
  open: string;
  closed: string;
}

export default function PRCounter(props: PRCounterProps) {
  const { open, closed } = props;
  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.content}>
        <Text style={[styles.text, styles.select]}>{open} Abertos</Text>
        <Text style={styles.text}>/</Text>
        <Text style={styles.text}>{closed} Fechados</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 36,
    backgroundColor: Colors.gray,
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  select: {
    color: Colors.tint,
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 26,
    gap: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: "800",
    color: Colors.text,
  },
});
