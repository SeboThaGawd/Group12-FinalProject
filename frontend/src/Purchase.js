import React, { useState } from 'react';
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
import axios from 'axios';

function Purchase() {

  const [option, setOption] = useState("");
  const [amt, setAmt] = useState(0)
  const date = new Date();

  function changeAmt(val) {
    setAmt(val.target.value)
  }

  return (
    <ChakraProvider theme={theme}>
      <Box background="#E8E0D9" borderfontSize="xl" borderRadius="20" h='10vh'>
          <Flex pt={4}>
            <Select ml={10} color="black" onChange={(res) => setOption(res.target.value)} background='#FFFFF5' placeholder='Pick Category' width='30vw'>
                <option value='option1'>Grocery</option>
                <option value='option2'>Food/Bev</option>
                <option value='option3'>Online Purchases</option>
                <option value='option3'>Recreation</option>
                <option value='option3'>Transportation</option>
                <option value='option3'>Other</option>
            </Select>
            <Text ml={10} mr={10} onChange = {(res) => setAmt(res.target.value)}>Please input Amount</Text>
            <Input type="text" color="black" onChange={changeAmt} background = '#FFFFF5' width="30vw"></Input>
            <Button ml={10} color="black" background="#D7FCD4"lp={4} onClick={() => {
              if (option != "" && amt > 0) {
                axios.post("http://localhost:4000/budget/add", {"Amount": amt, "Category": option})
                .then(res => (console.log(res)))
                .catch(error => (console.log(error)))
            }}}>Add!</Button>
        </Flex>
      </Box>
    </ChakraProvider>
  );

}

export default Purchase;
