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
  const [hasUpdated, setHasUpdated] = useState(0);
  const addBeneficary = (email) => {
    const newBeneficiary = {
      email,
      status: "pending",
    };
    beneficiaries.push(newBeneficiary);
    setIsEditing(false);
  };
  const onDelete = (email) => {
    const matching = beneficiaries.findIndex((b) => b?.email == email);
    delete beneficiaries[matching];
    setHasUpdated(hasUpdated + 1);
  };

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
              editing={false}
              status={a.status}
              email={a.email}
              onDelete={onDelete}
            />
          ))}
          {isEditing ? (
            <BeneficiaryDetail
              onChange={(e) => addBeneficary(e.target.value)}
              editing={true}
            />
          ) : (
            ""
          )}
          <Circle bg="gray.100">
            <Button onClick={setIsEditing}>+</Button>
          </Circle>
        </VStack>
      </Center>
    </VStack>
  );
}
