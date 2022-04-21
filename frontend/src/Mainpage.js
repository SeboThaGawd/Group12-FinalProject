import {React, useState, } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Stack,
    Flex,
  Grid,
  theme,
  flexbox,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  background,
  color,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navbar from './Navbar';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom';


function Mainpage() {

  return (
    <ChakraProvider theme={theme}>
      <Box background = "#218F80" textAlign="center" fontSize="xl">
        <Flex flexShrink={0} flexdir="row">
            <Stack flexdir="column" position="relative">
                <h1 >Make Cents</h1>
                <h2>Don’t budge your lifestyle, budget</h2>
                <Button>hjhj</Button>
            </Stack>  
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default Mainpage;
