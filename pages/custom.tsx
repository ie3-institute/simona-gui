import {Button, IconButton} from '@chakra-ui/button';
import {useColorMode} from '@chakra-ui/color-mode';
import {AddIcon, MoonIcon, SunIcon} from '@chakra-ui/icons';
import {Center, Stack} from '@chakra-ui/layout';

const CustomisationsPage = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Center h='100vh' maxW='1200px' mx='auto'>
      <Stack isInline>
        <IconButton
          icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
          variant='outline'
          colorScheme='cyan'
          aria-label='Color mode switcher'
          onClick={toggleColorMode}
        >
          SwitchMode
        </IconButton>
        <Button variant='solid' colorScheme='blue'>
          Solid
        </Button>
        <Button variant='solid' bg='primary'>
          Solid
        </Button>
      </Stack>
    </Center>
  );
};

export default CustomisationsPage;
