import React, { useState, useEffect } from "react";
import "./style.css";
import Recipient from "./Recipient";
import Home from "./Home";
import CreateAccount from "./CreateAccount";
import { ChakraProvider, extendTheme} from "@chakra-ui/react"
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";

const theme = extendTheme({
  colors: {
    main: {
      100: "#AE2735",
      redOrange: "#E03C41",
      darkPink: "#E24170",
      lightPink:"#EA7195",
      white: "#fff",
      grayDisabled: "#DCE0E5"
    }
  }
}) 

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch> 
          <Route path="/recipient">
            <div className="jost-font">
              <Recipient />
            </div>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/createAccount">
            <CreateAccount/>
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}
