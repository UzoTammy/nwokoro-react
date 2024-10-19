import { Image } from "@chakra-ui/react";
import pic from '../assets/UzoTammy.jpg'

const Photo = () => {
  return (
    <Image
      boxShadow='dark-lg'
      borderRadius="20px"
      boxSize="300px"
      src={pic}
      alt="Uzo Tammy Nwokoro"
    />
  );
};

export default Photo;
