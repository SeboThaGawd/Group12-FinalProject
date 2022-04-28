import {React, useEffect, useState} from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  Center,
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
import Purchase from './Purchase';
import axios from 'axios';
import Budget from './Budget';

function Dashboard() {

    const [purchases, setPurchases] = useState([]);

    useEffect(() => { 
        async function componentDidMount() {
    
            axios.get("http://localhost:4000/budget/get", {headers : {token: localStorage.getItem('token')}})
            .then(res => {
                console.log(res.data);
                console.log("PURCHASES", purchases)
                setPurchases(res.data);
                console.log("PURCHASES", purchases)
            }).catch(error => {console.log(error)});
        }
        componentDidMount()
    }, []);

  return (

    <ChakraProvider theme={theme}>
        <Stack background="white">
        <Purchase/>
        {
            purchases.map(p =>  <Budget category={p.catID} total={p.spent} cap={p.budget} under={p.spent < p.budget}/> )
        }
        </Stack>
    </ChakraProvider>

  );

}

export default Dashboard;
