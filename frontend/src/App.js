import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
    Flex,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navbar from './Navbar';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom';
import Mainpage from './Mainpage';
import Loginpage from './LoginPage';
import SignUp from './SignUp';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box background="#218F80" textAlign="center" fontSize="xl">
      <Router>
        <Routes>
          <Route path="" element={<Mainpage />}></Route>
          <Route path="/login" element={<Loginpage/>}></Route>
          <Route path="/login/newuser" element={<SignUp />}></Route>
        </Routes>
      </Router>
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Grid>
      </Box>
    </ChakraProvider>
  );

}

export default App;
