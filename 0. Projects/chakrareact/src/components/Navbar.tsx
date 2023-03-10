import { Box, Flex } from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <Flex
      bg="gray.200"
      color="white"
      justifyContent="space-around"
      wrap="wrap"
      gap="2px"
    >
      <Box w="150px" h="50px" bg="red">
        1
      </Box>
      <Box w="150px" h="50px" bg="blue">
        2
      </Box>
      <Box w="150px" h="50px" bg="green">
        3
      </Box>
      <Box w="150px" h="50px" bg="orange">
        4
      </Box>
    </Flex>
  );
}

export default Navbar;
