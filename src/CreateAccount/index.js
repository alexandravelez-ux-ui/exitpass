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

const accountCategories = [
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
    }
]

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
        url:  helpURL, 
        name: "Help",
    },
    {
        url: subscriptionURL,
        name: "Subscription",
    }
]
export default function () {
    return (
        <Flex fontFamily="Jost" minHeight="100vh" align="center" direction="column">
            <Image h="15vh" w="100vw" objectPosition="top right" objectFit="cover" src={sunset} clipPath="inset(-40px -20px 0px -20px round 70px)"/>
            <Flex align="left" minWidth="400px" direction="column">
                <ChevronLeftIcon color="#707070" viewBox="8 0 20 20" mt="40px" fontSize="32px"/> 
                <Text mt="16px" fontSize="24px" fontWeight="bold">Add New Account</Text>
                <Text mt="32px" mb="6px" fontSize="16px" fontWeight="medium">Website</Text>
                <InputGroup variant="filled" size="lg"> 
                    <InputLeftElement
                        children={
                            <Image src={websiteURL}/>
                        }
                    />
                    <Input bg="rgb(248, 247, 251)" _focus={{bg:"white", borderColor:"#93CFCA"}} _placeholder={{ color: "rgba(22, 4, 25, 0.64)"}} placeholder="www.spotify.com"/>
                </InputGroup>
                <Text mt="32px" mb="6px" fontSize="16px" fontWeight="medium">Email Address / User Name</Text>
                <InputGroup bg="#F8F7FB" size="lg">
                    <InputLeftElement
                        children={
                            <Image src={mailURL}/>
                        }
                    />
                    <Input bg="rgb(248, 247, 251)" variant="filled" _focus={{bg:"white", borderColor:"#93CFCA"}} color="#fff" _placeholder={{ color: "rgba(22, 4, 25, 0.64)"}} placeholder="jenniferwise@gmail.com"/>
                </InputGroup>
                <Text mt="32px" mb="6px" fontSize="16px" fontWeight="medium">Password / Pin</Text>
                <InputGroup variant="filled" bg="#F8F7FB" size="lg">
                    <InputLeftElement
                        children={
                            <Image src={keyboardURL}/>
                        }
                    />
                    <Input bg="rgb(248, 247, 251)" _focus={{bg:"white", borderColor:"#93CFCA"}} _placeholder={{ color: "rgba(22, 4, 25, 0.64)"}} placeholder="*********"/>
                </InputGroup>
                <Text mt="32px" fontSize="16px" fontWeight="medium">Select Category of Account</Text>
                <Flex mt="16px" width="100%" justify="space-between" direction="row">
                    {
                        accountCategories.map(({url, name}) => 
                            <Flex align="center" direction="column">
                                <Circle size="56px" bg="white" filter="drop-shadow(0 3px 0.20rem rgba(0, 0, 0, .16))">
                                    <Image src={url}/>
                                </Circle> 
                                <Text mt="8px" fontSize="12px" fontWeight="medium">
                                    {name}
                                </Text>
                            </Flex>)
                    }
                </Flex>
                <Button mt="32px" color="#fff" _hover={{bg:"#AE2735"}} bg="#AE2735" height="56px" borderRadius="28px" filter="drop-shadow(0 6px 6px rgba(0, 0, 0, 0.30))">Save Details</Button>
            </Flex>
            <Flex mt="40px" background="#F8F7FB" width="100%" align="center" direction="column">
                <Flex justify="space-between" m="16px" minWidth="400px" direction="row">
                    {   
                        footerLabels.map(({url, name}) => 
                            <Flex align="center" direction="column">
                                <Image h="42px" src={url}/>
                                <Text fontSize="16px" fontWeight="medium">
                                    {name}
                                </Text>
                            </Flex>)
                    }
                </Flex>
            </Flex>
        </Flex>
    )
}