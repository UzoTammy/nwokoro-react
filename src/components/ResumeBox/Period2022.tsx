import { Heading, HStack, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { CiCircleCheck } from "react-icons/ci";
import { FaToolbox } from "react-icons/fa";
const Period2022 = () => {
    return (
      <>
            <Heading fontSize={'2xl'}>Ozone F & L Trading Co. Ltd</Heading>
            <HStack>

                <Text as={'b'}>Business <br/>Operations <FaToolbox color="orange"/></Text>
                <List>
                    <ListItem>
                        <ListIcon as={CiCircleCheck} color='green.500' />
                        Process Optimization: Develop skills to analyze business processes, identify <br />
                        inefficiencies, and implement strategies to streamline operations and increase productivity.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CiCircleCheck} color='green.500' />
                        Resource Management: Learn to effectively manage resources, including budgeting, <br/>
                        allocation of staff, and equipment, to ensure optimal business performance.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CiCircleCheck} color='green.500' />
                        Data Analysis and Decision-Making: Gain the ability to analyze operational data, <br/>
                        generate insights, and make informed decisions that support business objectives.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CiCircleCheck} color='green.500' />
                        Team Leadership and Cross-Department Coordination: Acquire the ability to lead teams and 
                        facilitate coordination <br/> across different departments to ensure smooth, cohesive operations and achieve company goals.
                    </ListItem>
                </List>
            </HStack>

      </>
  )
}

export default Period2022;