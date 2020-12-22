import { Box, Stack, Text } from "@chakra-ui/react";
import timeFromNow from "lib/time-from-now";
import React, { FC } from "react";
import ITweet from "types/tweet";

interface IProps {
  tweet: ITweet;
}

const Tweet: FC<IProps> = ({ tweet }) => {
  const metaNode = () => {
    return (
      <Stack
        spacing={4}
        isInline
        alignItems="center"
        p={4}
        borderBottomWidth={1}
      >
        <Text>{timeFromNow(tweet.createdAt)}</Text>
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
        {metaNode()}
        {bodyNode()}
      </Stack>
    </Box>
  );
};

export default Tweet;
