import { Badge, Card, Flex, Heading, useColorMode } from '@chakra-ui/react';
import { bgColors } from '../../colors';

export const Default = () => {
  const { colorMode } = useColorMode();

  return (
    <Card my="1rem" p="1rem">
      <Heading size="sm" my="1rem">
        Default
      </Heading>
      <Flex gap={4}>
        <Badge
          variant="solid"
          bgColor={bgColors.primary[colorMode]}
          color="brand.dark"
        >
          1
        </Badge>
        <Badge
          variant="solid"
          bgColor={bgColors.secondary[colorMode]}
          color="brand.dark"
        >
          2
        </Badge>
        <Badge
          variant="solid"
          bgColor={bgColors.warning[colorMode]}
          color="brand.dark"
        >
          3
        </Badge>
        <Badge
          variant="solid"
          bgColor={bgColors.info[colorMode]}
          color="brand.dark"
        >
          4
        </Badge>
        <Badge
          variant="solid"
          bgColor={bgColors.light[colorMode]}
          color="brand.dark"
        >
          5
        </Badge>
        <Badge
          variant="solid"
          bgColor={bgColors.danger[colorMode]}
          color="brand.white"
        >
          6
        </Badge>
        <Badge
          variant="solid"
          bgColor={bgColors.dark[colorMode]}
          color="brand.white"
        >
          7
        </Badge>
        <Badge
          variant="solid"
          bgColor={bgColors.white[colorMode]}
          color="brand.dark"
        >
          8
        </Badge>
      </Flex>
    </Card>
  );
};
