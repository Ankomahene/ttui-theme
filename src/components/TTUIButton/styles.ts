import { ButtonProps } from '@chakra-ui/react';

export const getGeneralStyles = (disabled?: boolean): ButtonProps => {
  return {
    _hover: {
      bgColor: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      shadow: disabled ? 'none' : 'md',
      transition: 'all .3s',
      filter: 'brightness(95%)',
    },
    _active: { bgColor: 'none' },
    opacity: disabled ? 0.4 : 1,
  };
};
