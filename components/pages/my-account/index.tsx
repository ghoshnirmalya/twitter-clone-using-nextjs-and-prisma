import {
  Box,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useSession } from "next-auth/client";
import React from "react";

const MyAccountPageComponent = () => {
  const [session] = useSession();

  return (
    <Stack spacing={4}>
      <Heading>My Account</Heading>
      <Grid templateColumns="repeat(1, 1fr)" gap={4}>
        <Box shadow="sm" rounded="lg">
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input type="text" id="name" value={session.user.name} disabled />
            </FormControl>
          </Stack>
        </Box>
      </Grid>
    </Stack>
  );
};

export default MyAccountPageComponent;
