import { Box, Grid, Stack } from "@chakra-ui/react";
import React from "react";
import IUser from "types/user";
import User from "components/pages/users/user";

const UsersPageComponent = ({ users }) => {
  return (
    <Stack spacing={8}>
      <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={8}>
        {users?.map((user: IUser) => {
          return (
            <Box key={user.id}>
              <User user={user} />
            </Box>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default UsersPageComponent;
