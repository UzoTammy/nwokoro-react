import { HStack, Link, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import Score from "./StarRating";

const Introduction = () => {
  return (
    <>
      <Text marginTop={3} className="first-letter">
        I am a Chemical Engineering graduate with just one year engineering
        experience. However, most of my experience is in business operations
        spanning over 15 years
      </Text>
      <Text marginY={3} className="first-letter">
        Presently, I am working toward being a fullstack web developer:
      </Text>
      <List spacing={3} paddingLeft={2}>
        <ListItem>
          <HStack justifyContent="space-between">
            <Text>Backend Development: Django & Flask</Text>
            <Score rating={3.5} />
          </HStack>
        </ListItem>
        <ListItem>
          <HStack justifyContent="space-between">
            <Text>Frondend Development: Typescript & React</Text>
            <Score rating={2.5} />
          </HStack>
        </ListItem>
        <ListItem>
          <HStack justifyContent="space-between">
            <Text>SQL: Sqlite, Postgres & MySQL</Text>
            <Score rating={3.5} />
          </HStack>
        </ListItem>
        <ListItem>
          <HStack justifyContent="space-between">
            <Text>Programming Langauge: Python, Javascript & Java</Text>
            <Score rating={3.0} />
          </HStack>
        </ListItem>
        <ListItem>
          <HStack justifyContent="space-between">
            <Text>Others: Github, Bash script & Docker</Text>
            <Score rating={3.0} />
          </HStack>
        </ListItem>
      </List>
      <Text marginTop={3} className="first-letter">
        View my{" "}
        <Link color="pink.500" href="#">
          portfolio
        </Link>{" "}
        to see my personal projects.
      </Text>
    </>
  );
};

export default Introduction;
