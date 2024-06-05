import { Box, Flex, Link, Spacer, Text, Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <Box bg="brand.700" px={4} py={2} color="white">
      <Flex alignItems="center">
        <Text fontSize="xl" fontWeight="bold">
          MyApp
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" px={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" px={2}>
            About
          </Link>
        </Flex>
        <Spacer />
        <InputGroup maxW="300px">
          <Input placeholder="Search..." />
          <InputRightElement>
            <IconButton
              aria-label="Search"
              icon={<FaSearch />}
              size="sm"
              colorScheme="brand"
            />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default Header;