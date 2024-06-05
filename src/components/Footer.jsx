import { Box, Flex, Link, Text, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="brand.700" color="white" py={10} px={5}>
      <VStack spacing={5}>
        <Text fontSize="lg" fontWeight="bold">Contact Us</Text>
        <Text>Email: contact@myapp.com</Text>
        <Text>Phone: +123 456 7890</Text>
        <HStack spacing={5}>
          <Link href="https://facebook.com" isExternal>
            <Icon as={FaFacebook} boxSize={6} />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <Icon as={FaTwitter} boxSize={6} />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Icon as={FaInstagram} boxSize={6} />
          </Link>
        </HStack>
        <Text fontSize="sm" textAlign="center">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</Text>
      </VStack>
    </Box>
  );
};

export default Footer;