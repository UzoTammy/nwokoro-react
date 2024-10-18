import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Photo from "./components/Photo";
import Fullname from "./components/Fullname";

function App() {
  return (
    <Grid templateAreas={{ base: '"nav" "main"' }}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <Grid templateColumns="1fr 2fr" gap={4}>
          <Box position="relative" height="100vh">
            <Box
              position="absolute"
              top="25%" // Half of the upper quarter (which is 25% of the height)
              left="50%"
              transform="translate(-50%, -50%)"
            >
              <Photo />
              <Fullname />
            </Box>
          </Box>
          <Box height="100vh">Section 2</Box>
        </Grid>
      </GridItem>
    </Grid>
  );
}

export default App;
