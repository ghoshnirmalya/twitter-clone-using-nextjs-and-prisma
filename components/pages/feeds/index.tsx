import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import IFeed from "types/feed";
import Feed from "components/pages/feeds/feed";
import AddNewFeedForm from "components/pages/feeds/add-new-feed-form";

const FeedsPageComponent = () => {
  return (
    <Stack spacing={8}>
      <Box>
        <AddNewFeedForm />
      </Box>
      {[].map((feed: IFeed) => {
        return (
          <Box key={feed.id}>
            <Feed feed={feed} />
          </Box>
        );
      })}
    </Stack>
  );
};

export default FeedsPageComponent;
