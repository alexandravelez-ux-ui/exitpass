import react, { useState } from "react";
import {
  Flex,
  Circle,
  Image,
  Text,
  Button,
  chakra,
  Img,
  Box,
} from "@chakra-ui/react";
import confident from "./confident.jpg";
import flexibility from "./flexibility.jpg";
import intentions from "./intentions.jpg";
import security from "./security.jpg";

const images = [security, flexibility, intentions, confident];

export default function () {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  return (
    <Flex
      height="40vh"
      background="main.darkRed"
      direction="row"
      width="60vw"
      marginTop="80px"
      padding="32px"
      borderRadius="md"
      // onMouseOut={() => setCurrentImageIndex(undefined)}
    >
      <Flex flex="1" direction="column" justify="space-between" color="white">
        <Box
          onMouseOver={() => setCurrentImageIndex(0)}
          _hover={{ bg: "main.purple", boxShadow: "xl", borderRadius: "md" }}
          width="80%"
          padding="16px"
        >
          <Text fontSize="24px" fontWeight="bold">
            Security
          </Text>
          {currentImageIndex == 0 ? (
            <Text>
              We use the latest encryption technology to secure and protect your
              data
            </Text>
          ) : (
            ""
          )}
        </Box>
        <Box
          onMouseOver={() => setCurrentImageIndex(1)}
          _hover={{ bg: "main.purple", boxShadow: "xl", borderRadius: "md" }}
          width="80%"
          padding="16px"
        >
          <Text fontSize="24px" fontWeight="bold">
            Flexibility
          </Text>
          {currentImageIndex == 1 ? (
            <Text>
              Whether its your bank account or social media account, we will
              safeguard your data and carry out your wishes
            </Text>
          ) : (
            ""
          )}
        </Box>
        <Box
          onMouseOver={() => setCurrentImageIndex(2)}
          _hover={{ bg: "main.purple", boxShadow: "xl", borderRadius: "md" }}
          width="80%"
          padding="16px"
        >
          <Text fontSize="24px" fontWeight="bold">
            Intention
          </Text>
          {currentImageIndex == 2 ? (
            <Text>Choose who will gain access to your digital accounts</Text>
          ) : (
            ""
          )}
        </Box>
        <Box
          onMouseOver={() => setCurrentImageIndex(3)}
          _hover={{ bg: "main.purple", boxShadow: "xl", borderRadius: "md" }}
          width="80%"
          padding="16px"
        >
          <Text fontSize="24px" fontWeight="bold">
            Confidence
          </Text>
          {currentImageIndex == 3 ? (
            <Text>
              Have the peace of mind that your digital accounts will be well
              taken care of
            </Text>
          ) : (
            ""
          )}
        </Box>
      </Flex>
      <Image
        src={images[currentImageIndex]}
        borderRadius="md"
        boxShadow="xl"
        margin="16px"
      />
    </Flex>
  );
}
