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
    <Grid templateAreas={{ base: '"nav" "main"' }}>
      <GridItem area="nav">
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
              <HStack>
                <MdCopyright />
                <Text>2024</Text>
              </HStack>
            </Box>
          </Grid>
        </Grid>
      </GridItem>
    </Grid>
  );
}

export default App;

