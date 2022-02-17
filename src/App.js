import React, { useState, useEffect } from "react";
import "./style.css";
import ListAccounts from "./ListAccounts";
import GetStarted from "./GetStarted";
import CreateAccount from "./CreateAccount";
import Home from "./Home";
import Login from "./Login";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BeneficiaryList from "./BeneficiaryList";
import Beneficiary from "./Beneficiary";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql.fauna.com/graphql",
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_FAUNA_SECRET}`,
  },
  cache: new InMemoryCache(),
});

const theme = extendTheme({
  colors: {
    main: {
      darkRed: "#AE2735",
      redOrange: "#E03C41",
      darkPink: "#E24170",
      lightPink: "#EA7195",
      white: "#fff",
      grayDisabled: "#DCE0E5",
      purple: "#601659",
      grayBackground: "#F8F7FB",
    },
  },
  fonts: {
    heading: "",
    body: "",
  },
  textStyles: {
    h1: {
      fontSize: ["38px"],
      fontWeight: "semibold",
    },
    h2: {
      fontSize: ["28px"],
      fontWeight: "semibold",
    },
    body: {
      fontSize: "22px",
      fontWeight: "normal",
    },
    nav: {
      fontSize: "21px",
      fontWeight: "semibold",
    },
    h3: {
      fontSize: "16px",
      fontWeight: "medium",
    },
  },
  layerStyles: {
    button: {
      color: "#fff",
      _hover: { bg: "#AE2735" },
      bg: "#AE2735",
      height: "56px",
      borderRadius: "28px",
      filter: "drop-shadow(0 6px 6px rgba(0, 0, 0, 0.30))",
    },
  },
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/list-accounts">
              <ListAccounts />
            </Route>
            <Route path="/get-started">
              <GetStarted />
            </Route>
            <Route path="/create-account">
              <CreateAccount />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/beneficiary-list">
              <BeneficiaryList />
            </Route>
            <Route path="/beneficiary">
              <Beneficiary />
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  );
}
