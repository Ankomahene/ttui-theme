import { Button, ButtonProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { TTUIVariant } from '../../model';
import { getGeneralStyles } from './styles';

interface TTUIButtonProps extends ButtonProps {
  variant?: TTUIVariant;
  disabled?: boolean;
  children?: ReactNode;
}

export const DarkButton = ({
  children,
  variant,
  disabled,
  ...rest
}: TTUIButtonProps) => {
  const getChakraButton = (props: ButtonProps): ReactNode => (
    <Button {...getGeneralStyles(disabled)} {...props} {...rest}>
      {children || 'Button'}
    </Button>
  );

  if (variant === 'outline') {
    const outlineStyles: ButtonProps = {
      bgColor: 'transparent',
      borderColor: 'brand.dark',
      borderWidth: 1,
      color: 'brand.dark',
    };
    return getChakraButton(outlineStyles);
  }

  if (variant === 'link') {
    const linkStyles: ButtonProps = {
      as: 'a',
      bgColor: 'transparent',
      color: 'brand.dark',
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
      color: 'brand.dark',
    };
    return getChakraButton(ghostStyles);
  }

  if (!variant || variant === 'solid') {
    const defaultStyles: ButtonProps = {
      bgColor: 'brand.dark',
      color: 'brand.white',
    };
    return getChakraButton(defaultStyles);
  }
};
