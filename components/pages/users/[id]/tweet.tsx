import { Box, Stack, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import ITweet from "types/tweet";

interface IProps {
  tweet: ITweet;
}

const Tweet: FC<IProps> = ({ tweet }) => {
  const bodyNode = () => {
    return (
      <Text fontSize="md" p={4}>
        {tweet.body}
      </Text>
    );
  };

  return (
    <Box shadow="lg" rounded="lg">
      <Stack spacing={0}>{bodyNode()}</Stack>
    </Box>
  );
};

export default Tweet;
