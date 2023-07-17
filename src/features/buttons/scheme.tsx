import { Box, Card, Flex, Heading } from '@chakra-ui/react';
import { TTUIButton } from '../../components/TTUIButton/TTUIButton';

const ButtonsSchemePage = () => {
  return (
    <Box>
      {/* primary */}

      <Card my="2rem" p="1rem">
        <Heading size="sm" my="1rem">
          Primary
        </Heading>

        <Flex gap={4}>
          <TTUIButton>Default</TTUIButton>
          <TTUIButton variant="outline" borderStyle="dashed">
            Outline
          </TTUIButton>
          <TTUIButton variant="ghost">Ghost</TTUIButton>
          <TTUIButton variant="link">Link</TTUIButton>
          <TTUIButton disabled={true}>Disabled</TTUIButton>
        </Flex>
      </Card>

      {/* secondary */}
      <Card my="2rem" p="1rem">
        <Heading size="sm" my="1rem">
          Secondary
        </Heading>

        <Flex gap={4}>
          <TTUIButton colorScheme="secondary">Default</TTUIButton>
          <TTUIButton colorScheme="secondary" variant="outline">
            Outline
          </TTUIButton>
          <TTUIButton colorScheme="secondary" variant="ghost">
            ghost
          </TTUIButton>
          <TTUIButton colorScheme="secondary" variant="link">
            Link
          </TTUIButton>
          <TTUIButton colorScheme="secondary" disabled={true}>
            Disabled
          </TTUIButton>
        </Flex>
      </Card>

      {/* Warning */}
      <Card my="2rem" p="1rem">
        <Heading size="sm" my="1rem">
          Warning
        </Heading>

        <Flex gap={4}>
          <TTUIButton colorScheme="warning">Default</TTUIButton>
          <TTUIButton colorScheme="warning" variant="outline">
            Outline
          </TTUIButton>
          <TTUIButton colorScheme="warning" variant="ghost">
            ghost
          </TTUIButton>
          <TTUIButton colorScheme="warning" variant="link">
            Link
          </TTUIButton>
          <TTUIButton colorScheme="warning" disabled={true}>
            Disabled
          </TTUIButton>
        </Flex>
      </Card>

      {/* Danger */}
      <Card my="2rem" p="1rem">
        <Heading size="sm" my="1rem">
          Danger
        </Heading>

        <Flex gap={4}>
          <TTUIButton colorScheme="danger">Default</TTUIButton>
          <TTUIButton colorScheme="danger" variant="outline">
            Outline
          </TTUIButton>
          <TTUIButton colorScheme="danger" variant="ghost">
            ghost
          </TTUIButton>
          <TTUIButton colorScheme="danger" variant="link">
            Link
          </TTUIButton>
          <TTUIButton colorScheme="danger" disabled={true}>
            Disabled
          </TTUIButton>
        </Flex>
      </Card>

      {/* Info */}
      <Card my="2rem" p="1rem">
        <Heading size="sm" my="1rem">
          Info
        </Heading>

        <Flex gap={4}>
          <TTUIButton colorScheme="info">Default</TTUIButton>
          <TTUIButton colorScheme="info" variant="outline">
            Outline
          </TTUIButton>
          <TTUIButton colorScheme="info" variant="ghost">
            ghost
          </TTUIButton>
          <TTUIButton colorScheme="info" variant="link">
            Link
          </TTUIButton>
          <TTUIButton colorScheme="info" disabled={true}>
            Disabled
          </TTUIButton>
        </Flex>
      </Card>

      {/* Light */}
      <Card my="2rem" p="1rem">
        <Heading size="sm" my="1rem">
          Light
        </Heading>

        <Flex gap={4}>
          <TTUIButton colorScheme="light">Default</TTUIButton>
          <TTUIButton colorScheme="light" variant="outline">
            Outline
          </TTUIButton>
          <TTUIButton colorScheme="light" variant="ghost">
            ghost
          </TTUIButton>
          <TTUIButton colorScheme="light" variant="link">
            Link
          </TTUIButton>
          <TTUIButton colorScheme="light" disabled={true}>
            Disabled
          </TTUIButton>
        </Flex>
      </Card>

      {/* Dark */}
      <Card my="2rem" p="1rem">
        <Heading size="sm" my="1rem">
          Dark
        </Heading>

        <Flex gap={4}>
          <TTUIButton colorScheme="dark">Default</TTUIButton>
          <TTUIButton colorScheme="dark" variant="outline">
            Outline
          </TTUIButton>
          <TTUIButton colorScheme="dark" variant="ghost">
            ghost
          </TTUIButton>
          <TTUIButton colorScheme="dark" variant="link">
            Link
          </TTUIButton>
          <TTUIButton colorScheme="dark" disabled={true}>
            Disabled
          </TTUIButton>
        </Flex>
      </Card>
    </Box>
  );
};

export default ButtonsSchemePage;
