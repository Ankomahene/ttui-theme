import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import ButtonsSchemePage from './features/buttons/scheme';
import ButtonsVariantsPage from './features/buttons/variants';
import ButtonsPage from './features/buttons';

function App() {
  return (
    <Box bgColor={useColorModeValue('gray.100', 'gray.800')}>
      <HashRouter>
        <Header />
        <Flex>
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            borderTopWidth={1}
            borderColor={useColorModeValue('gray.100', 'gray.600')}
            minW="250px"
            h="calc(100vh - 70px)"
          >
            <Heading size="sm" textAlign="center" py="1rem">
              Components
            </Heading>

            <Box>
              <Text px="1rem" fontWeight="bold">
                Buttons
              </Text>

              <MenuButton label="Scheme" link="/buttons/scheme" />
              <MenuButton label="Variants" link="/buttons" />
            </Box>
          </Box>
          <Box
            h="calc(100vh - 70px)"
            p="2rem"
            overflow="auto"
            w="100%"
            marginRight="3px"
          >
            <Routes>
              <Route index element={<ButtonsVariantsPage />} />
              <Route path="buttons" element={<ButtonsPage />}>
                <Route index element={<ButtonsVariantsPage />} />
                <Route path="scheme" element={<ButtonsSchemePage />} />
              </Route>
            </Routes>
          </Box>
        </Flex>
      </HashRouter>
    </Box>
  );
}

export default App;

interface Props {
  label: string;
  link: string;
}
const MenuButton = ({ label, link }: Props) => (
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
    >
      {label}
    </Box>
  </Link>
);
