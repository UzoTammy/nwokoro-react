import { Heading, HStack, List, ListIcon, ListItem, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { CiCircleCheck } from "react-icons/ci";
import { FaBook } from "react-icons/fa";

const Period2002 = () => {
    return (
      <>
            <Heading fontSize={'2xl'}>Federal University Of Technology, Minna, Nigeria</Heading>
            <HStack>

          <Text as={"b"}>Chemical <br />Engineering <FaBook color="pink"/></Text> 
          
        <List>
          <ListItem>
                <ListIcon as={CiCircleCheck} color="green.500" />
                Problem-Solving and Analytical Thinking: Learn to systematically analyze complex problems,<br/>
                break them into components, and develop effective solutions using logical reasoning.
          </ListItem>
          <ListItem overflowWrap="break-word">
            <ListIcon as={CiCircleCheck} color="green.500" />
                Creativity and Innovation: Develop skills to approach challenges with a creative mindset,<br/>
                design new solutions, and innovate in engineering processes and product development.

          </ListItem>
          <ListItem>
            <ListIcon as={CiCircleCheck} color="green.500" />
            Attention to Detail: Acquire the ability to meticulously focus on detailed aspects of design,<br/>
            implementation, and analysis to ensure quality, accuracy, and safety in engineering work.
                            
          </ListItem>
          <ListItem>
            <ListIcon as={CiCircleCheck} color="green.500" />
                Communication and Teamwork: Learn to communicate technical information effectively and <br/>
                collaborate within multidisciplinary teams to achieve project objectives.
          </ListItem>
        </List>    
        </HStack>
      </>
  )
}

export default Period2002;