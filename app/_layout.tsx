import { Stack } from "expo-router";
import { Client, Provider, cacheExchange, fetchExchange } from "urql";
import { Image, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const client = new Client({
  url: "https://api.github.com/graphql",
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: () => ({
    headers: {
      authorization: `${process.env.EXPO_PUBLIC_API_KEY}`,
    },
  }),
});

export default function RootLayout() {
  return (
    <Provider value={client}>
      <Stack
        screenOptions={{
          headerLeft: () => {
            return (
              <View style={styles.container}>
                <Ionicons name="menu" size={34} />
              </View>
            );
          },
          headerTitleAlign: "center",
          headerBackVisible: false,
          headerTitle: () => {
            return (
              <View style={styles.container}>
                <Image
                  style={styles.logo}
                  source={require("../assets/images/logo-primo-rico.png")}
                />
              </View>
            );
          },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="repository/[id]" />
      </Stack>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 85,
  },
  logo: {
    width: 122,
    height: 22,
    resizeMode: "contain",
  },
});
