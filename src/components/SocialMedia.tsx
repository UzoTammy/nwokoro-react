import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, HStack, Link } from "@chakra-ui/react";
import { FaFacebook, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";


const SocialMedia = () => {
  return (
    <HStack gap={10}>
      <Box>
        <Link href="https://www.tiktok.com/@uzotammy?is_from_webapp=1&sender_device=pc" isExternal>
          <FaTiktok color="red" size={25}/>
        </Link>
      </Box>
      <Box>
        <Link href="https://www.x.com/UzoTammy" isExternal>
          <FaTwitter color="#0096ff" size={25}/>
        </Link>
      </Box>
      <Box>
        <Link href="https://youtube.com/@uzotammynwokoro1128?si=viI00JJt5XMGFNDa" isExternal>
          <FaYoutube color="red" size={25}/>
        </Link>
      </Box>
      <Box>
        <Link href="https://www.facebook.com/share/9TNh9xdWhoE6iJE3/?mibextid=qi2Omg" isExternal>
          <FaFacebook color="#0096ff" size={25}/>
        </Link>
      </Box>
    </HStack>
  );
};

export default SocialMedia;
