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
} from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import sunset from "./sunset.jpg";
import sunsetMask from "./sunsetMask.svg";

export default function () {
  return (
    <Image
      h="15vh"
      w="100vw"
      objectPosition="top right"
      objectFit="cover"
      src={sunset}
      clipPath="inset(-40px -20px 0px -20px round 70px)"
    />
  );
}
