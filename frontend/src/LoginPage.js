import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
    Flex,
  VStack,
  Code,
  Grid,
  Stack,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navbar from './Navbar';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom';
import Mainpage from './Mainpage';
import LogIn from './Login';

function Loginpage() {

    return (
        <ChakraProvider theme={theme}>
          <Box color ="white" textAlign="center" fontSize="xl">
            <Flex flexShrink={0} flexdir="row">
                <Stack flexdir="column" position="relative">
                    <h1 >make Cents</h1>
                    <LogIn/>
                    
                </Stack>  
            </Flex>
          </Box>
        </ChakraProvider>
      );
    }

export default Loginpage;
