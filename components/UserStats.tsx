import { GitHubUser } from "@/types";
import { Group, Text } from "@mantine/core";
import { Oswald } from "next/font/google";

interface UserProfileProps {
  user: GitHubUser;
}

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500"],
});

export default function UserProfile({ user }: UserProfileProps) {
  return (
    <Group mt="md" justify="center" gap={30}>
      <div>
        <Text ta="center" fz="lg" fw={500} className={oswald.className}>
          {user.followers}
        </Text>
        <Text ta="center" fz="sm" c="dimmed" lh={1}>
          {"Seguidores"}
        </Text>
      </div>
      <div>
        <Text ta="center" fz="lg" fw={500} className={oswald.className}>
          {user.following}
        </Text>
        <Text ta="center" fz="sm" c="dimmed" lh={1}>
          {"Seguidos"}
        </Text>
      </div>
      <div>
        <Text ta="center" fz="lg" fw={500} className={oswald.className}>
          {user.public_repos}
        </Text>
        <Text ta="center" fz="sm" c="dimmed" lh={1}>
          {"Repos"}
        </Text>
      </div>
    </Group>
  );
}
