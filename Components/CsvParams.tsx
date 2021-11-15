import {FormLabel} from '@chakra-ui/form-control';
import {Box, VStack} from '@chakra-ui/layout';
import React from 'react';
import ParameterBox from './ParameterBox';
import RegularInput from './RegularInput';
import SelectInput from './SelectInput';

const CsvParams = () => {
  return (
    <ParameterBox label='CSV parameters'>
      <RegularInput label='Folder path' placeholder='' />
      <SelectInput label={'CSV delimiter'} options={[',', ';']} />
      <RegularInput
        label='Time pattern'
        placeholder="yyyy-MM-dd'T'HH:mm:ss[.S[S][S]]'Z'"
      />
    </ParameterBox>
  );
};

export default CsvParams;
