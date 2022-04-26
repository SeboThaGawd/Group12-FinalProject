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
  Input,
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
import SetBudget from './SetBudget';


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


  return (

    <ChakraProvider theme={theme}>
   
         <Button  background="#E8E0D9" borderRadius="20" color="#9F7E69" fontSize="25px" height="10vh" onClick={onOpen}>SignUp!</Button>
   
         <Modal isOpen={isOpen} onClose={onClose}>
           <ModalOverlay />
           <ModalContent background='#ffffff'>
             <ModalHeader color='black'>Welcome!</ModalHeader>
             <ModalCloseButton />
             <ModalBody>
              <Stack>
                <Flex justifyContent="space-between">
                  <Text color='black'>Username</Text>
                  <Input h='4vh' ml={6} color ="black" borderColor='black'type="text" onChange={username}></Input>
              </Flex>
              <Flex>
                  <Text color='black' mt={1}>Password</Text>
                  <Input h='4vh'  color="black" borderColor='black' ml={7} type="text" onChange={password}></Input>
              </Flex>
              </Stack>  
             </ModalBody>
   
             <ModalFooter>
               <Button color='#456765' colorScheme='ghost' mr={3} onClick={onClose}>
                 Cancel
               </Button>
               <Button onClick ={res => {
                 axios.post("http://localhost:4000/user/signup", {"username": username, "password": pass})
                 .then(res => console.log(res))
                 .catch(error => console.log(error))
               }
               }
                 background="none"><SetBudget>
             </SetBudget></Button> 
             </ModalFooter>
           </ModalContent>
         </Modal>
   
         </ChakraProvider>
   
     );
   }

export default SignUp;


