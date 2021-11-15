import {extendTheme} from '@chakra-ui/react';

export const customTheme = extendTheme({
  styles: {
    global: {
      input: {
        fontFamily: 'Jetbrains Mono',
        fontSize: '12px',
      },
      select: {
        fontFamily: 'Jetbrains Mono',
      },
    },
  },
  fonts: {
    heading: 'Mulish',
    body: 'Mulish',
    mono: 'Jetbrains Mono',
  },
  colors: {
    primary: {
      900: '#182407',
      800: '#31480E',
      700: '#496D15',
      600: '#62911C',
      500: '#7AB523',
      400: '#87BC39',
      300: '#A2CB65',
      200: '#BDDA91',
      100: '#D7E9BD',
      50: '#F2F8E9',
    },
  },
  components: {
    Input: {
      baseStyle: {
        fontFamily: 'Jetbrains Mono',
        color: 'red',
      },
    },
    Select: {
      baseStyle: {
        fontFamily: 'Jetbrains Mono',
      },
    },
    FormLabel: {
      baseStyle: {
        fontSize: 'lg',
      },
    },
  },
});
