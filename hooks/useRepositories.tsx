import { ALL_REPOSITORY_SCHEMA } from "@/schemas/all-repository";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "urql";

export default function useRepositories() {
  const [page, setPage] = useState<string | null>(null);
  const [repositoriesList, setRepositories] = useState<any[]>([]);

  const [result] = useQuery({
    query: ALL_REPOSITORY_SCHEMA,
    variables: {
      nextPage: page,
    },
  });

  const hasNextPage = result.data?.search.pageInfo.hasNextPage;
  const endCursor = result.data?.search.pageInfo.endCursor;

  const repositories = useMemo(
    () =>
      repositoriesList.map((item: any) => ({
        id: item.id,
        author: item.owner.name,
        username: item.owner.login,
        title: item.name,
        description: item.description,
        stars: item.stargazerCount,
        forks: item.forkCount,
        imageUrl: item.owner.avatarUrl ?? null,
      })),
    [repositoriesList]
  );

  function handleEndReached() {
    if (hasNextPage) setPage(endCursor);
  }

  useEffect(() => {
    if (result.data?.search.nodes) {
      setRepositories((prev) => [...prev, ...result.data?.search.nodes]);
    }
  }, [result.data]);

  return {
    repositories,
    handleEndReached,
    hasNextPage,
    fetching: result.fetching,
  };
}
