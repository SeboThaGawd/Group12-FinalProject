import React, { useState, useEffect, useRef } from 'react';
import {
  ChakraProvider,
  theme,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Input,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import axios from 'axios';
import {BrowserRouter as Router, Navigate, useNavigate, NavLink, Route, Routes} from 'react-router-dom';


function Login() {

  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const [valid, setValid] = useState(false)
  let end = ""

  let navigate = useNavigate();

  function username(val) {
    setUser(val.target.value)
  }

  function password(val) {
    setPass(val.target.value)
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  const toke = null

  function close(to) {
    onClose()
  }

  function errr() {
    console.log("There was an error")
    onClose()
  }



  return (

    <ChakraProvider theme={theme}>
   
         <Button background="#CDE0D0" borderRadius="20" color="#9F7E69" fontSize="25px" height="10vh" onClick={onOpen}>Welcome Back!</Button>
   
         <Modal color="black" isOpen={isOpen} onClose={onClose}>
           <ModalOverlay />
           <ModalContent color="black" background='#ffffff'>
             <ModalHeader>Welcome Back!</ModalHeader>
             <ModalCloseButton />
             <ModalBody>
              <Stack>
                <Flex justifyContent="space-between">
                  <Text>Username</Text>
                  <Input h='4vh' borderColor="black" ml={6} border="solid" type="username" onChange={username}></Input>
              </Flex>
              <Flex>
                  <Text mt={1}>Password</Text>
                  <Input h='4vh' ml={7} borderColor="black" type="password" onChange={password}></Input>
              </Flex>
              </Stack>  
             </ModalBody>
   
             <ModalFooter>
               <Button color='#456765' colorScheme='ghost' mr={3} onClick={onClose}>
                 Cancel
               </Button>
          
               <Button background='#CDE0D0' onClick={
                 () => {
                      const url = "http://localhost:4000/user/login"
                      setValid(false)
                      if (user != "" && pass != "") {
                        axios.post(url, {"username":user, "password": pass})
                        .then(response => {
                          localStorage.setItem('token', response.data.token);
                          console.log("LOGIN TOKEN", localStorage)
                          navigate('/profile')

                        }).catch(error => {console.log(error)});
                      }
                  }
               }>Login!</Button>
             </ModalFooter>
           </ModalContent>
         </Modal>
         </ChakraProvider>
   
     );
   }

export default Login;


