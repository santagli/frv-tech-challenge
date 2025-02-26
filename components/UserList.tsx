// components/UserList.tsx (ejemplo con Mantine v7)
import { Grid } from "@mantine/core";
import { UserCard } from "@components";
import { GitHubUser } from "@types";
import { JSX } from "react";
import Link from "next/link";

interface UserListProps {
  users: GitHubUser[];
}

const UserList = ({ users }: UserListProps): JSX.Element => {
  return (
    <Grid gutter="lg">
      {users.map((user) => (
        <Grid.Col key={user.id} span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Link href={`/user/${user.login}`}>
            <UserCard user={user} />
          </Link>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default UserList;
