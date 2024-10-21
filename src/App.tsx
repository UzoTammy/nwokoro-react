import { Box, Flex, Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Photo from "./components/Photo";
import Fullname from "./components/Fullname";
import SocialMedia from "./components/SocialMedia";
import Introduction from "./components/Introduction";
import './index.css'
import Timeline from "./components/Timeline";
import { MdCopyright } from "react-icons/md";

function App() {
  return (
    <Grid templateAreas={{ base: '"navTop" "main" "navBottom"' }}>
      <GridItem area="navTop">
        <NavBar />
      </GridItem>

      <GridItem area="main">
        <Grid templateColumns={{ base: '1fr', lg: "1fr 2fr" }} gap={4}>
          <Grid templateRows="2fr 3fr" padding={5}>
            <Flex direction='column' alignItems="center" justifyContent="center" height="100%">
              <Photo />
              <Fullname />
              <SocialMedia />
            </Flex>
            <Box textAlign="left">
              <Introduction />
            </Box>
          </Grid>
          <Grid padding={2}>
            <Timeline />
            <Box marginTop={5} bg='whiteAlpha' height={'30px'}>
            </Box>
          </Grid>
        </Grid>
      </GridItem>

      <GridItem padding={5} area='navBottom' bg='blue.100'>
        <HStack justifyContent='center'>
          <MdCopyright />
          <Text>2024 designed by Me</Text>
        </HStack>
      </GridItem>
    </Grid>
  );
}

export default App;

