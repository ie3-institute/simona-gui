import {FormControl, FormLabel} from '@chakra-ui/form-control';
import {Select} from '@chakra-ui/select';
import React from 'react';
import {label2id} from '../utils/utils';

type SelectInputProps = {
  label: string;
  options: string[];
};

const SelectInput = ({label, options}: SelectInputProps) => {
  return (
    <FormControl id={label2id(label)}>
      <FormLabel>{label}</FormLabel>
      <Select variant='flushed' focusBorderColor='primary.300'>
        {options.map((option) => (
          <option key={option}> {option} </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
