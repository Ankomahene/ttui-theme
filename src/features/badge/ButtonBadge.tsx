import {
  Badge,
  Card,
  Flex,
  Heading,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { BiEnvelope } from 'react-icons/bi';
import { bgColors } from '../../colors';
import { TTUIButton } from '../../components/TTUIButton/TTUIButton';

export const ButtonBadge = () => {
  const { colorMode } = useColorMode();
  return (
    <Card my="1rem" p="1rem">
      <Heading size="sm" my="1rem">
        Button Badge
      </Heading>
      <Flex gap={4}>
        <TTUIButton as={Flex} alignItems="center" gap="5px">
          <Text>Emails</Text>
          <Badge
            rounded="full"
            bgColor={bgColors.dark[colorMode]}
            color="brand.white"
            fontSize="10px"
          >
            5
          </Badge>
        </TTUIButton>

        <TTUIButton
          as={Flex}
          variant="outline"
          colorScheme="danger"
          alignItems="center"
          gap="5px"
        >
          <BiEnvelope />
          <Text>Messages</Text>
          <Badge
            rounded="full"
            bgColor={bgColors.danger[colorMode]}
            color="brand.white"
            fontSize="10px"
          >
            5
          </Badge>
        </TTUIButton>
      </Flex>
    </Card>
  );
};
