import { Badge, Card, Flex, Heading, useColorMode } from '@chakra-ui/react';
import { bgColors } from '../../colors';

const common = {
  variant: 'solid',
  rounded: 'full',
  color: 'brand.dark',
  fontSize: '10px',
};

export const Rounded = () => {
  const { colorMode } = useColorMode();
  return (
    <Card my="1rem" p="1rem">
      <Heading size="sm" my="1rem">
        Rounded
      </Heading>
      <Flex gap={4}>
        <Badge bgColor={bgColors.primary[colorMode]} {...common}>
          1
        </Badge>
        <Badge bgColor={bgColors.secondary[colorMode]} {...common}>
          2
        </Badge>
        <Badge bgColor={bgColors.warning[colorMode]} {...common}>
          3
        </Badge>
        <Badge bgColor={bgColors.info[colorMode]} {...common}>
          4
        </Badge>
        <Badge bgColor={bgColors.light[colorMode]} {...common}>
          5
        </Badge>
        <Badge bgColor={bgColors.danger[colorMode]} {...common} color="white">
          6
        </Badge>
        <Badge bgColor={bgColors.dark[colorMode]} {...common} color="white">
          7
        </Badge>
        <Badge bgColor={bgColors.white[colorMode]} {...common}>
          100
        </Badge>
      </Flex>
    </Card>
  );
};
