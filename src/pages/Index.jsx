import { Box, Container, Flex, Text, VStack, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Text fontSize="xl" fontWeight="bold">
          MyApp
        </Text>
        <Spacer />
        <Link as={RouterLink} to="/" p={2} _hover={{ textDecoration: "none", bg: "blue.700" }}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" p={2} _hover={{ textDecoration: "none", bg: "blue.700" }}>
          About
        </Link>
      </Flex>
      <Box as="main" p={4}>
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is a simple React app with a basic structure.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;