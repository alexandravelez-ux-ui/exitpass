import react from "react" 
import { Flex, Circle, Image, Text, Button, chakra} from "@chakra-ui/react"
import logoURL from "./exitpass-logo.png"

export default function () {
    return (
        <Flex fontFamily="Jost" align="center" justify="space-around" minHeight="100vh" direction="column">
            <Circle>
                <Image w={{sm: "60vw", md: "30vw", lg:"20vw"}} src={logoURL}/>
            </Circle>
            <Text fontSize="40px" fontWeight="bold" >
                <chakra.span color="#AE2735">EXIT</chakra.span><chakra.span color="#E24170">PASS</chakra.span>
            </Text>
            <Text textAlign="center">
                Live vibrantly<br/>
                Plan <chakra.span fontWeight="bold">thoroughly</chakra.span>
            </Text>
            <Button background="#AE2735" color="#fff" borderRadius="40px" padding="16px 40px">
                Get Started
            </Button>
        </Flex>
    )
}