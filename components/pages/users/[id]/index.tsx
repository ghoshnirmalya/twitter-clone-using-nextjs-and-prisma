import { Avatar, Box, Grid, Stack, Text } from "@chakra-ui/react";
import Tweet from "components/pages/users/[id]/tweet";
import React, { FC } from "react";
import ITweet from "types/tweet";
import IUser from "types/user";

interface IProps {
  user: IUser;
}

const UsersPageComponent: FC<IProps> = ({ user }) => {
  const authorNode = () => {
    return (
      <Stack spacing={4} isInline alignItems="center">
        <Avatar name={user?.name} src={user?.image} />
        <Stack>
          <Text fontWeight="bold" fontSize="4xl">
            {user?.name}
          </Text>
        </Stack>
      </Stack>
    );
  };

  return (
    <Stack spacing={8}>
      {authorNode()}
      <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={8}>
        {user?.tweets.map((tweet: ITweet) => {
          return (
            <Box key={tweet.id}>
              <Tweet tweet={tweet} />
            </Box>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default UsersPageComponent;
