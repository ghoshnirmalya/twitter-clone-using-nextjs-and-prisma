import { Avatar, Box, Stack, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import ITweet from "types/tweet";

interface IProps {
  tweet: ITweet;
}

const Tweet: FC<IProps> = ({ tweet }) => {
  const authorNode = () => {
    return (
      <Stack
        spacing={4}
        isInline
        alignItems="center"
        p={4}
        borderBottomWidth={1}
      >
        <Avatar name={tweet.author.name} src={tweet.author.image} />
        <Stack>
          <Text fontWeight="bold">{tweet.author.name}</Text>
        </Stack>
      </Stack>
    );
  };

  const bodyNode = () => {
    return (
      <Text fontSize="md" p={4}>
        {tweet.body}
      </Text>
    );
  };

  return (
    <Box shadow="lg" rounded="lg">
      <Stack spacing={0}>
        {authorNode()}
        {bodyNode()}
      </Stack>
    </Box>
  );
};

export default Tweet;
