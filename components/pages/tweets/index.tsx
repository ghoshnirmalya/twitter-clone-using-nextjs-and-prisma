import { Box, Stack } from "@chakra-ui/react";
import AddNewTweetForm from "components/pages/tweets/add-new-tweet-form";
import Tweet from "components/pages/tweets/tweet";
import React from "react";
import ITweet from "types/tweet";

const TweetsPageComponent = ({ tweets }) => {
  return (
    <Stack spacing={8}>
      <Box>
        <AddNewTweetForm />
      </Box>
      {tweets.map((tweet: ITweet) => {
        return (
          <Box key={tweet.id}>
            <Tweet tweet={tweet} />
          </Box>
        );
      })}
    </Stack>
  );
};

export default TweetsPageComponent;
