import react, {useState} from "react"
import { Flex, Circle, Image, Text, Button, chakra} from "@chakra-ui/react"

export default function () {
    return (
        <Flex background="gray" direction="row" width="60vw" marginTop="80px" padding="32px">
            <Flex  flex="1" direction="column" align="center" justify="space-around" color="white">
                <Text background="blue" width="80%" padding="5px">Headline</Text>
                <Text background="blue" width="80%" padding="5px">Headline</Text>
                <Text background="blue" width="80%" padding="5px">Headline</Text>
                <Text background="blue" width="80%" padding="5px">Headline</Text>
            </Flex>
            <Image flex="1" background="red"/>
        </Flex>
    )
}