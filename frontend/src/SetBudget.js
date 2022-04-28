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
  Input,
  Switch,
  VStack,
  Textarea,
  IconButton,
  useDisclosure,
  HStack
} from '@chakra-ui/react';
import axios from 'axios';
import { animate } from 'framer-motion';


function SetBudget() {

  const toke = null

  const [rent, setRent] = useState(0)
  const [groc, setGroc] = useState(0)
  const [food, setFood] = useState(0)
  const [clothes, setClothes] = useState(0)
  const [rec, setRec] = useState(0)
  const [other, setOther] = useState(0)
  const [sum, setSum] = useState(0)

  function rentVal(val) {
    console.log(val.target.value)
    if (val == null) {   
        val.target.value = 0;
    }
    setRent(val.target.value)
    sumVal()
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

  const { isOpen, onOpen, onClose } = useDisclosure()


  function close(to) {
    toke = to
    onClose()
  }

  function errr() {
    console.log("There was an error")
  }




  return (

    <ChakraProvider theme={theme}>
   
         <Button  background="#E8E0D9"  borderRadius="20" color="#9F7E69" fontSize="25px" height="5vh" onClick={onOpen}>Next</Button>
   
         <Modal isOpen={isOpen} onClose={onClose}>
           <ModalOverlay />
           <ModalContent background="#FFFFFF" height="75vh">
             <ModalHeader>Set Up Your Budget</ModalHeader>
             <ModalCloseButton />
             <ModalBody>
              <Stack>
                  <Flex width = "18vw" justifyContent="space-between">
                    <Text color='black'>Rent</Text>
                    <Input borderColor='black' type="text" onChange={rentVal}></Input>
                  </Flex>
                  <Flex width = "18vw" justifyContent="space-between">
                    <Text color='black'>Groceries</Text>
                    <Input borderColor='black' type="text" onChange={grocVal}></Input>
                  </Flex>
                  <Flex width = "18vw" justifyContent="space-between">
                    <Text color='black'>Food/Bev</Text>
                    <Input borderColor='black' type="text" onChange={foodVal}></Input>
                  </Flex>
                  <Flex width = "18vw" justifyContent="space-between">
                    <Text color='black'>Clothes</Text>
                    <Input borderColor='black' type="text" onChange={clothesVal}></Input>
                  </Flex>
                  <Flex width = "18vw" justifyContent="space-between">
                    <Text color='black'>Recreation</Text>
                    <Input borderColor='black' type="text" onChange={recVal}></Input>
                  </Flex>
                  <Flex width = "18vw" justifyContent="space-between">
                    <Text color='black' >Other</Text>
                    <Input borderColor='black' type="text" onChange={otherVal}></Input>
                  </Flex>
                  <Text color="black">{sum}</Text>
              </Stack>  
             </ModalBody>
   
             <ModalFooter>
               <Button color='#456765' colorScheme='ghost' mr={3} onClick={onClose}>
                 Cancel
               </Button>
               <Button variant='blue' onClick={
                 () => {
                      const url = "http://localhost:4000/user/signup"
                        axios.post(url, {"rent": rent, "groc": groc, "food": food, 
                        "clothes":clothes, "rec": rec, "other": other, "total": sum})
                        .then(response => {
                        close(response.token)
                        }).catch(error => {errr()})
                  }
               }>Finish!</Button>  
             </ModalFooter>
           </ModalContent>
         </Modal>
   
         </ChakraProvider>
   
     );
   }

export default SetBudget;
