import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box marginTop={20} color={useColorModeValue("gray.600", "gray.200")}>
      <Container as={Stack} maxW={"100%"}>
        <SimpleGrid
          py={10}
          borderTop={"1px solid gainsboro"}
          borderBottom={"1px solid gainsboro"}
          templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack align={"center"}>
            <ListHeader>Product</ListHeader>
            <Link href={"#"}>Overview</Link>
            <Link href={"#"}>Features</Link>
            <Link href={"#"}>Tutorials</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Releases</Link>
          </Stack>
          <Stack align={"center"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Press</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact</Link>
            <Link href={"#"}>Partners</Link>
          </Stack>
          <Stack align={"center"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Status</Link>
          </Stack>
          <Stack align={"center"}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Twitter</Link>
            <Link href={"#"}>Dribbble</Link>
            <Link href={"#"}>Instagram</Link>
            <Link href={"#"}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
        <Text fontSize={"sm"} align={"center"} p={5}>
          © 2022 awesome. All rights reserved
        </Text>
      </Container>
    </Box>
  );
}
