import { Heading, HStack, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { CiCircleCheck } from "react-icons/ci";
import { FaToolbox } from "react-icons/fa";
const Period2008 = () => {
  return (
    <>
      <Heading fontSize={"2xl"}>Ikenna Commercial Company Ltd</Heading>
      <HStack>
        <Text as={"b"}>Business <br />Development <FaToolbox color="orange" /></Text>
        <List>

          <ListItem>
            <ListIcon as={CiCircleCheck} color='green.500' />
            Improved business processes for efficiency and effectiveness
          </ListItem>
          <ListItem>
            <ListIcon as={CiCircleCheck} color='green.500' />
            Developed and implemented growth strategies
          </ListItem>
          <ListItem>
            <ListIcon as={CiCircleCheck} color='green.500' />
            Managed daily inflow and outflow of goods
          </ListItem>
          <ListItem>
            <ListIcon as={CiCircleCheck} color='green.500' />
            Controlled budget to save costs and boost profitability
          </ListItem>

        </List>
      </HStack>
    </>
  );
};

export default Period2008;
