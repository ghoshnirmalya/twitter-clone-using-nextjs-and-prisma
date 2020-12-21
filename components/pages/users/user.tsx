import { Avatar, Box, Stack, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";
import IUser from "types/user";

interface IProps {
  user: IUser;
}

const User: FC<IProps> = ({ user }) => {
  const authorNode = () => {
    return (
      <Stack
        spacing={4}
        isInline
        alignItems="center"
        p={4}
        borderBottomWidth={1}
      >
        <Avatar name={user.name} src={user.image} />
        <Stack>
          <Text fontWeight="bold">{user.name}</Text>
        </Stack>
      </Stack>
    );
  };

  const bodyNode = () => {
    return (
      <Text fontSize="md" p={4}>
        {user.email}
      </Text>
    );
  };

  return (
    <Link href={`/users/${user.id}`}>
      <ChakraLink>
        <Box shadow="lg" rounded="lg">
          <Stack spacing={0}>
            {authorNode()}
            {bodyNode()}
          </Stack>
        </Box>
      </ChakraLink>
    </Link>
  );
};

export default User;
