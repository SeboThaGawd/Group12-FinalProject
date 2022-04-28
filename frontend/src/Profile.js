import React, { useState, useEffect, useRef } from 'react';
import {
  ChakraProvider,
  theme,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import axios from 'axios';
import { animate } from 'framer-motion';



function Profile() {

    const [amt, setAmt] = useState(0)
    const [category, setCategory] = useState("");


    function changeAmt(val) {
        setAmt(val)
    }

    function changeCategory(val) {
        if (val == 1) {
            setCategory("Rent")
        }
    }

    function submit() {
        const url = "http:"
        axios.post(url, {"category":category, "Amount": amt})
 
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

  return (

 <ChakraProvider theme={theme}>

      <Button onClick={onOpen}>Get Started!</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign up and Save!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              
          </ModalBody>

          <ModalFooter>
            <Button color='#456765' colorScheme='ghost' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variant='ghost'>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      </ChakraProvider>

  )
}

export default Profile;


{/* <ChakraProvider theme={theme}>
<input type="text" onChange={changeAmt}></input>
<Menu>
    <MenuButton as={Button}>
        Select
      </MenuButton>
      <MenuList>
          <MenuItem onClick={() => {setCategory("Rent")}}>Rent</MenuItem>
          <MenuItem onClick={() => {setCategory("Grocery")}}>Grocery</MenuItem>
          <MenuItem onClick={() => {setCategory("Food/Bev")}}>Food/Bev</MenuItem>
          <MenuItem onClick={() => {setCategory("Recreation")}}>Recreation</MenuItem>
          <MenuItem onClick={() => {setCategory("Clothes")}}>Clothes</MenuItem>
          <MenuItem onClick={() => {setCategory("Other")}}>Other</MenuItem>
      </MenuList>
  </Menu>
  <Button onSubmit={submit}>Submit</Button>
  </ChakraProvider> */}
