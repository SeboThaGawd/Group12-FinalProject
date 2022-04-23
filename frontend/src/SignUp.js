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


function SignUp() {

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
   
         <Button onClick={onOpen}>Get Started!</Button>
   
         <Modal isOpen={isOpen} onClose={onClose}>
           <ModalOverlay />
           <ModalContent>
             <ModalHeader>Sign up and Save!</ModalHeader>
             <ModalCloseButton />
             <ModalBody>
              <Stack>
                <Flex justifyContent="space-between">
                  <h2>Username</h2>
                  <input border="solid" background="black" type="text" onChange={username}></input>
              </Flex>
              <Flex>
                  <h2>Password</h2>
                  <input type="text" onChange={password}></input>
              </Flex>
              </Stack>  
             </ModalBody>
   
             <ModalFooter>
               <Button color='#456765' colorScheme='ghost' mr={3} onClick={onClose}>
                 Cancel
               </Button>
               <Button variant='blue' onClick={
                 () => {
                      const url = "http://localhost:4000/user/signup"
                      if (user != "" && pass != "") {
                        axios.post(url, {"name":user, "password": pass})
                        .then(response => {
                        close(response.token)
                        }).catch(error => {errr()})
                      }
                  }
               }>Submit</Button>  
             </ModalFooter>
           </ModalContent>
         </Modal>
   
         </ChakraProvider>
   
     );
   }

export default SignUp;


