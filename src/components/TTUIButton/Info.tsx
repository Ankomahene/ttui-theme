import { Button, ButtonProps, useColorMode } from '@chakra-ui/react';
import { TTUIVariant } from '../../model';
import { ReactNode } from 'react';
import { getGeneralStyles } from './styles';

interface TTUIButtonProps extends ButtonProps {
  variant?: TTUIVariant;
  disabled?: boolean;
  children?: ReactNode;
}

export const InfoButton = ({
  children,
  variant,
  disabled,
  ...rest
}: TTUIButtonProps) => {
  const { colorMode } = useColorMode();

  const getChakraButton = (props: ButtonProps): ReactNode => (
    <Button {...getGeneralStyles(disabled)} {...props} {...rest}>
      {children || 'Button'}
    </Button>
  );

  if (variant === 'outline') {
    const outlineStyles: ButtonProps = {
      bgColor: 'transparent',
      borderColor: colorMode === 'dark' ? 'brand.info' : 'brand.infoDark',

      borderWidth: 1,
      color: colorMode === 'dark' ? 'brand.info' : 'brand.infoDark',
    };
    return getChakraButton(outlineStyles);
  }

  if (variant === 'link') {
    const linkStyles: ButtonProps = {
      as: 'a',
      bgColor: 'transparent',
      color: colorMode === 'dark' ? 'brand.info' : 'brand.infoDark',
      _hover: {
        textDecor: disabled ? 'none' : 'underline',
        cursor: disabled ? 'not-allowed' : 'pointer',
      },
    };
    return getChakraButton(linkStyles);
  }

  if (variant === 'ghost') {
    const ghostStyles: ButtonProps = {
      bgColor: 'transparent',
      color: colorMode === 'dark' ? 'brand.info' : 'brand.infoDark',
    };
    return getChakraButton(ghostStyles);
  }

  if (!variant || variant === 'solid') {
    const defaultStyles: ButtonProps = {
      bgColor: colorMode === 'dark' ? 'brand.info' : 'brand.infoDark',
      color: 'brand.dark',
    };
    return getChakraButton(defaultStyles);
  }
};
