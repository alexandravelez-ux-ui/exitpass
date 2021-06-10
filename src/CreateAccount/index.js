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
            <Image objectPosition="right top" objectFit="none" src={sunset} clipPath="inset(-40px -20px 0px -20px round 70px)"/>
            <Flex align="left" justify="space-around" minHeight="100vh" minWidth="700px" direction="column">
                <ChevronLeftIcon/>
                <Text>Add New Account</Text>
                <Text>Website</Text>
                <InputGroup>
                    <InputLeftElement
                        children={
                            <Image src="website.png"/>
                        }
                    />
                    <Input placeholder="www.spotify.com"/>
                </InputGroup>
                    <Text>Email Address / User Name</Text>
                <InputGroup>
                    <InputLeftElement
                        children={}
                    />
                    <Input placeholder="jenniferwise@gmail.com"/>
                </InputGroup>
                <Text>Password / Pin</Text>
                <InputGroup>
                    <InputLeftElement
                        children={}
                    />
                    <Input placeholder="*********"/>
                </InputGroup>
                <Text>Selecet Category of Account</Text>
                <Flex width="100%" justify="space-between" direction="row">
                    <Image src={mail2URL}/> 
                    <Image src={talkURL}/>
                    <Image src={videoURL}/>
                    <Image src={meetingURL}/>
                </Flex>
                <Button>Save Details</Button>
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