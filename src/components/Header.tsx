import {
  Button,
  Flex,
  HStack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { DrawerMenu } from './DrawerMenu';

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Flex
      px="2rem"
      bg={useColorModeValue('gray.50', 'gray.900')}
      align="center"
      justify="space-between"
      height="70px"
    >
      <HStack>
        <DrawerMenu />
        <Text>TTUI Theme</Text>
      </HStack>
      <Text
        color={useColorModeValue('gray.600', 'gray.100')}
        mr={2}
        fontSize="xs"
      >
        <Button onClick={toggleColorMode} rounded="full" w="50px" h="50px">
          {isDark ? (
            <MdOutlineLightMode size="18px" />
          ) : (
            <MdOutlineDarkMode size="18px" />
          )}
        </Button>
      </Text>
    </Flex>
  );
};
