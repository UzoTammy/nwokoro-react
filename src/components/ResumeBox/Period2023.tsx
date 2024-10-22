import { Heading, HStack, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import { CiCircleCheck } from 'react-icons/ci'
import { FaBook } from 'react-icons/fa'

const Period2023 = () => {
  return (
      <>
      <Heading as={'h3'} fontSize={'2xl'}>Google Career Certificate Program</Heading>
      <HStack>

        <Text as={'b'}>Project <br/>Management <FaBook color='pink'/></Text>
        <List>
          <ListItem>
            <ListIcon as={CiCircleCheck} color='green.500' />
            Learnt to develop comprehensive project plans, set  timelines,
             and <br/> allocate resources effectively to ensure successful project execution.
          </ListItem>
          <ListItem>
            <ListIcon as={CiCircleCheck} color='green.500' />
            Acquired skills to identify, assess, and mitigate project <br/> risks,
            ensuring potential issues are addressed proactively.
          </ListItem>
          <ListItem>
            <ListIcon as={CiCircleCheck} color='green.500' />
            Developed the ability to lead project teams, motivate members,
            and facilitate <br/> clear communication across stakeholders for alignment and collaboration.
          </ListItem>
          <ListItem>
            
            <ListIcon as={CiCircleCheck} color='green.500' />
            Understood how to define project scope accurately, control changes,
            and <br/> ensure the project meets quality standards and delivers desired outcomes.
          </ListItem>
        </List>
      </HStack>
      </>
  )
}

export default Period2023