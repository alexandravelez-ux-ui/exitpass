import react from "react";
import {
  Flex,
  Circle,
  Image,
  Text,
  Center,
  Button,
  chakra,
  VStack,
  Heading,
} from "@chakra-ui/react";
// import logoURL from "./exitpass-logo.png";
import sunset from "../CreateAccount/sunset.jpg";
import AccountCategories from "./AccountCategories";
import AccountDetail from "./AccountDetail";

const accountDetails = [
  {
    name: "Gmail",
    data: "jenniferwise@gmail.com",
    type: "Email",
  },
  {
    name: "Outlook",
    data: "jenniferwise3@outlook.com",
    type: "Email",
  },
  {
    name: "Hotmail",
    data: "jennifer-wise@hotmail.com",
    type: "Email",
  },
];

export default function () {
  return (
    <VStack>
      <Image
        h="15vh"
        w="100vw"
        objectPosition="top right"
        objectFit="cover"
        src={sunset}
        clipPath="inset(-40px -20px 0px -20px round 70px)"
      />

      <Center>
        <VStack marginTop="10" spacing="10" width="md">
          <AccountCategories />
          <Text alignSelf="flex-start" textStyle="nav">
            Email Accounts
          </Text>
          {accountDetails.map((a) => (
            <AccountDetail name={a.name} data={a.data} type={a.type} />
          ))}
        </VStack>
      </Center>
    </VStack>
  );
}
