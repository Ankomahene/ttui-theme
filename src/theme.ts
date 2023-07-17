// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

export const brandColors = {
  primary: 'hsl(77, 100%, 66%)', //CCFF50
  secondary: 'hsl(240, 100%, 85%)', //B0B0FF
  warning: 'hsl(24, 100%, 87%)', // FFD6BB
  info: 'hsl(166, 100%, 86%)', //B8FFEE
  light: 'hsl(0, 0%, 94%)', //EFEFEF
  danger: 'hsl(3, 65%, 48%)', //C8342B
  white: 'hsl(0, 0%, 100%)', //FFFFFF
  dark: 'hsl(0, 0%, 0%)', //000000
};

export const colors = {
  brand: {
    ...brandColors,
    primaryDark: 'hsl(77, 100%, 40%)',
    secondaryDark: 'hsl(240, 100%, 73%)',
    warningDark: 'hsl(24, 100%, 75%)',
    infoDark: 'hsl(166, 100%, 46%)',
    lightDark: 'hsl(0, 0%, 64%)',
    dangerLight: '	hsl(3, 95%, 71%)',
  },
};

export const theme = extendTheme({ colors });
