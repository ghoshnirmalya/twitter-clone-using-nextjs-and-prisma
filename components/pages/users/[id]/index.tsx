import { Box, Stack } from "@chakra-ui/react";
import React, { FC } from "react";
import IUser from "types/user";

interface IProps {
  user: IUser;
}

const UsersPageComponent: FC<IProps> = ({ user }) => {
  return (
    <Stack spacing={8}>
      <Box key={user?.id}>{user?.name}</Box>
    </Stack>
  );
};

export default UsersPageComponent;
