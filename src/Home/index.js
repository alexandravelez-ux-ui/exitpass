import react from "react";
import { Flex, Circle, Image, Text, Button, chakra } from "@chakra-ui/react";
import TabSection from "./tabsSection";
export default function () {
  return (
    <Flex
      fontFamily="Jost"
      align="center"
      paddingTop="30px"
      minHeight="100vh"
      direction="column"
    >
      <Flex align="center" justify="space-around" width="100vw" direction="row">
        <Image background="red" width="200px" height="100px" />
        <Text>Why ExitPass</Text>
        <Text>How it Works</Text>
        <Text>Pricing</Text>
        <Text>Get Started</Text>
      </Flex>
      <Flex direction="row" width="60vw" marginTop="80px">
        <Image flex="1" background="gray" />
        <Flex flex="1" direction="column" justify="center" marginLeft="75px">
          <Text>What is ExitPass</Text>
          <Text marginTop="32px">
            Exitpass is a tool for preserving your digital accounts for your
            chosen beneficiaries after death. We ensure that your digital
            identity is passed on to people you trust.
          </Text>
        </Flex>
      </Flex>
      <TabSection />
      <Flex direction="column" width="60vw" align="center" marginTop="80px">
        <Text>How ExitPass Works</Text>
        <Flex
          flex="1"
          direction="row"
          justify="space-between"
          marginRight="75px"
        >
          <Text marginTop="32px" flex="1" padding="16px">
            When using ExitPass, you enter your online account details just like
            a password manager and then specify how you want the account handled
            in the event of your death.
          </Text>
          <Text marginTop="32px" flex="1" padding="16px">
            You then specify who will be able to access the account to carry out
            these wishes.
          </Text>
          <Text marginTop="32px" flex="1" padding="16px">
            They will be invited to create a beneficiary account where they will
            be able to access the account data after your death.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
