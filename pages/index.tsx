import { useState } from "react";
import useSWR from "swr";

import { BASE_URL } from "@/config";
import { useDebounce } from "@/hooks";
import {
  ErrorMessage,
  SearchBar,
  UserList,
  UserSkeletonGrid,
} from "@components";
import {
  Container,
  Group,
  Pagination as MantinePagination,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import { GitHubSearchResponse, GitHubUser } from "@types";

const PAGE_SIZE = 12;
const DEBOUNCE_TIME = 1000;
const DEFAULT_TOTAL_PAGES = 10;

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const data = await res.json();
    throw new Error(`Error: ${res.status} - ${JSON.stringify(data.message)}`);
  }
  return res.json();
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const debouncedSearchTerm = useDebounce<string>(searchTerm, DEBOUNCE_TIME);

  const url = debouncedSearchTerm
    ? `${BASE_URL}/search/users?q=${debouncedSearchTerm}&page=${page}&per_page=${PAGE_SIZE}`
    : `${BASE_URL}/users?since=${(page - 1) * PAGE_SIZE}&per_page=${PAGE_SIZE}`;

  const { data, error, isLoading, mutate } = useSWR<GitHubSearchResponse>(
    url,
    fetcher,
    {
      errorRetryCount: 0,
    }
  );

  const users: GitHubUser[] = Array.isArray(data) ? data : data?.items ?? [];
  const defaultPages = searchTerm.length > 0 ? 0 : DEFAULT_TOTAL_PAGES;
  const totalPages = data?.total_count
    ? Math.ceil(data?.total_count / PAGE_SIZE)
    : defaultPages;

  return (
    <Container size="lg" py="xl">
      <Container size="md" py="xl">
        <Stack align="center" gap="md">
          <Text size="lg" c="var(--primary)" ta="center">
            Busca y explora usuarios de GitHub. Haz clic en un perfil para ver
            más detalles.
          </Text>
          <Space h="md" />
          <SearchBar setSearchTerm={setSearchTerm} setPage={setPage} />
        </Stack>
      </Container>

      {isLoading && !data && <UserSkeletonGrid />}

      {error && <ErrorMessage error={error} onRetry={() => mutate()} />}

      {!isLoading && !error && <UserList users={users} />}

      {!error && !isLoading && (
        <>
          <Space h="md" />

          <Group justify="center">
            <MantinePagination
              value={page}
              onChange={setPage}
              total={totalPages}
              color="var(--secondary)"
            />
          </Group>
        </>
      )}
    </Container>
  );
};

export default Home;
