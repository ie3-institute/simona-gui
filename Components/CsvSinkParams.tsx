import {FormLabel} from '@chakra-ui/form-control';
import {Box, VStack} from '@chakra-ui/layout';
import React from 'react';
import ParameterBox from './ParameterBox';
import RegularInput from './RegularInput';
import SelectInput from './SelectInput';

const CsvSinkParams = () => {
  return (
    <ParameterBox label='CSV sink parameters'>
      <RegularInput label='File format' placeholder='.csv' />
      <RegularInput label='File prefix' placeholder='' />
      <RegularInput label='File suffix' placeholder='' />
    </ParameterBox>
  );
};

export default CsvSinkParams;
