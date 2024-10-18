import { Box, HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import PortfolioMenu from "./PortfolioMenu";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding={2}>
      <HStack>
        {/* <Image src="" /> */}
        <Text boxSize={12}>UN</Text>
      </HStack>
      <HStack>
        <PortfolioMenu />
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
