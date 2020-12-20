import { Box } from "@chakra-ui/react";
import React, { FC } from "react";

const Container: FC = ({ children }) => {
  return (
    <Box p={4} fontSize="sm">
      <Box maxW="xl" mx="auto">
        {children}
      </Box>
    </Box>
  );
};

export default Container;
