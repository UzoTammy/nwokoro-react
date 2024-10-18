import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const PortfolioMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Portfolio
      </MenuButton>
      <MenuList>
        <MenuItem as='a'  href="#">Link 1</MenuItem>
        <MenuItem as='a'  href="#">Link 2</MenuItem>
        <MenuItem as='a'  href="#">Link 3</MenuItem>
        <MenuItem as='a'  href="#">Link 4</MenuItem>
        <MenuItem as='a'  href="#">Link 5</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PortfolioMenu;
