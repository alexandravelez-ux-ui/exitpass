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
export default function () {
  return (
    <Flex align="center" justify="space-around" width="100vw" direction="row">
      <Image src={logo} width="200px" height="100px" />
      <Text>Why ExitPass</Text>
      <Text>How it Works</Text>
      <Text>Pricing</Text>
      <Text>Get Started</Text>
    </Flex>
  );
}
