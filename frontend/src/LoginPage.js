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
                <Stack flexdir="column" position="relative">
                    <h1 >make Cents</h1>
                    <h1>{user}</h1>
                    <h2>{pass}</h2>
                    <Box background = "#218F80" textAlign="center" fontSize="xl">
                    <h2>Log Into Your Account</h2>
                    <input type="text" onChange={username}></input>
                    <h1></h1>
                    <button>Log In</button>
                    <h1></h1>
                    <input type="text" onChange={password}></input>
                    <button onClick={() => {
                        const url = "http://localhost:4000/user/login";
                        if (user != "" && pass != "") {
                          axios.post(url, {"name":user, "password": pass})
                          .then(response => {
                          console.log(response)
                          }).catch(error => console.log("There was an error"))
                        }
                    }}>LOGIN</button>
                    <NavLink to='newuser'>ghjk</NavLink>
                    </Box>
                    <Button>Sign Up!</Button>      
                </Stack>  
            </Flex>
          </Box>
        </ChakraProvider>
      );
    }

export default Loginpage;

