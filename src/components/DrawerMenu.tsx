/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Menu } from './Menu';

export const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>();

  return (
    <>
      <Button
        display={{ base: 'inline-block', md: 'none' }}
        ref={btnRef}
        onClick={onOpen}
        size="sm"
        mr="1rem"
      >
        <RxHamburgerMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Components</DrawerHeader>

          <DrawerBody>
            <Menu onSelect={onClose} />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
