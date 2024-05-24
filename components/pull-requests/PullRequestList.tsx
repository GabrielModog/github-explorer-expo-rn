import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { openBrowserAsync } from "expo-web-browser";

import { Colors } from "@/constants/colors";
import { IPullRequest } from "@/types/pull-request";
import PullRequest from "./PullRequest";

interface PullRequestListProps {
  data: any[];
  fetching: boolean;
  handleEndReached: () => void;
}

interface PullRequestItemProps extends IPullRequest {}

export default function PullRequestList(props: PullRequestListProps) {
  const { data, fetching = false, handleEndReached } = props;
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      onEndReached={handleEndReached}
      ListFooterComponent={() =>
        fetching && <ActivityIndicator size="large" color={Colors.tint} />
      }
      renderItem={({ item }) => <PullRequestItem {...item} />}
    />
  );
}

function PullRequestItem(props: PullRequestItemProps) {
  const { id, title, username, description, createdAt, author, imageUrl, url } =
    props;
  return (
    <TouchableOpacity
      style={styles.touchable}
      onPress={() => openBrowserAsync(url)}
    >
      <PullRequest
        id={id}
        title={title}
        description={description}
        username={username}
        author={author}
        imageUrl={imageUrl}
        createdAt={createdAt}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
  },
  list: {
    paddingBottom: 120,
    marginHorizontal: 26,
  },
});
