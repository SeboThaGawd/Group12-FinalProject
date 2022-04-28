import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
    Flex,
  Center,
  Grid,
  GridItem,
  theme,
} from '@chakra-ui/react';

const Budget = (category, total, cap, under) => {


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

    const first = firstPercent
    const second = secondPercent
    const remain = remainder
    const tot = category.total


  return (
      
    <ChakraProvider theme={theme}>
        <Box h='130px' bg='#E8E0D9' borderRadius="20">
            <Grid gap={6} br="25%" w='80%'>
                <Text pl={7} pt={5}>Category</Text>
                <GridItem pl={12} w='100%' h='10' bg='none'>
                    <Flex color='w' w='100%' h='100%'>
                        <Center borderLeftRadius="10" w={first} bg='#A7E8BD'/>
                        <Center borderRightRadius="10" w={second} bg={remain}/>
                        <Text color={color} fontWeight="bold" pl={5} pt={1}>{tot}</Text>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    </ChakraProvider>
  );

}

export default Budget;

