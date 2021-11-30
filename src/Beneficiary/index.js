import react, { useState } from "react";
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
import BeneficiaryDetail from "./BeneficiaryDetail";

const beneficiaries = [
  {
    email: "jenniferwise@gmail.com",
    status: "active",
  },
  {
    email: "jenniferwise@gmail.com",
    status: "pending",
  },
  {
    email: "jenniferwise@gmail.com",
    status: "pending",
  },
];

export default function () {
  const [isEditing, setIsEditing] = useState(false);
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
          {beneficiaries.map((a) => (
            <BeneficiaryDetail
              editing={a.editing}
              status={a.status}
              email={a.email}
            />
          ))}
          <Circle bg="gray.100">
            <Button onClick={setIsEditing}>+</Button>
          </Circle>
        </VStack>
      </Center>
    </VStack>
  );
}
