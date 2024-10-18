import { Image } from "@chakra-ui/react";

const Photo = () => {
  return (
    <Image
      borderRadius="full"
      boxSize="150px"
      src="https://bit.ly/dan-abramov"
      alt="Dan Abramov"
    />
  );
};

export default Photo;
