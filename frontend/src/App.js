import React from 'react';
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
  Grid,
  theme,
} from '@chakra-ui/react';
import Navbar from './Navbar';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Dashboard from './Dashboard';
import Mainpage from './Mainpage';

function App() {


  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path = "/" element={<Mainpage></Mainpage>}></Route>
          <Route path = "/profile" element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </Router>
    </ChakraProvider>

  );

}

export default App;
