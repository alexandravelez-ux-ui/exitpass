import react from "react";
import {
  Flex,
  Circle,
  Image,
  Text,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  chakra,
  VStack,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
// import helpURL from "../CreateAccount/help.png";
// import keyboardURL from "./keyboard.png";
import mail2URL from "../CreateAccount/mail2.png";
// import mailURL from "./mail.png";
import meetingURL from "../CreateAccount/meeting.png";
// import settingsURL from "./settings-gear.png";
// import subscriptionURL from "./subscription.png";
import talkURL from "../CreateAccount/talk.png";
import videoURL from "../CreateAccount/video.png";
// import websiteURL from "./website.png";
// import willURL from "./will.png";
// import sunset from "./sunset.jpg";
// import sunsetMask from "./sunsetMask.svg";

const accountCategories = [
  {
    url: mail2URL,
    name: "Email",
  },
  {
    url: talkURL,
    name: "Social",
  },
  {
    url: videoURL,
    name: "Bank",
  },
  {
    url: meetingURL,
    name: "Shop",
  },
];

export default function () {
  return (
    <VStack width="110%" bg="gray.100" borderRadius="2xl" padding="30px">
      <Text alignSelf="flex-start" textStyle="nav">
        Password Categories
      </Text>
      <Flex mt="16px" width="100%" justify="space-between" direction="row">
        {accountCategories.map(({ url, name }) => (
          <Flex align="center" direction="column">
            <Circle
              size="56px"
              bg="white"
              filter="drop-shadow(0 3px 0.20rem rgba(0, 0, 0, .16))"
            >
              <Image src={url} />
            </Circle>
            <Text mt="8px" fontSize="12px" fontWeight="medium">
              {name}
            </Text>
          </Flex>
        ))}
      </Flex>
    </VStack>
  );
}
