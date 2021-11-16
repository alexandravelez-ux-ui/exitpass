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
// import helpURL from "./help.png";
// import keyboardURL from "./keyboard.png";s
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
    <HStack
      bg="gray.100"
      bheight="200px"
      width="md"
      borderRadius="2xl"
      spacing={5}
      padding="5"
    >
      <Circle bg="white" boxShadow="md" size="60px">
        <Image src={accountCategories[type]}></Image>
      </Circle>
      <VStack align="left">
        <Text textStyle="h3">{name}</Text>
        <Text textStyle="body">{data}</Text>
        <Text textStyle="body">*********</Text>
      </VStack>
    </HStack>
  );
}
