import react from "react" 
import { Flex, Circle, Image, Text, Button, Input, chakra} from "@chakra-ui/react"
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
            <object data={sunsetMask} type="image/svg+xml"></object>
            <Image clipPath="url(#sunset)"/>
            <Flex align="left" justify="space-around" minHeight="100vh" minWidth="700px" direction="column">
                <ChevronLeftIcon/>
                <Text>Add New Account</Text>
                <Text>Website</Text>
                <Input placeholder="www.spotify.com"/>
                <Text>Email Address / User Name</Text>
                <Input placeholder="jenniferwise@gmail.com"/>
                <Text>Password / Pin</Text>
                <Input placeholder="*********"/>
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