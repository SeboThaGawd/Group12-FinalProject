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
import Navbar from './Navbar';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom';
import SignUp from './SignUp';
import './Mainpage.css';


function Mainpage() {

  return (
    <ChakraProvider>
      <Box background = "#218F80" textAlign="center" fontSize="xl">
        <Flex flexShrink={0} flexdir="row">
            <Stack flexdir="column" position="relative">
                <Text>Make Cents</Text>
                <Text>Don’t budge your lifestyle, budget</Text>
                <SignUp/>
            </Stack>  
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default Mainpage;
