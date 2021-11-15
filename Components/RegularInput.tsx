import {FormControl, FormHelperText, FormLabel} from '@chakra-ui/form-control';
import {Input} from '@chakra-ui/input';
import React from 'react';
import {label2id} from '../utils/utils';

type RegularInputProps = {
  label: string;
  placeholder: string;
};

const RegularInput = ({label, placeholder}: RegularInputProps) => {
  return (
    <FormControl id={label2id(label)}>
      <FormLabel>{label}</FormLabel>
      <Input
        variant='flushed'
        focusBorderColor='primary.300'
        placeholder={placeholder}
      />
    </FormControl>
  );
};

export default RegularInput;
