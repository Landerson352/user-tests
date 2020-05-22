import React from 'react';
import { Box, Button, Text } from '@chakra-ui/core';
import route from '../route';

const FindHelp = () => (
  <Box pb={100}>
    <Box height={450} bg="gray.200" mb={-330} />
    <Box bg="white" borderWidth={1} borderColor="gray.400" width={680} mx="auto" p={60}>
      <Text fontWeight="bold" fontSize={36} textAlign="center" mb={50}>
        Introducing...
      </Text>

      <Button as="a" href={route.home.path} round variantColor="trueGray" variant="solid" size="lg" mx="auto" d="flex" width={410} height={90} borderRadius={45} fontSize={20}>
        Start a Diagnosis
      </Button>
    </Box>
  </Box>
);

export default FindHelp;
