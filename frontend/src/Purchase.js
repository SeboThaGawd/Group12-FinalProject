import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
    Flex,
  VStack,
  Code,
  Button,
  Spacer,  
  Stack,
  Select,
  Grid,
  theme,
  Input,
} from '@chakra-ui/react';
import axios from 'axios';

function Purchase() {

  const [option, setOption] = useState("");
  const [amt, setAmt] = useState(0)
  const date = new Date();

  function changeAmt(val) {
    setAmt(val.target.value)
  }

  return (
    <ChakraProvider theme={theme}>
      <Box background="#E8E0D9" borderfontSize="xl" borderRadius="20" h='10vh'>
          <Flex pt={4}>
            <Select ml={10} color="black" onChange={(res) => setOption(res.target.value)} background='#FFFFF5' placeholder='Pick Category' width='30vw'>
                <option value='grocery'>Groceries</option>
                <option value='food'>Food/ Bev</option>
                <option value='clothes'>Clothing and retail</option>
                <option value='rec'>Recreational</option>
                <option value='other'>other</option>
            </Select>
            <Text ml={10} mr={10} mt={2} color = "#9F7E69" fontWeight="bold" onChange = {(res) => setAmt(res.target.value)}>Please input Amount</Text>
            <Input type="text" color="black" onChange={changeAmt} background = '#FFFFF5' width="30vw"></Input>
            <Button ml={10} color="black" background="#D7FCD4"lp={4} onClick={() => {
              if (option != "" && amt > 0) {
                console.log(localStorage.getItem('token'))
                axios.put("http://localhost:4000/budget/add", {"Amount": amt, "Category": option}, {headers : {token: localStorage.getItem('token')}})
                .then(res => (console.log(res)))
                .catch(error => (console.log(error)))
            }}}>Add!</Button>
            <Text color = "#9F7E69" fontWeight="bold"ml = {20} mt={2}>Budgets</Text>
        </Flex>
      </Box>
    </ChakraProvider>
  );

}

export default Purchase;
