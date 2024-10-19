import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const PortfolioMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Portfolio
      </MenuButton>
      <MenuList>
        <MenuItem as='a'  href="#">Scush: A Django project</MenuItem>
        <MenuItem as='a'  href="#">Finuel: Another Django Project</MenuItem>
        <MenuItem as='a'  href="#">Game Hub: A React, Typescript and Chakra project</MenuItem>
        <MenuItem as='a'  href="#">My Blog: A Flask project</MenuItem>
        <MenuItem as='a'  href="#">Dfads</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PortfolioMenu;
