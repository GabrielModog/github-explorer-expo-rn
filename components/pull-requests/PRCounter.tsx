import { Colors } from "@/constants/colors";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface PRCounterProps {
  open: string;
  closed: string;
  state: "OPEN" | "CLOSED";
  handleOpenTab: () => void;
  handleCloseTab: () => void;
}

export default function PRCounter(props: PRCounterProps) {
  const { state, open, closed, handleOpenTab, handleCloseTab } = props;
  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.content}>
        <TouchableOpacity onPress={handleOpenTab}>
          <Text style={[styles.text, styles.select]}>{open} Abertos</Text>
        </TouchableOpacity>
        <Text style={styles.text}>/</Text>
        <TouchableOpacity onPress={handleCloseTab}>
          <Text style={styles.text}>{closed} Fechados</Text>
        </TouchableOpacity>
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
    fontWeight: "800",
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 26,
    gap: 4,
  },
  unslected: {
    color: Colors.text,
    fontWeight: "800",
  },
  text: {
    fontSize: 16,
    fontWeight: "800",
    color: Colors.text,
  },
});
