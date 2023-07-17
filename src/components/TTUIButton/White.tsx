import { Button, ButtonProps } from '@chakra-ui/react';
import { TTUIVariant } from '../../model';
import { ReactNode } from 'react';

interface TTUIButtonProps extends ButtonProps {
  variant?: TTUIVariant;
  disabled?: boolean;
  children?: ReactNode;
}

export const WhiteButton = ({
  children,
  variant,
  disabled,
  ...rest
}: TTUIButtonProps) => {
  const getGeneralStyles = (): ButtonProps => {
    return {
      _hover: { bgColor: 'none', cursor: disabled ? 'not-allowed' : 'pointer' },
      _active: { bgColor: 'none' },
      opacity: disabled ? 0.4 : 1,
    };
  };

  const getChakraButton = (props: ButtonProps): ReactNode => (
    <Button {...getGeneralStyles()} {...props} {...rest}>
      {children || 'Button'}
    </Button>
  );

  if (variant === 'outline') {
    const outlineStyles: ButtonProps = {
      bgColor: 'transparent',
      borderColor: 'brand.white',
      borderWidth: 1,
      color: 'brand.white',
    };
    return getChakraButton(outlineStyles);
  }

  if (variant === 'link') {
    const linkStyles: ButtonProps = {
      as: 'a',
      bgColor: 'transparent',
      color: 'brand.white',
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
      color: 'brand.white',
    };
    return getChakraButton(ghostStyles);
  }

  if (!variant || variant === 'solid') {
    const defaultStyles: ButtonProps = {
      bgColor: 'brand.white',
      color: 'brand.dark',
    };
    return getChakraButton(defaultStyles);
  }
};
