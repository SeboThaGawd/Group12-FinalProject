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

  const [groc, setGroc] = useState(0)
  const [food, setFood] = useState(0)
  const [clothes, setClothes] = useState(0)
  const [rec, setRec] = useState(0)
  const [other, setOther] = useState(0)
  const [sum, setSum] = useState(0)


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


  function grocVal(val) {
    console.log(val.target.value)
    if (val == null) {
        val.target.value = 0;
    }
    setGroc(val.target.value)
    sumVal()
  }

  function foodVal(val) {
    console.log(val.target.value)
    if (val == null) {
        val.target.value = 0;
    }
    setFood(val.target.value)
    sumVal()
  }

  function clothesVal(val) {
    console.log(val.target.value)
    if (val == null) {
        val.target.value = 0;
    }
    setClothes(val.target.value)
    sumVal()
  }

  function recVal(val) {
    console.log(val.target.value)
    if (val == null) {
        val.target.value = 0;
    }
    setRec(val.target.value)
    sumVal()
  }

  function otherVal(val) {
    console.log(val.target.value)
    if (val == null) {
        val.target.value = 0;
    }
    setOther(val.target.value)
    sumVal()
  }

  function sumVal() {
      setSum(parseInt(rent) + parseInt(groc) + parseInt(food) +  parseInt(clothes) + parseInt(rec) + parseInt(other))
  }


  function close(to) {
    toke = to
    onClose()
  }

  function errr() {
    console.log("There was an error")
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
              <Flex pt={6} width = "18vw" justifyContent="space-between">
                <Text color='black'>Groceries</Text>
                <Input ml={7} h='4vh' borderColor='black' type="text" onChange={grocVal}></Input>
              </Flex>
              <Flex width = "18vw" justifyContent="space-between">
                <Text color='black'>Food/Bev</Text>
                <Input ml={7} h='4vh' borderColor='black' type="text" onChange={foodVal}></Input>
              </Flex>
              <Flex width = "18vw" justifyContent="space-between">
                <Text color='black'>Clothes</Text>
                <Input ml={10} h='4vh' borderColor='black' type="text" onChange={clothesVal}></Input>
              </Flex>
              <Flex width = "18vw" justifyContent="space-between">
                <Text color='black'>Recreation</Text>
                <Input ml={6} h='4vh' borderColor='black' type="text" onChange={recVal}></Input>
              </Flex>
              <Flex width = "18vw" justifyContent="space-between">
                <Text color='black' >Other</Text>
                <Input ml={14} h='4vh'  borderColor='black' type="text" onChange={otherVal}></Input>
              </Flex>
                  <Text color="black">{sum}</Text>
              </Stack>  
             </ModalBody>
   
             <ModalFooter>
               <Button color='#456765' colorScheme='ghost' mr={3} onClick={onClose}>
                 Cancel
               </Button>
               <Button onClick ={res => {
                 axios.post("http://localhost:4000/user/signup", {"Username": username, "Password": pass, 
                 "budgetAmounts": [groc, food, clothes, rec, other]})
                 .then(res => console.log(res))
                 .catch(error => console.log(error))
               }
               }
                 background="#E8E0D9" color="black">Sign Up!</Button> 
             </ModalFooter>
           </ModalContent>
         </Modal>
   
         </ChakraProvider>
   
     );
   }
   
export default SignUp;


