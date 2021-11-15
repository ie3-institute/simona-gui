import {Checkbox} from '@chakra-ui/checkbox';
import {FormLabel} from '@chakra-ui/form-control';
import {Box, SimpleGrid} from '@chakra-ui/layout';
import React from 'react';

const OutputCheckboxes = () => {
  return (
    <Box width='100%'>
      <FormLabel>Choose result outputs</FormLabel>
      <Box width='98%' borderWidth='2px' borderRadius='lg'>
        <SimpleGrid columns={3} spacing='20px' margin='25px'>
          <Checkbox colorScheme='primary'> Nodes </Checkbox>
          <Checkbox colorScheme='primary'> Lines </Checkbox>
          <Checkbox colorScheme='primary'> Switches </Checkbox>
          <Checkbox colorScheme='primary'>Two-winding transformers</Checkbox>
          <Checkbox colorScheme='primary'>Three-winding transformers</Checkbox>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default OutputCheckboxes;
