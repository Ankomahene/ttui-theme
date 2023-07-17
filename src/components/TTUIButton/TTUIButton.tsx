import { ButtonProps } from '@chakra-ui/react';
import { TTUIColorScheme, TTUIVariant } from '../../model';
import { PrimaryButton } from './Primary';
import { SecondaryButton } from './Secondary';
import { DarkButton } from './Dark';
import { WarningButton } from './Warning';
import { InfoButton } from './Info';
import { DangerButton } from './Danger';
import { LightButton } from './Light';
import { WhiteButton } from './White';

interface Props extends ButtonProps {
  colorScheme?: TTUIColorScheme;
  variant?: TTUIVariant;
  label?: string;
}

export const TTUIButton = ({
  colorScheme = 'primary',
  variant = 'solid',
  children,
  disabled,
  ...rest
}: Props) => {
  if (colorScheme === 'primary') {
    return (
      <PrimaryButton variant={variant} disabled={disabled} {...rest}>
        {children}
      </PrimaryButton>
    );
  }

  if (colorScheme === 'secondary') {
    return (
      <SecondaryButton variant={variant} disabled={disabled} {...rest}>
        {children}
      </SecondaryButton>
    );
  }

  if (colorScheme === 'warning') {
    return (
      <WarningButton variant={variant} disabled={disabled} {...rest}>
        {children}
      </WarningButton>
    );
  }

  if (colorScheme === 'danger') {
    return (
      <DangerButton variant={variant} disabled={disabled} {...rest}>
        {children}
      </DangerButton>
    );
  }

  if (colorScheme === 'info') {
    return (
      <InfoButton variant={variant} disabled={disabled} {...rest}>
        {children}
      </InfoButton>
    );
  }

  if (colorScheme === 'light') {
    return (
      <LightButton variant={variant} disabled={disabled} {...rest}>
        {children}
      </LightButton>
    );
  }

  if (colorScheme === 'dark') {
    return (
      <DarkButton variant={variant} disabled={disabled} {...rest}>
        {children}
      </DarkButton>
    );
  }

  if (colorScheme === 'white') {
    return (
      <WhiteButton variant={variant} disabled={disabled} {...rest}>
        {children}
      </WhiteButton>
    );
  }

  return (
    <PrimaryButton variant={variant} disabled={disabled} {...rest}>
      {children}
    </PrimaryButton>
  );
};
