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

const recipients = [
  {
    name: "Jennifer Wise",
    status: "inactive",
  },
  {
    name: "Jennifer Wiser",
    status: "active",
  },
  {
    name: "Jennifer Wisest",
    status: "inactive",
  },
];

export default function () {
  const [isEditing, setIsEditing] = useState(false);
  const [hasUpdated, setHasUpdated] = useState(0);
  const onDelete = (email) => {
    // const matching = recipients.findIndex((b) => b?.email == email);
    // delete recipients[matching];
    // setHasUpdated(hasUpdated + 1);
  };

  const inActiveRecipients = recipients.filter((a) => a.status == "inactive");
  const activeRecipients = recipients.filter((a) => a.status == "active");

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
          {activeRecipients.length ? (
            <>
              <Text>Active Recipients</Text>
              {activeRecipients.map((a) => (
                <BeneficiaryDetail
                  active={true}
                  name={a.name}
                  onDelete={onDelete}
                />
              ))}
            </>
          ) : (
            ""
          )}
          {inActiveRecipients.length ? (
            <>
              <Text>Inactive Recipients</Text>
              {inActiveRecipients.map((a) => (
                <BeneficiaryDetail name={a.name} onDelete={onDelete} />
              ))}
            </>
          ) : (
            ""
          )}
        </VStack>
      </Center>
    </VStack>
  );
}
