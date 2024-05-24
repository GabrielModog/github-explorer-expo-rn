import { StyleSheet, Text, View } from "react-native";

import { useRouter } from "expo-router";

import { Colors } from "@/constants/colors";
import useRepositories from "@/hooks/useRepositories";
import RepositoryList from "@/components/repositories/RepositoryList";
import { HandleNavigationFunc } from "@/types";

export default function Index() {
  const router = useRouter();

  const { repositories, handleEndReached, fetching } = useRepositories();

  const handleNavigation: HandleNavigationFunc = ({
    id,
    repositoryName,
    username,
  }) => {
    router.push({
      pathname: `/repository/${id}`,
      params: {
        repositoryName: repositoryName,
        username: username,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Melhores repositórios do Github ⭐️
        </Text>
        <Text style={styles.headerDescription}>
          Explore os melhores repositórios
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <RepositoryList
          data={repositories}
          fetching={fetching}
          handleEndReached={handleEndReached}
          handleNavigation={handleNavigation}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  header: {
    height: 132,
    justifyContent: "space-between",
    alignSelf: "stretch",
    backgroundColor: "black",
    rowGap: 4,
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.background,
  },
  headerDescription: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.lightgray,
  },
  contentContainer: {
    flex: 1,
    alignSelf: "stretch",
    marginTop: 42,
  },
  list: {
    paddingBottom: 60,
    marginHorizontal: 26,
  },
});
