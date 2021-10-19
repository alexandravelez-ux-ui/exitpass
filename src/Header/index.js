import react from "react";
import {
  Flex,
  Circle,
  Image,
  Text,
  Button,
  chakra,
  Box,
} from "@chakra-ui/react";
import logo from "./EXITPASS.svg";
import { HashLink as Link } from "react-router-hash-link";

export default function (props) {
  return (
    <Flex
      align="center"
      justify="space-around"
      width="100vw"
      direction="row"
      {...props}
    >
      <Image src={logo} height="100%" />
      {/* <Link to="/pathLink#yourAnchorTag"><Text textStyle="nav">Why ExitPass</Text></Link>
      <Link to="/pathLink#yourAnchorTag"><Text textStyle="nav">How it Works</Text></Link>
      <Link to="/pathLink#yourAnchorTag"><Text textStyle="nav">Pricing</Text></Link>
      <Link to="/pathLink#yourAnchorTag"><Text textStyle="nav">Get Started</Text></Link> */}
    </Flex>
  );
}
