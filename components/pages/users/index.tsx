import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import IUser from "types/user";

const UsersPageComponent = ({ users }) => {
  return (
    <Stack spacing={8}>
      {users?.map((user: IUser) => {
        return <Box key={user.id}>{user.name}</Box>;
      })}
    </Stack>
  );
};

export default UsersPageComponent;
