import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useSession } from "next-auth/client";
import React, { FormEvent, useState } from "react";

const MyAccountPageComponent = () => {
  const [name, setName] = useState("");
  const [session] = useSession();

  const handleSubmit = () => {};

  const errorNode = () => {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>updateUserError</AlertTitle>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
    );
  };

  return (
    <Stack spacing={4}>
      <Heading>My Account</Heading>
      {errorNode()}
      <Grid templateColumns="repeat(1, 1fr)" gap={4}>
        <Box p={4} shadow="sm" rounded="lg">
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e: FormEvent<HTMLInputElement>) =>
                  setName(e.currentTarget.value)
                }
              />
            </FormControl>
            <FormControl>
              <Button loadingText="Saving..." onClick={handleSubmit}>
                Save
              </Button>
            </FormControl>
          </Stack>
        </Box>
      </Grid>
    </Stack>
  );
};

export default MyAccountPageComponent;
