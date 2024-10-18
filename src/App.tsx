import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Photo from "./components/Photo";
import Fullname from "./components/Fullname";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <Grid templateAreas={{ base: '"nav" "main"' }}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      
      <GridItem area="main">
        <Grid templateColumns="1fr 2fr" gap={4}>
          <Grid templateRows="2fr 3fr" padding={5}>
            <Flex direction='column' alignItems="center" justifyContent="center" height="100%">
              <Photo />
              <Fullname />
              <SocialMedia />
            </Flex>
            <Box textAlign="left">
              <Heading as='h1'>Hello world</Heading>
            </Box>  
          </Grid>
          <Box height="100vh">Section 2</Box>
        </Grid>
      </GridItem>
    </Grid>
  );
}

export default App;
