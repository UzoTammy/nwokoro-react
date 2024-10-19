import {Avatar, HStack,Wrap,WrapItem} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import PortfolioMenu from "./PortfolioMenu";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding={2}>
      <Wrap>
        <WrapItem>
          <Avatar colorScheme="white" name="Uzo Nwokoro" src="#" />
        </WrapItem>
      </Wrap>
      
      <HStack>
        <PortfolioMenu />
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
