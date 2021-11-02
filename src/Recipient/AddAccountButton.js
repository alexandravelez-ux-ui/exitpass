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
    <Button layerStyle="button">
      <AddIcon />
      <Text>Add Account</Text>
    </Button>
  );
}
