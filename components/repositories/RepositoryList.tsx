import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Colors } from "@/constants/colors";
import { HandleNavigationFunc } from "@/types/common";
import { IRepository } from "@/types/repository";
import Repository from "./Repository";

interface RepositoryListProps {
  data: any[];
  fetching: boolean;
  handleNavigation: HandleNavigationFunc;
  handleEndReached: () => void;
}

interface RepositoryItemProps extends IRepository {
  handleNavigation: HandleNavigationFunc;
}

export default function RepositoryList(props: RepositoryListProps) {
  const { data, fetching = false, handleNavigation, handleEndReached } = props;
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      onEndReached={handleEndReached}
      ListFooterComponent={() =>
        fetching && <ActivityIndicator size="large" color={Colors.tint} />
      }
      renderItem={({ item }) => (
        <RepositoryItem {...item} handleNavigation={handleNavigation} />
      )}
    />
  );
}

function RepositoryItem(props: RepositoryItemProps) {
  const {
    id,
    title,
    username,
    description,
    forks,
    stars,
    author,
    imageUrl,
    handleNavigation,
  } = props;
  return (
    <TouchableOpacity
      style={styles.touchable}
      onPress={() =>
        handleNavigation({
          id: id,
          repositoryName: title,
          username: username,
        })
      }
    >
      <Repository
        id={id}
        title={title}
        description={description}
        forks={forks}
        stars={stars}
        username={username}
        author={author}
        imageUrl={imageUrl}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
  },
  list: {
    paddingBottom: 60,
    marginHorizontal: 26,
  },
});
