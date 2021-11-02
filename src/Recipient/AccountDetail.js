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
  HStack,
  VStack,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import helpURL from "./help.png";
import keyboardURL from "./keyboard.png";
import mail2URL from "./mail2.png";
import mailURL from "./mail.png";
import meetingURL from "./meeting.png";
import settingsURL from "./settings-gear.png";
import subscriptionURL from "./subscription.png";
import talkURL from "./talk.png";
import videoURL from "./video.png";
import websiteURL from "./website.png";
import willURL from "./will.png";
import sunset from "./sunset.jpg";
import sunsetMask from "./sunsetMask.svg";

const accountCategoriesOld = [
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

const accountCategories = {
  Email: mail2URL,
  Social: talkURL,
  Bank: videoURL,
  Shop: meetingURL,
};

export default function ({ name, data, type }) {
  return (
    <HStack borderRadius="md" spacing={5}>
      <Circle boxShadow="md" size="40">
        <Image src={accountCategories[type]}></Image>
      </Circle>
      <VStack>
        <Text textStyle="h3">{name}</Text>
        <Text textStyle="body">{data}</Text>
        <Text textStyle="body">*********</Text>
      </VStack>
    </HStack>
  );
}
