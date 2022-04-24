import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
    Flex,
  VStack,
  Code,
  Button,
  Spacer,  
  Stack,
  Select,
  Grid,
  theme,
  Input,
} from '@chakra-ui/react';
import Navbar from './Navbar';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom';
import Mainpage from './Mainpage';
import Loginpage from './LoginPage';
import SignUp from './SignUp';
import Login from './Login';
import Profile from './Profile';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'

function Purchase() {

  return (
    <ChakraProvider theme={theme}>
      <Box background="#218F80" fontSize="xl" h='20vh'>
          <Flex pt={4}>
            <Select background='#E8E0D9' placeholder='Pick Category' width='30vw'>
                <option value='option1'>Grocery</option>
                <option value='option2'>Food/Bev</option>
                <option value='option3'>Clothing</option>
                <option value='option3'>Recreation</option>
                <option value='option3'>Transportation</option>
                <option value='option3'>Other</option>
            </Select>
            <Text ml={10} mr={10}>Please input Amount</Text>
            <Input type="text" width="30vw"></Input>
        </Flex>
      </Box>
    </ChakraProvider>
  );

}

export default Purchase;
