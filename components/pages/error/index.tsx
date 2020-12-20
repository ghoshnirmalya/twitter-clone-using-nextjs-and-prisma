import React, { FC } from "react";
import { Box, Heading, Stack, Text, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

interface IProps {
  statusCode: number;
}

const IndexPageComponent: FC<IProps> = ({ statusCode }) => {
  const signOutButtonNode = () => {
    return (
      <Box>
        <Link href="/">
          <Button>Return to the home page</Button>
        </Link>
      </Box>
    );
  };

  return (
    <Stack>
      <Flex>
        <Stack spacing={4} maxW="xl" mx="auto">
          <Heading textAlign="center">Nextjs Prisma</Heading>
          <Text fontSize="xl" lineHeight="tall" textAlign="center">
            {statusCode
              ? `An error ${statusCode} occurred on server`
              : "An error occurred on client"}
          </Text>
          <Box>
            <Stack isInline align="center" justifyContent="center">
              {signOutButtonNode()}
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default IndexPageComponent;
