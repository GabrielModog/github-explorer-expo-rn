import { useLocalSearchParams, useNavigation } from "expo-router";
import { StyleSheet, View } from "react-native";

import PRCounter from "@/components/pull-requests/PRCounter";

import { Colors } from "@/constants/colors";
import usePullRequests from "@/hooks/usePullRequests";
import BackButton from "@/components/BackButton";
import PullRequestList from "@/components/pull-requests/PullRequestList";

export default function Repository() {
  const navigation = useNavigation();
  const { repositoryName, username } = useLocalSearchParams();

  const {
    pullRequests,
    repositoryInfo,
    handleEndReached,
    handleOpenTab,
    handleCloseTab,
    repoState,
    fetching,
  } = usePullRequests({
    repositoryName: repositoryName as string,
    username: username as string,
  });

  const handleGoBackNavigation = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <BackButton
        title={repositoryName as string}
        handleGoBack={handleGoBackNavigation}
      />
      <View style={styles.header}>
        {repositoryInfo && (
          <PRCounter
            state={repoState}
            open={repositoryInfo.open.totalCount}
            closed={repositoryInfo.closed.totalCount}
            handleOpenTab={handleOpenTab}
            handleCloseTab={handleCloseTab}
          />
        )}
      </View>
      <View style={styles.content}>
        <PullRequestList
          data={pullRequests}
          handleEndReached={handleEndReached}
          fetching={fetching}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    position: "static",
    zIndex: 10,
  },
  content: {
    alignSelf: "stretch",
    backgroundColor: "transparent",
    marginVertical: 8,
  },
  list: {
    paddingBottom: 80,
    marginBottom: 20,
    marginHorizontal: 26,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
