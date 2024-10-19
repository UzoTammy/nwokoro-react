import { Heading, HStack, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import { CiCircleCheck } from 'react-icons/ci'

const Period2023 = () => {
  return (
      <>
      <Heading as={'h3'} fontSize={'2xl'}>Google Career Certificate Program</Heading>
      <HStack>

        <Text as={'b'}>Project <br/>Management </Text>
        <List>
          <ListItem>
            <ListIcon as={CiCircleCheck} color='green.500' />
            Planning and Scheduling: Learnt to develop comprehensive project plans, set timelines,
            <br/> and allocate resources effectively to ensure successful project execution.
          </ListItem>
          <ListItem>
            <ListIcon as={CiCircleCheck} color='green.500' />
            Risk Management: Acquired skills to identify, assess, and mitigate project risks,
            <br/>ensuring potential issues are addressed proactively.
          </ListItem>
          <ListItem>
            <ListIcon as={CiCircleCheck} color='green.500' />
            Team Leadership and Communication: Develop the ability to lead project teams, motivate members,
            <br/>and facilitate clear communication across stakeholders for alignment and collaboration.
          </ListItem>
          <ListItem>
            
            <ListIcon as={CiCircleCheck} color='green.500' />
            Scope and Quality Management: Understand how to define project scope accurately, control changes,
            <br/>and ensure the project meets quality standards and delivers desired outcomes.
          </ListItem>
        </List>
      </HStack>
      </>
  )
}

export default Period2023