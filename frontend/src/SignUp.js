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
import Mainpage from './Mainpage';
import axios from 'axios';

function SignUp() {

  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const [budget, setBudget] = useState(0)

  function username(val) {
    setUser(val.target.value)
  }

  function password(val) {
    setPass(val.target.value)
  }

  function budge(val) {
      setBudget(val.target.value) 
  }

    return (
        <ChakraProvider theme={theme}>
          <h1>FGHJK</h1>
          <Box color ="white" textAlign="center" fontSize="xl">
            <Flex flexShrink={0} flexdir="row">
                <Stack flexdir="column" position="relative">
                    <h1 >Sign Up and Save!!</h1>
                    <h1>{user}</h1>
                    <h2>{pass}</h2>
                    <Box background = "#218F80" textAlign="center" fontSize="xl">
                    <input type="text" onChange={username}></input>
                    <h1></h1>
                    <button>signup</button>
                    <h1></h1>
                    <input type="text" onChange={password}></input>
                    <button onClick={() => {
                        const url = "http://localhost:4000/signup";
                        if (user != "" && pass != "") {
                          axios.post(url, {"name":user, "password": pass, "budget": budget})
                          .then(response => {
                          console.log(response)
                          }).catch(error => console.log("There was an error"))
                        }
                    }}>LOGIN</button>
                    <input type="text" onChange={budge}></input>
                    </Box>   
                </Stack>  
            </Flex>
          </Box>
        </ChakraProvider>
      );
    }

export default SignUp;

