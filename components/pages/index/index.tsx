import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";
import React from "react";

const IndexPageComponent = () => {
  const [session] = useSession();

  const signInButtonNode = () => {
    if (session) {
      return false;
    }

    return (
      <Box>
        <Link href="/api/auth/signin">
          <Button
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Create an account
          </Button>
        </Link>
      </Box>
    );
  };

  const signOutButtonNode = () => {
    if (!session) {
      return false;
    }

    return (
      <Box>
        <Link href="/api/auth/signout">
          <Button
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </Button>
        </Link>
      </Box>
    );
  };

  return (
    <Stack>
      <Flex justifyContent="center" alignItems="center">
        <Stack spacing={4} maxW="xl" mx="auto">
          <Heading textAlign="center">Nextjs Prisma</Heading>
          <Text fontSize="xl" textAlign="center">
            This is a sample application to show how to make Next.js work with
            Prisma. You can{" "}
            <Link href="/tweets">
              <ChakraLink>view all tweets</ChakraLink>
            </Link>{" "}
            or{" "}
            <Link href="/users">
              <ChakraLink>view all users</ChakraLink>
            </Link>
            .
          </Text>
          <Box>
            <Stack isInline align="center" justifyContent="center">
              {signInButtonNode()}
              {signOutButtonNode()}
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default IndexPageComponent;
