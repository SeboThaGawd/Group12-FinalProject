import { React, useState} from 'react';
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
  Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navbar from './Navbar';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom';
import axios from 'axios';
import Purchase from './Purchase';
function Loginpage() {

  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  function username(val) {
    setUser(val.target.value)
  }

  function password(val) {
    setPass(val.target.value)
  }

    return (
        <ChakraProvider theme={theme}>
          <Box color ="white" textAlign="center" fontSize="xl">
            <Flex flexShrink={0} flexdir="row">
               <Purchase/>
            </Flex>
          </Box>
        </ChakraProvider>
      );
    }

export default Loginpage;

