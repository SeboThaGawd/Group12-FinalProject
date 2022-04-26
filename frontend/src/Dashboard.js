import React from 'react';
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
import Mainpage from './Mainpage';
import Loginpage from './LoginPage';
import SignUp from './SignUp';
import Login from './Login';
import Profile from './Profile';
import Purchase from './Purchase';
import axios from 'axios';
import Budget from './Budget';

function Dashboard() {

    let groceryBal = 0
    let foodBal = 0
    let clothingBal = 0
    let recBal = 0
    let otherBal = 0
    let today = new Date()

    let state = {
        purchases: [],
        budgets: []
    }

    componentDidMount()

    async function componentDidMount() {

        axios.get("http://localhost:4000/budget/get")
        .then(res => {
            console.log(res);
            this.setState({purchases: res.body.data})
        }).catch(error => {console.log(error)});

        //Different endpoints
        axios.get("http://localhost:4000/user/mes")
        .then(res => {
            console.log(res);
            this.setState({budgets: res.body.data})
        }).catch(error => {console.log(error)});
        filter()
    }

    function dateDiffInDays(one, two) {
            const date1 = new Date(one);
            const date2 = new Date(two);
            const oneDay = 1000 * 60 * 60 * 24;
            const diffInTime = date2.getTime() - date1.getTime();
            const diffInDays = Math.round(diffInTime / oneDay);
            return diffInDays;
        }
    

    function filter() {
        for (let i = 0; i < this.purchases.length; i++) {
            if (dateDiffInDays(today, this.purchases[i].date) <= 30) {
                if (this.purchases[i].category == "grocery") {
                    groceryBal += this.purchases[i].price
                }
                if (this.purchases[i].category == "food") {
                    foodBal += this.purchases[i].price
                }
                if (this.purchases[i].category == "clothes") {
                    clothingBal += this.purchases[i].price
                }
                if (this.purchases[i].category == "rec") {
                    recBal += this.purchases[i].price
                }
                if (this.purchases[i].category == "other") {
                    otherBal += this.purchases[i].price
                }
            } 
        }
    }

  return (
    <ChakraProvider theme={theme}>
        <Stack background="white">
        <Purchase/>
        <Budget category="Grocery" total={50} cap={60} under={true}/>
        <Budget category="Food" total={54} cap={20} under={false}/>
        <Budget category="Grocery" total={50} cap={60} under={true}/>
        <Budget category="Food" total={54} cap={50} under={false}/>
        <Budget category="Grocery" total={50} cap={60} under={true}/>
        <Budget category="Food" total={54} cap={50} under={false}/>

            {/* <Budget category="Grocery" total={groceryBal} cap={this.budgets[0]} under={groceryBal <= this.budgets[0]}/>
            <Budget category="Food" total={foodBal} cap={this.budgets[1]} under={foodBal <= this.budgets[1]}/>
            <Budget category="Clothes" total={clothingBal} cap={this.budgets[2]} under={clothingBal <= this.budgets[2]}/>
            <Budget category="Recreation" total={recBal} cap={this.budgets[3]} under={recBal <= this.budgets[3]}/>
            <Budget category="Other" total={otherBal} cap={this.budgets[4]} under={otherBal <= this.budgets[4]}/> */}
        </Stack>
    </ChakraProvider>

  );

}

export default Dashboard;
