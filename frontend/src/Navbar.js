import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  IconButton,
  Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { IconBase } from 'react-icons';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom';

function Navbar() {
    return (
      <ChakraProvider theme={theme}>
          <Flex flexDir="row" alignContent="right" background="#E8E0D9" alignItems="self-end" color="#56787">
              <Router>
                <Button background = "none" _hover ={{color : "#DCCC0"}}><NavLink to='/' width={100}
                    onClick ={() => 10}
                    >Home</NavLink></Button>
                <Button background = "none" _hover ={{color : "#DACCC0"}}><NavLink to='/profile' width={100}
                    onClick ={() => 10}
                    >Profile</NavLink></Button>
                <Button background = "none" _hover ={{color : "#DACCC0"}}><NavLink to='/login' width={100}
                    onClick ={() => 10}
                    >Login</NavLink></Button>
              </Router>
          </Flex>
     </ChakraProvider>
    );
  }
  
  export default Navbar;