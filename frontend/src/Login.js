import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  ChakraProvider,
  theme,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Input,
  ModalBody,
  ModalCloseButton,
  MenuCommand,
  MenuDivider,
  Button,
  Flex,
  Link,
  Code,
  Grid,
  Stack,
  Text,
  chakra,
  Box,
  Switch,
  VStack,
  IconButton,
  useDisclosure,
  HStack
} from '@chakra-ui/react';
import axios from 'axios';
import { animate } from 'framer-motion';


function Login() {

  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  function username(val) {
    setUser(val.target.value)
  }

  function password(val) {
    setPass(val.target.value)
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  const toke = null

  function close(to) {
    toke = to
    onClose()
  }

  function errr() {
    console.log("There was an error")
   // onClose()
  }



  return (

    <ChakraProvider theme={theme}>
   
         <Button background="#CDE0D0" borderRadius="20" color="#9F7E69" fontSize="25px" height="10vh" onClick={onOpen}>Welcome Back!</Button>
   
         <Modal isOpen={isOpen} onClose={onClose}>
           <ModalOverlay />
           <ModalContent background='#ffffff'>
             <ModalHeader>Welcome Back!</ModalHeader>
             <ModalCloseButton />
             <ModalBody>
              <Stack>
                <Flex justifyContent="space-between">
                  <Text>Username</Text>
                  <Input h='4vh' ml={6} border="solid" type="text" onChange={username}></Input>
              </Flex>
              <Flex>
                  <Text mt={1}>Password</Text>
                  <Input h='4vh' ml={7} type="text" onChange={password}></Input>
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
                      if (user != "" && pass != "") {
                        axios.post(url, {"name":user, "password": pass})
                        .then(response => {
                        close(response.token)
                        }).catch(error => {errr()})
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


