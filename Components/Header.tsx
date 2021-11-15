import {IconButton} from '@chakra-ui/button';
import {useColorMode} from '@chakra-ui/color-mode';
import {MoonIcon, SunIcon} from '@chakra-ui/icons';
import {HStack} from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack justify='flex-end' mt='20px'>
      <IconButton
        icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
        variant={colorMode === 'light' ? 'solid' : 'outline'}
        colorScheme='primary'
        aria-label='Color mode switcher'
        onClick={toggleColorMode}
      >
        SwitchMode
      </IconButton>
    </HStack>
  );
};

export default Header;
