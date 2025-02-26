import { SimpleGrid, Skeleton } from "@mantine/core";

const UserSkeletonGrid = () => (
  <SimpleGrid cols={4} spacing="lg">
    {Array.from({ length: 12 }).map((_, index) => (
      <Skeleton key={index} height={200} radius="md" />
    ))}
  </SimpleGrid>
);

export default UserSkeletonGrid;
