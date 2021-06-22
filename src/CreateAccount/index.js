import react from "react" 
import { Flex, Circle, Image, Text, Button, Input, InputGroup, InputLeftElement, chakra} from "@chakra-ui/react"
import { PhoneIcon, AddIcon, WarningIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import helpURL from './help.png'
import keyboardURL from './keyboard.png'
import mail2URL from './mail2.png'
import mailURL from './mail.png'
import meetingURL from './meeting.png'
import settingsURL from './settings.png'
import subscriptionURL from './subscription.png'
import talkURL from './talk.png'
import videoURL from './video.png'
import websiteURL from './website.png'
import willURL from './will.png'
import sunset from './sunset.jpg'
import sunsetMask from './sunsetMask.svg'

export default function () {
    return (
        <Flex fontFamily="Jost" align="center" direction="column">
            <Image h="15vh" w="100vw" objectPosition="top right" objectFit="cover" src={sunset} clipPath="inset(-40px -20px 0px -20px round 70px)"/>
            <Flex align="left" minHeight="100vh" minWidth="400px" direction="column">
                <ChevronLeftIcon color="#707070" viewBox="8 0 20 20" mt="40px" fontSize="32px"/> 
                <Text mt="16px" fontSize="24px" fontWeight="bold">Add New Account</Text>
                <Text mt="32px" mb="6px" fontSize="16px" fontWeight="medium">Website</Text>
                <InputGroup variant="filled" bg="#F8F7FB" size="lg"> 
                    <InputLeftElement
                        children={
                            <Image src={websiteURL}/>
                        }
                    />
                    <Input _focus={{bg:"white", borderColor:"#93CFCA"}} _placeholder={{ color: "rgba(22, 4, 25, 0.64)"}} placeholder="www.spotify.com"/>
                </InputGroup>
                <Text mt="32px" mb="6px" fontSize="16px" fontWeight="medium">Email Address / User Name</Text>
                <InputGroup bg="#F8F7FB" size="lg">
                    <InputLeftElement
                        children={
                            <Image src={mailURL}/>
                        }
                    />
                    <Input variant="filled" _focus={{bg:"white", borderColor:"#93CFCA"}} color="#fff" _placeholder={{ color: "rgba(22, 4, 25, 0.64)"}} placeholder="jenniferwise@gmail.com"/>
                </InputGroup>
                <Text mt="32px" mb="6px" fontSize="16px" fontWeight="medium">Password / Pin</Text>
                <InputGroup variant="filled" bg="#F8F7FB" size="lg">
                    <InputLeftElement
                        children={
                            <Image src={keyboardURL}/>
                        }
                    />
                    <Input _focus={{bg:"white", borderColor:"#93CFCA"}} _placeholder={{ color: "rgba(22, 4, 25, 0.64)"}} placeholder="*********"/>
                </InputGroup>
                <Text mt="32px" fontSize="16px" fontWeight="medium">Select Category of Account</Text>
                <Flex mt="16px" width="100%" justify="space-between" direction="row">
                    {
                        [
                           mail2URL, talkURL, videoURL, meetingURL
                        ].map(url => <Circle size="56px" bg="white" filter="drop-shadow(0 3px 0.20rem rgba(0, 0, 0, .16))"><Image src={url}/></Circle>) 
                    }
                </Flex>
                <Button mt="32px" color="#fff" _hover={{bg:"#AE2735"}} bg="#AE2735" height="56px" borderRadius="28px" filter="drop-shadow(0 3px 0.20rem rgba(0, 0, 0, .16))">Save Details</Button>
            </Flex>
            <Flex background="gray" width="100%" align="center" direction="column">
                <Flex justify="space-between" minWidth="700px" direction="row">
                    {
                        [
                            willURL, settingsURL, helpURL, subscriptionURL
                        ].map(url => <Image h="32px" margin="10px" src={url}/> ) 
                    }
                </Flex>
            </Flex>
        </Flex>
    )
}