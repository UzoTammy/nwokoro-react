import { Heading, HStack, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { CiCircleCheck } from "react-icons/ci";
import { FaToolbox } from "react-icons/fa";
const Period2022 = () => {
    return (
        <>
            <Heading fontSize={'2xl'}>Ozone F & L Trading Co. Ltd</Heading>
            <HStack>

                <Text as={'b'}>Business <br />Operations <FaToolbox color="orange" /></Text>
                <List flex={'wrap'}>
                    <ListItem>
                        <ListIcon as={CiCircleCheck} color="green.500" />
                        Develop skills to analyze business processes,
                        identify 
                        inefficiencies, <br />and implement strategies to streamline operations
                        and increase productivity.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CiCircleCheck} color="green.500" />
                        Learn to effectively manage resources,
                        including budgeting, 
                        allocation of staff, <br />and equipment, to ensure optimal business
                        performance.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CiCircleCheck} color="green.500" />
                        Gained the ability to analyze
                        operational data, <br />
                        generate insights, and make informed decisions that support business
                        objectives.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CiCircleCheck} color="green.500" />
                        Acquired the ability to lead teams and facilitate coordination across different
                        <br />departments to ensure smooth, cohesive operations and achieve company goals.
                    </ListItem>
                </List>
            </HStack>

        </>
    )
}

export default Period2022;