import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  FormControl,
  FormLabel,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import AccessDeniedIndicator from "components/access-denied-indicator";
import { useSession } from "next-auth/client";
import React, { useState } from "react";

const AddNewFeedForm = () => {
  const [body, setBody] = useState("");
  const [session] = useSession();

  if (!session) {
    return (
      <AccessDeniedIndicator message="You need to be signed in to add a new feed!" />
    );
  }

  const handleSubmit = async () => {
    setBody("");
  };

  const errorNode = () => {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>insertFeedError</AlertTitle>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
    );
  };

  return (
    <Stack spacing={4}>
      {errorNode()}
      <Box p={4} shadow="lg" rounded="lg">
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel htmlFor="body">What's on your mind?</FormLabel>
            <Textarea id="body" value={body} />
          </FormControl>
          <FormControl>
            <Button
              loadingText="Posting..."
              onClick={handleSubmit}
              isDisabled={!body.trim()}
            >
              Post
            </Button>
          </FormControl>
        </Stack>
      </Box>
    </Stack>
  );
};

export default AddNewFeedForm;
