import {FormLabel} from '@chakra-ui/form-control';
import {Box, VStack} from '@chakra-ui/layout';
import React from 'react';

type ParameterBoxProps = {
  children: React.ReactNode;
  label: string;
};

const ParameterBox = ({children, label}: ParameterBoxProps) => {
  return (
    <Box width='100%'>
      <FormLabel mb='15px'>{label}</FormLabel>
      <Box width='98%' borderWidth='2px' borderRadius='lg'>
        <VStack spacing='25px' m='25px'>
          {children}
          {console.log(children)}
        </VStack>
      </Box>
    </Box>
  );
};

export default ParameterBox;
