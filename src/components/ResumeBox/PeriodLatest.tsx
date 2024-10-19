import { Heading, HStack, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { CiCircleCheck } from 'react-icons/ci'
import { FaBook } from "react-icons/fa";

const Period2024 = () => {
  return (
      <>
      <Heading as={'h3'} fontSize={'2xl'}>Skills for hire program</Heading>
      <HStack>
        <Text as={'b'}>Cybersecurity <FaBook color="pink"/></Text>
        <List>
          <ListItem>
            <ListIcon as={CiCircleCheck} color='green.500'/>
              Network Security and Threat Analysis: Learnt to secure network infrastructure and analyze threats.
          </ListItem>
          <ListItem><ListIcon as={CiCircleCheck} color='green.500'/>
          Cryptography: Understand encryption methods for data security and identity authentication.</ListItem>
          <ListItem><ListIcon as={CiCircleCheck} color='green.500'/>
          Ethical Hacking and Penetration Testing: Gained skills to identify and fix system vulnerabilities.</ListItem>
          <ListItem><ListIcon as={CiCircleCheck} color='green.500'/>
          Incident Response and Risk Management: Develop the ability to respond to security incidents, <br />mitigate risks, and perform forensic investigations.</ListItem>
          
        </List>
        </HStack>
    </>
  );
};

export default Period2024;
