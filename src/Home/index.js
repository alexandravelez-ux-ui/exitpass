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
import TabSection from "./tabsSection";
import Header from "./Header";
import trust from "./home-image.jpg";

export default function () {
  return (
    <Flex
      fontFamily="Jost"
      align="center"
      paddingTop="30px"
      minHeight="100vh"
      direction="column"
    >
      <Header height="50px" margin="3vh 0" />
      <Flex direction="row" width="60vw" marginTop="100px">
        <Image
          src={trust}
          flex="1"
          background="gray"
          boxSize="50%"
          objectFit="contain"
          borderRadius="md"
          boxShadow="xl"
        />
        <Flex flex="1" direction="column" justify="center" marginLeft="75px">
          <Text textStyle="h1">What is ExitPass</Text>
          <Text marginTop="32px" textStyle="body">
            Exitpass is a tool for preserving your digital accounts for your
            chosen beneficiaries after death. We ensure that your digital
            identity is passed on to people you trust.
          </Text>
        </Flex>
      </Flex>
      <TabSection />
      <Flex
        direction="column"
        width="60vw"
        alignItems="center"
        marginTop="100px"
      >
        <Text textStyle="h1">How ExitPass Works</Text>
        <Flex flex="1" direction="row" justify="space-between">
          <Flex
            direction="column"
            size="200px"
            marginTop="32px"
            flex="1"
            margin="16px"
            padding="16px"
            align="center"
          >
            <Text marginBottom="24px" borderBottom="1px" textStyle="h2">
              1
            </Text>
            <Text textStyle="body">
              When using ExitPass, you enter your online account details just
              like a password manager and then specify how you want the account
              handled in the event of your death.
            </Text>
          </Flex>
          <Flex
            direction="column"
            size="200px"
            marginTop="32px"
            flex="1"
            margin="16px"
            padding="16px"
            align="center"
          >
            <Text borderBottom="1px" marginBottom="24px" textStyle="h2">
              2
            </Text>
            <Text textStyle="body">
              You then specify who will be able to access the account to carry
              out these wishes.
            </Text>
          </Flex>
          <Flex
            direction="column"
            size="200px"
            marginTop="32px"
            flex="1"
            margin="16px"
            padding="16px"
            align="center"
            marginBottom="24px"
          >
            <Text borderBottom="1px" marginBottom="24px" textStyle="h2">
              3
            </Text>
            <Text textStyle="body">
              They will be invited to create a beneficiary account where they
              will be able to access the account data after your death.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        height="15vh"
        direction="row"
        width="60vw"
        marginTop="100px"
        align="center"
        justify="space-between"
        marginBottom="24px"
        backgroundColor="main.purple"
        padding="32px 7vw"
        color="white"
        borderRadius="md"
        boxShadow="xl"
      >
        <Box width="28vw">
          <Text textAlign="left" marginBottom="4px" textStyle="h2">
            Start Your Account in Minutes
          </Text>
          <Text textAlign="left" textStyle="body">
            With just a few clicks you can create your digital will for your
            online accounts.
          </Text>
        </Box>
        <Button
          boxShadow="2px 2px 2px 1px rgba(0, 0, 0, 0.2);"
          padding="32px"
          bg="main.darkRed"
          color="white"
          _hover={{ bg: "main.darkPink" }}
        >
          <Text textStyle="h2"> Get Started</Text>
        </Button>
      </Flex>
    </Flex>
  );
}
