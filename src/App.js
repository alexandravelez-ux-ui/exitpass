import React, { useState, useEffect } from "react";
import "./style.css";
import Recipient from "./Recipient";
import { ChakraProvider } from "@chakra-ui/react"

const theme = extendTheme ({
  colors: {
    red: "",
    brightRed: "",
    white: "#fff"
  }
}) 

export default function App() {
  return (
    <ChakraProvider>
      <div className="jost-font">
        <Recipient />
      </div>
    </ChakraProvider>
  );
}
