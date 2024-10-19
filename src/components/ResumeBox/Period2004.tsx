import { Box, Heading, HStack, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { CiCircleCheck } from "react-icons/ci";

const Period2004 = () => {
    return (
      <>
        <Heading fontSize={'2xl'}>Shell Nigeria Gas Ltd</Heading>
            <HStack>
        <Text as={"b"}>Engineering <br />Intern</Text>
        <List>
          <ListItem>
            <ListIcon as={CiCircleCheck} color="green.500" />
                Safety Awareness: Trained to become conscious of safety as the most relevant in any endeavour
          </ListItem>
          <ListItem>
            <ListIcon as={CiCircleCheck} color="green.500" />
            
                Risk Assessment and Hazard Identification: Developed skills to identify potential hazards, assess<br/>
                risks, and implement appropriate measures to mitigate dangers before they lead to incidents.
            
          </ListItem>
          <ListItem>
            <ListIcon as={CiCircleCheck} color="green.500" />
                Safety Training and Awareness: Gained the ability to train team members on safety protocols,<br/>
                foster safety awareness, and ensure all personnel understand and follow safety procedures.
          </ListItem>
          <ListItem>
            <ListIcon as={CiCircleCheck} color="green.500" />
                Incident Response and Reporting: Acquired skills in responding to incidents, documenting safety <br/>
                breaches, and conducting root cause analysis to prevent future occurrences.
          </ListItem>
        </List>
      </HStack>
      </>
  )
}

export default Period2004;