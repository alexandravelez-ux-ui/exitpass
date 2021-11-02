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

const footerLabels = [
  {
    url: willURL,
    name: "Will",
  },
  {
    url: settingsURL,
    name: "Settings",
  },
  {
    url: helpURL,
    name: "Help",
  },
  {
    url: subscriptionURL,
    name: "Subscription",
  },
];

export default function () {
  return (
    <Flex
      mt="40px"
      background="#F8F7FB"
      width="100%"
      align="center"
      direction="column"
    >
      <Flex justify="space-between" m="16px" minWidth="400px" direction="row">
        {footerLabels.map(({ url, name }) => (
          <Flex align="center" direction="column">
            <Image _hover={{ filter: "saturate(15)" }} h="42px" src={url} />
            <Text fontSize="16px" fontWeight="medium">
              {name}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
