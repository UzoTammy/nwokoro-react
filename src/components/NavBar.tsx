import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding={2}>
      {/* <Image src="" /> */}
      <Text boxSize={12}>UN</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
