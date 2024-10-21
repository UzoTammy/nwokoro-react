import { ChevronDownIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Button,Link, Menu, MenuButton, MenuItem, MenuList, textDecoration } from "@chakra-ui/react";

const PortfolioMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Portfolio
      </MenuButton>
      <MenuList>
        <MenuItem>Scush: <Link textDecoration='none' _hover={{ textDecoration: 'none' }} href="https://scush.com.ng" isExternal>Django project <ExternalLinkIcon mx='2px' /></Link></MenuItem>
        <MenuItem>Finuel: <Link textDecoration='none' _hover={{ textDecoration: 'none' }} href="https://www.finuel.org" isExternal>Django project <ExternalLinkIcon mx='2px' /></Link></MenuItem>
        <MenuItem>Game Hub: <Link textDecoration='none' _hover={{ textDecoration: 'none' }} href="#" isExternal>React & Typescript project<ExternalLinkIcon mx='2px' /></Link></MenuItem>
        <MenuItem>My Blog:  <Link textDecoration='none' _hover={{ textDecoration: 'none' }} href="#" isExternal>Flask project <ExternalLinkIcon mx='2px' /></Link></MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PortfolioMenu;
