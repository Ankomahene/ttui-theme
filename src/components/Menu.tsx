import { Box, Divider, Text, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface MenuProps {
  onSelect?: () => void;
}
export const Menu = ({ onSelect }: MenuProps) => {
  return (
    <Box>
      <Text px="1rem" fontWeight="bold">
        Buttons
      </Text>

      <MenuButton onSelect={onSelect} label="Scheme" link="/buttons/scheme" />
      <MenuButton onSelect={onSelect} label="Variants" link="/buttons" />

      <Divider />
      <MenuButton onSelect={onSelect} label="Badge" link="/badge" />
    </Box>
  );
};

interface Props {
  label: string;
  link: string;
  onSelect?: () => void;
}

const MenuButton = ({ label, link, onSelect }: Props) => (
  <Link to={link}>
    <Box
      role="button"
      px="2rem"
      py="0.5rem"
      as="button"
      w="full"
      textAlign="left"
      _hover={{ bgColor: useColorModeValue('gray.100', 'gray.700') }}
      color={useColorModeValue('gray.600', 'gray.400')}
      onClick={() => onSelect?.()}
    >
      {label}
    </Box>
  </Link>
);
