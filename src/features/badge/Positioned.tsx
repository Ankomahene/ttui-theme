import {
  Badge,
  Card,
  Heading,
  Flex,
  useColorMode,
  Box,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { bgColors } from '../../colors';
import { BiBell, BiCalendar, BiCart, BiEnvelope } from 'react-icons/bi';
import { ReactNode } from 'react';

export const Positioned = () => {
  const { colorMode } = useColorMode();
  return (
    <Card my="1rem" p="1rem">
      <Heading size="sm" my="1rem">
        Positioned Badge
      </Heading>
      <Flex gap={4}>
        <IconWithBadge
          icon={<BiBell />}
          bgColor={bgColors.secondary[colorMode]}
        />
        <IconWithBadge
          icon={<BiCalendar />}
          bgColor={bgColors.primary[colorMode]}
        />
        <IconWithBadge
          icon={<BiEnvelope />}
          bgColor={bgColors.warning[colorMode]}
        />
        <IconWithBadge
          icon={<BiCart />}
          bgColor={bgColors.danger[colorMode]}
          color="white"
        />
      </Flex>
    </Card>
  );
};

interface Props {
  bgColor: string;
  color?: string;
  icon: ReactNode;
}
const IconWithBadge = ({ bgColor, color, icon }: Props) => {
  return (
    <Box pos="relative" color={useColorModeValue('gray.600', 'gray.400')}>
      <Text fontSize="2rem">{icon}</Text>
      <Badge
        rounded="full"
        pos="absolute"
        top="-5px"
        right="-2px"
        fontSize="10px"
        bgColor={bgColor}
        color={color || 'black'}
      >
        1
      </Badge>
    </Box>
  );
};
