import React from "react";
import { NextComponentType } from "next";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import { Box, Stack, Link as _Link, Button } from "@chakra-ui/react";

const Navbar: NextComponentType = () => {
  const [session] = useSession();

  const linksForAllUsers = [
    {
      id: "home",
      label: "Home",
      href: "/",
    },
  ];

  const linksForAuthenticatedUsers = [
    {
      id: "tweets",
      label: "Tweets",
      href: "/tweets",
    },
    {
      id: "users",
      label: "Users",
      href: "/users",
    },
  ];

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
            Sign In
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
    <Box>
      <Box p={4} shadow="lg" pos="relative">
        <Box maxW="4xl" mx="auto" w="full">
          <Stack
            isInline
            spacing={4}
            align="center"
            justifyContent="space-between"
            w="full"
          >
            <Box>
              <Stack isInline spacing={4} align="center" fontWeight="semibold">
                {linksForAllUsers.map((link) => {
                  return (
                    <Box key={link.id}>
                      <Link href={link.href}>
                        <_Link>{link.label}</_Link>
                      </Link>
                    </Box>
                  );
                })}
                {session &&
                  linksForAuthenticatedUsers.map((link) => {
                    return (
                      <Box key={link.id}>
                        <Link href={link.href}>
                          <_Link>{link.label}</_Link>
                        </Link>
                      </Box>
                    );
                  })}
              </Stack>
            </Box>
            <Box>
              <Stack isInline spacing={4} align="center">
                {signInButtonNode()}
                {signOutButtonNode()}
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
