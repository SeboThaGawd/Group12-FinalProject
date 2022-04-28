import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Flex,
  Spacer,  
  Stack,
  Grid,
} from '@chakra-ui/react';
import SignUp from './SignUp';
import Login from './Login';


function Mainpage() {

  return (
    <ChakraProvider>
      <Box background="#218F80" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Flex width="85vw">
          <Stack height="60vh" mt={75}>
          <Spacer/>
          <Text pl={20} color = "white" fontWeight='500' fontSize="70px" fontFamily='Hind' fontStyle='normal'>MAKE CENTS</Text>
          <Text pl={20} color = "white" fontSize="30px">Don't budge your lifestyle, budget!</Text>
          <Text  pl={18} color = "#E8E0D9" fontSize="20px">We all love to spend $$, but no one
            learns how to save. As a budgeting platform, 
            we aim to provide the best budgeting 
            recommendations for users to achieve a 
            healthy balance of spending vs saving.</Text>
            <Spacer/>
          <Login>Login</Login>
          <SignUp >SignUp</SignUp>
          </Stack>
          <img src="budget.png" alt="our bugeting app" position="absolute" width="50%"></img>
          </Flex>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default Mainpage;
