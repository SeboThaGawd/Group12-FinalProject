import React from 'react';
import {
  ChakraProvider,
  Button,
  Box,
  Text,
  Flex,
  Center,
  Grid,
  GridItem,
  Spacer,
  theme,
  Input,
} from '@chakra-ui/react';
import axios from 'axios';

const Budget = (category, name, total, cap, under) => {

    let len = 100
    let remainder = ""
    let firstPercent = 50
    let secondPercent = 50
    let color = ""

    if (category.under) {
            remainder = "#D7FCD4"
            firstPercent = category.total/category.cap * 100
            color = "#07E8BD "
    } else {
            remainder = "#9F7E69"
            firstPercent = category.cap/category.total * 100
            color = "#fa6666"
    }
    secondPercent = (100 - firstPercent) + '%'
    firstPercent = (firstPercent) + '%'

    function newBud(val) {
      console.log("VAL", val.target.value)
      axios.put("http://localhost:4000/budget/edit", {"newBudget": val.target.value, "category": cat}, {headers: {token: localStorage.getItem('token')}})
      .then(res => console.log(res))
      .catch(error => console.log(error))
    }

    const first = firstPercent
    const second = secondPercent
    const remain = remainder
    const tot = category.total
    const cat = category.name
    const bud = category.cap

  return (
      
    <ChakraProvider theme={theme}>
        <Box h='140px' bg='#E8E0D9' borderRadius="20">
            <Grid gap={6} br="25%" w='95%'>
                <Text color = "#9F7E69" fontWeight="bold" pl={7} pt={5}>{cat}</Text>
                <GridItem pl={12} w='100%' h='10' bg='none'>
                    <Flex color='w' w='100%' h='100%'>
                        <Center borderLeftRadius="10" w={first} bg='#A7E8BD'/>
                        <Center borderRightRadius="10" w={second} bg={remain}/>
                        <Text mr={20} color={color} fontWeight="bold" pl={5} pt={1}>{tot}</Text>
                        <Input onKeyPress={(e) => e.key === 'Enter' && newBud(e)} _placeholder={{ color: "#9F7E69"}} placeholder={bud} color="#9F7E69" fontWeight="bold" border="none" w="20" type="text"></Input>
                    </Flex>            
                </GridItem>
            </Grid>
        </Box>
    </ChakraProvider>
  );

}

export default Budget;

