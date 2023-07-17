import { Card, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import { TTUIButton } from '../../components/TTUIButton/TTUIButton';
import {
  FaBell,
  FaBookmark,
  FaCheck,
  FaHeart,
  FaPlus,
  FaSearch,
  FaStar,
  FaTimes,
} from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';

const ButtonsVariantsPage = () => {
  return (
    <Grid
      gap={6}
      templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 2fr)' }}
    >
      <GridItem colSpan={1}>
        {/* default */}
        <Card my="2rem" p="1rem">
          <Heading size="sm" my="1rem">
            Default
          </Heading>

          <Flex gap={4} flexWrap="wrap">
            <TTUIButton>Default</TTUIButton>
            <TTUIButton disabled={true}>Disabled</TTUIButton>
            <TTUIButton variant="link">Link</TTUIButton>
          </Flex>
        </Card>

        {/* Severities */}

        <Card my="2rem" p="1rem">
          <Heading size="sm" my="1rem">
            Severities
          </Heading>

          <Flex gap={4} flexWrap="wrap">
            <TTUIButton>Primary</TTUIButton>
            <TTUIButton colorScheme="secondary">Secondary</TTUIButton>
            <TTUIButton colorScheme="warning">Warning</TTUIButton>
            <TTUIButton colorScheme="danger">Danger</TTUIButton>
            <TTUIButton colorScheme="info">Info</TTUIButton>
            <TTUIButton colorScheme="light">Light</TTUIButton>
            <TTUIButton colorScheme="dark">Dark</TTUIButton>
          </Flex>
        </Card>

        {/* outline */}
        <Card my="2rem" p="1rem">
          <Heading size="sm" my="1rem">
            Outline
          </Heading>

          <Flex gap={4} flexWrap="wrap">
            <TTUIButton variant="outline">Primary</TTUIButton>
            <TTUIButton colorScheme="secondary" variant="outline">
              Secondary
            </TTUIButton>
            <TTUIButton colorScheme="warning" variant="outline">
              Warning
            </TTUIButton>
            <TTUIButton colorScheme="danger" variant="outline">
              Danger
            </TTUIButton>
            <TTUIButton colorScheme="info" variant="outline">
              Info
            </TTUIButton>
            <TTUIButton colorScheme="light" variant="outline">
              Light
            </TTUIButton>
            <TTUIButton colorScheme="dark" variant="outline">
              Dark
            </TTUIButton>
          </Flex>

          <Text my="1rem">Dashed Outline</Text>
          <Flex gap={4} flexWrap="wrap">
            <TTUIButton variant="outline" borderStyle="dashed">
              Primary
            </TTUIButton>
            <TTUIButton
              colorScheme="secondary"
              variant="outline"
              borderStyle="dashed"
            >
              Secondary
            </TTUIButton>
            <TTUIButton
              colorScheme="warning"
              variant="outline"
              borderStyle="dashed"
            >
              Warning
            </TTUIButton>
            <TTUIButton
              colorScheme="danger"
              variant="outline"
              borderStyle="dashed"
            >
              Danger
            </TTUIButton>
            <TTUIButton
              colorScheme="info"
              variant="outline"
              borderStyle="dashed"
            >
              Info
            </TTUIButton>
            <TTUIButton
              colorScheme="light"
              variant="outline"
              borderStyle="dashed"
            >
              Light
            </TTUIButton>
            <TTUIButton
              colorScheme="dark"
              variant="outline"
              borderStyle="dashed"
            >
              Dark
            </TTUIButton>
          </Flex>
        </Card>

        {/* outline */}
        <Card my="2rem" p="1rem">
          <Heading size="sm" my="1rem">
            Link
          </Heading>

          <Flex gap={4} flexWrap="wrap">
            <TTUIButton variant="link">Primary</TTUIButton>
            <TTUIButton colorScheme="secondary" variant="link">
              Secondary
            </TTUIButton>
            <TTUIButton colorScheme="warning" variant="link">
              Warning
            </TTUIButton>
            <TTUIButton colorScheme="danger" variant="link">
              Danger
            </TTUIButton>
            <TTUIButton colorScheme="info" variant="link">
              Info
            </TTUIButton>
            <TTUIButton colorScheme="light" variant="link">
              Light
            </TTUIButton>
            <TTUIButton colorScheme="dark" variant="link">
              Dark
            </TTUIButton>
          </Flex>
        </Card>
      </GridItem>

      <GridItem colSpan={1}>
        {/* default */}
        <Card my="2rem" p="1rem">
          <Heading size="sm" my="1rem">
            Icons
          </Heading>

          <Flex gap={4} flexWrap="wrap">
            <TTUIButton>
              <Flex align="center" gap={2}>
                <FaPlus /> Default
              </Flex>
            </TTUIButton>
            <TTUIButton>
              <FaStar />
            </TTUIButton>
            <TTUIButton>
              <Flex align="center" gap={2}>
                <FaBookmark /> Bookmark
              </Flex>
            </TTUIButton>
          </Flex>
        </Card>

        {/* raised */}
        <Card my="2rem" p="1rem">
          <Heading size="sm" my="1rem">
            Raised
          </Heading>

          <Flex gap={4} flexWrap="wrap">
            <TTUIButton shadow="md">Primary</TTUIButton>
            <TTUIButton colorScheme="secondary" shadow="md">
              Secondary
            </TTUIButton>
            <TTUIButton colorScheme="warning" shadow="md">
              Warning
            </TTUIButton>
            <TTUIButton colorScheme="danger" shadow="md">
              Danger
            </TTUIButton>
            <TTUIButton colorScheme="info" shadow="md">
              Info
            </TTUIButton>
            <TTUIButton colorScheme="light" shadow="md">
              Light
            </TTUIButton>
            <TTUIButton colorScheme="dark" shadow="md">
              Dark
            </TTUIButton>
          </Flex>
        </Card>

        {/* rounded */}
        <Card my="2rem" p="1rem">
          <Heading size="sm" my="1rem">
            Rounded
          </Heading>

          <Flex gap={4} flexWrap="wrap">
            <TTUIButton rounded="full">Primary</TTUIButton>
            <TTUIButton colorScheme="secondary" rounded="full">
              Secondary
            </TTUIButton>
            <TTUIButton colorScheme="warning" rounded="full">
              Warning
            </TTUIButton>
            <TTUIButton colorScheme="danger" rounded="full">
              Danger
            </TTUIButton>
            <TTUIButton colorScheme="info" rounded="full">
              Info
            </TTUIButton>
            <TTUIButton colorScheme="light" rounded="full">
              Light
            </TTUIButton>
            <TTUIButton colorScheme="dark" rounded="full">
              Dark
            </TTUIButton>
          </Flex>
        </Card>

        {/* rounded icons */}
        <Card my="2rem" p="1rem">
          <Heading size="sm" my="1rem">
            Rounded Icons
          </Heading>

          <Flex gap={4} flexWrap="wrap">
            <TTUIButton rounded="full" w="45px" h="45px">
              <FaCheck />
            </TTUIButton>
            <TTUIButton
              colorScheme="secondary"
              rounded="full"
              w="45px"
              h="45px"
            >
              <FaHeart />
            </TTUIButton>
            <TTUIButton colorScheme="warning" rounded="full" w="45px" h="45px">
              <FaBell />
            </TTUIButton>
            <TTUIButton colorScheme="info" rounded="full" w="45px" h="45px">
              <BiUser />
            </TTUIButton>
            <TTUIButton colorScheme="danger" rounded="full" w="45px" h="45px">
              <FaTimes />
            </TTUIButton>
            <TTUIButton colorScheme="light" rounded="full" w="45px" h="45px">
              <FaBookmark />
            </TTUIButton>
            <TTUIButton colorScheme="dark" rounded="full" w="45px" h="45px">
              <FaSearch />
            </TTUIButton>
          </Flex>
        </Card>

        {/* rounded outline */}
        <Card my="2rem" p="1rem">
          <Heading size="sm" my="1rem">
            Rounded Outline
          </Heading>

          <Flex gap={4} flexWrap="wrap">
            <TTUIButton rounded="full" w="45px" h="45px" variant="outline">
              <FaCheck />
            </TTUIButton>
            <TTUIButton
              colorScheme="secondary"
              rounded="full"
              w="45px"
              h="45px"
              variant="outline"
            >
              <FaHeart />
            </TTUIButton>
            <TTUIButton
              colorScheme="warning"
              rounded="full"
              w="45px"
              h="45px"
              variant="outline"
            >
              <FaBell />
            </TTUIButton>
            <TTUIButton
              colorScheme="info"
              rounded="full"
              w="45px"
              h="45px"
              variant="outline"
            >
              <BiUser />
            </TTUIButton>
            <TTUIButton
              colorScheme="danger"
              rounded="full"
              w="45px"
              h="45px"
              variant="outline"
            >
              <FaTimes />
            </TTUIButton>
            <TTUIButton
              colorScheme="light"
              rounded="full"
              w="45px"
              h="45px"
              variant="outline"
            >
              <FaBookmark />
            </TTUIButton>
            <TTUIButton
              colorScheme="dark"
              rounded="full"
              w="45px"
              h="45px"
              variant="outline"
            >
              <FaSearch />
            </TTUIButton>
          </Flex>
        </Card>
      </GridItem>
    </Grid>
  );
};

export default ButtonsVariantsPage;
