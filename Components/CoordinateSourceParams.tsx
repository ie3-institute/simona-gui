import {FormLabel} from '@chakra-ui/form-control';
import {Input} from '@chakra-ui/input';
import {Box, Text, VStack} from '@chakra-ui/layout';
import React from 'react';
import ParameterBox from './ParameterBox';
import RegularInput from './RegularInput';
import SelectInput from './SelectInput';

const CoordinateSourceParams = () => {
  return (
    <ParameterBox label={'Coordinate source'}>
      <SelectInput label={'Grid model'} options={['icon', 'cosmo']} />
      <RegularInput label='CSV folder path' placeholder='' />
      <SelectInput label={'CSV delimiter'} options={[',', ';']} />
    </ParameterBox>
  );
};

export default CoordinateSourceParams;
