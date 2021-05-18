import react from "react" 
import { Flex, Circle, Image, Text, Button} from "@chakra-ui/react"
import logoURL from "./exitpass-logo.png"

export default function () {
    return (
        <Flex align="center" justify="space-around" minHeight="100vh" direction="column">
            <Circle>
                <Image w="60vw" src={logoURL}/>
            </Circle>
            <Text>
                EXITPASS
            </Text>
            <Text>
                Live vibrantly
                Plan <Text>thoroughly</Text>
            </Text>
            <Button>
                Get Started
            </Button>
        </Flex>
    )
}