import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import ButtonsPage from './features/buttons';
import ButtonsSchemePage from './features/buttons/scheme';
import ButtonsVariantsPage from './features/buttons/variants';
import BadgePage from './features/badge';

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
            display={{ base: 'none', md: 'block' }}
          >
            <Heading size="sm" textAlign="center" py="1rem">
              Components
            </Heading>
            <Menu />
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
              <Route path="badge" element={<BadgePage />} />
            </Routes>
          </Box>
        </Flex>
      </HashRouter>
    </Box>
  );
}

export default App;
