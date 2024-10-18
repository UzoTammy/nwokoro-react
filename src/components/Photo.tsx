import { Image } from "@chakra-ui/react";
import pic from '../assets/UzoTammy.jpg'

const Photo = () => {
  return (
    <Image
      borderRadius="20px"
      boxSize="200px"
      src={pic}
      alt="Uzo Tammy Nwokoro"
    />
  );
};

export default Photo;
