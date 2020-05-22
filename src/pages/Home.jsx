import React from 'react';
import { Box, Button, Stack, Text } from '@chakra-ui/core';

import { times, reduce } from 'lodash';

import loremIpsum from '../helpers/loremIpsum';
import route from '../route';

const probabilityOfDuplicateBirthdays = (pop) => 1 - reduce(times(pop), (sum, n) => sum * (365 - n) / 365, 1);

console.log(probabilityOfDuplicateBirthdays(33));

const HomePage = () => (
  <Box pb={100}>
    <Box height={450} bg="gray.200" mb={-330} />
    <Box bg="white" borderWidth={1} borderColor="gray.400" width={680} mx="auto" p={60}>
      <Text fontWeight="bold" fontSize={36} textAlign="center">
        How to Fix a Leaking Pipe
      </Text>
      <Text fontWeight="bold" fontSize={20} textAlign="center" mb={50}>
        in under 30 minutes
      </Text>
      <Text fontSize={15} mb={30}>
        {loremIpsum(8)}
      </Text>
      <Stack direction="horizontal" justifyContent="space-between" mb={30}>
        <Box bg="gray.200" width={260} height={190} />
        <Box bg="gray.200" width={260} height={190} />
      </Stack>
      <Text fontSize={15} mb={30}>
        {loremIpsum(8)}
      </Text>
      <Text fontSize={15} mb={30}>
        {loremIpsum(16)}
      </Text>
      <Box bg="gray.200" height={120} mb={30} />
      <Text fontSize={15} mb={30}>
        {loremIpsum(8)}
      </Text>
      <Text fontSize={15} mb={30}>
        {loremIpsum(8)}
      </Text>
      <Text fontWeight="bold" fontSize={26} textAlign="center" mt={60} mb={25}>
        We can help!
      </Text>
      <Button as="a" href={route.findHelp.path} round variantColor="trueGray" variant="solid" size="lg" mx="auto" d="flex" width={410} height={90} borderRadius={45} fontSize={20}>
        Find Help
      </Button>
    </Box>
  </Box>
);

export default HomePage;
