import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom';
import Dashboard from './Dashboard';
import Mainpage from './Mainpage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path = "/" element={<Mainpage/>}></Route>
          <Route path = "/profile" element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
