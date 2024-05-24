import { useEffect, useMemo, useState } from "react";
import { useQuery } from "urql";

import { REPOSITORY_SCHEMA } from "@/schemas/repository";

interface UsePullRequests {
  repositoryName: string;
  username: string;
}

export default function usePullRequests(props: UsePullRequests) {
  const { repositoryName, username } = props;

  const [repoState, setRepoState] = useState<"OPEN" | "CLOSED">("OPEN");
  const [page, setPage] = useState<string | null>(null);
  const [pullsRequestsList, setPullRequests] = useState<any[]>([]);

  const [result, reexecuteQuery] = useQuery({
    query: REPOSITORY_SCHEMA,
    variables: {
      nextPage: page,
      repositoryName,
      username,
      state: repoState,
    },
  });

  const hasNextPage = result.data?.repository.pullRequests.pageInfo.hasNextPage;
  const endCursor = result.data?.repository.pullRequests.pageInfo.endCursor;

  const pullRequests = useMemo(
    () =>
      pullsRequestsList.map((item: any) => ({
        id: item.id,
        title: item.title,
        bodyText: item.bodyText,
        author: item.author.name,
        username: item.author.login,
        url: item.url,
        imageUrl: item.author.avatarUrl ?? null,
        createdAt: item.createdAt,
      })),
    [pullsRequestsList]
  );

  const repositoryInfo = useMemo(() => result?.data?.repository, [result.data]);

  function handleEndReached() {
    if (hasNextPage) setPage(endCursor);
  }

  function handleOpenTab() {
    setPullRequests([]);
    setRepoState("OPEN");
    reexecuteQuery();
  }

  function handleCloseTab() {
    setPullRequests([]);
    setRepoState("CLOSED");
    reexecuteQuery();
  }

  useEffect(() => {
    if (result.data?.repository.pullRequests.nodes) {
      setPullRequests((prev) => [
        ...prev,
        ...result.data?.repository.pullRequests.nodes,
      ]);
    }
  }, [result.data]);

  return {
    pullRequests,
    repositoryInfo,
    handleEndReached,
    handleOpenTab,
    handleCloseTab,
    repoState,
    fetching: result.fetching,
  };
}
