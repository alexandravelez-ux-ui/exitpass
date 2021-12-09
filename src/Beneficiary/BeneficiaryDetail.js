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
  CloseIcon,
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

export default function ({ editing, email, status, onChange, onDelete }) {
  return (
    <HStack bg="gray.100" width="md" borderRadius="2xl" spacing={5} padding="5">
      {editing ? (
        <>
          <Text>Email</Text>
          <Input onBlur={onChange} />
        </>
      ) : (
        <>
          <CloseIcon onClick={() => onDelete(email)} />
          <Text flex="1">{email}</Text>
          <Text>{status}</Text>
        </>
      )}
    </HStack>
  );
}
