import react from "react" 
import { Flex, Circle, Image, Text, Button, chakra} from "@chakra-ui/react"
import TabSection from "./tabsSection"
export default function () {
    return (
        <Flex fontFamily="Jost" align="center" paddingTop="30px" minHeight="100vh" direction="column">
            <Flex align="center" justify="space-around" width="100vw" direction="row">
                <Image background="red" width="200px" height="100px"/>
                <Text>Why ExitPass</Text>
                <Text>How it Works</Text>
                <Text>Pricing</Text>
                <Text>Get Started</Text>
            </Flex>
            <Flex direction="row" width="60vw" marginTop="80px">
                <Image flex="1" background="gray"/>
                <Flex  flex="1" direction="column" justify="center" marginLeft="75px">
                    <Text>Headline</Text>
                    <Text marginTop="32px">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                </Flex>
            </Flex>
            <TabSection/>
        </Flex>
    )
}