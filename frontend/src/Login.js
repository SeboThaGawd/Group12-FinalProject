import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
    Flex,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navbar from './Navbar';
import {BrowserRouter as Router, NavLink, resolvePath, Route, Routes} from 'react-router-dom';
import Mainpage from './Mainpage';
import Loginpage from './LoginPage';
import { response } from 'express';

function LogIn() {

  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  function getUser() {
    if (user != "" && pass != "") {
      axios.POST(url, {"name":user, "password": password})
      .then(response => {
      console.log(response)
      }).catch(error => console.log("There was an error"))
    }
  }

    return (
      <ChakraProvider theme={theme}>
      <Box background = "#218F80" textAlign="center" fontSize="xl">
        <h2>Log Into Your Account</h2>
       <input type="text" onChange={setUser(val.target.value)}></input>
        <button>Log In</button>
        <input type="text" onChange={setPass(val.target.value)}></input>
        <button onClick={getUser()}>Password</button>
        </Box>
        </ChakraProvider>
    );
  }
  
  export default LogIn;

