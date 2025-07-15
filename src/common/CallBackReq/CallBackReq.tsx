import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text
} from "@chakra-ui/react";

import heroImg from "../../assets/img/overons_hero.jpeg";

export default function CallBackReq() {
  return (
    <Box
      bgImage={heroImg}
      bgSize="cover"
      bgPosition="center"
      minH="90vh"
      px={[4, 8, 8, 20]}
      py={{ base: 6, md: 12 }}
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        align="flex-start"
        gap={10}
        m={[4, 4, 4, 10]}
      >
        <Box mt={[0, 0, 0, 90]}>
          <Heading as="h2" size="xl" color="white" mb={4}>
            Zullen we je terugbellen?
          </Heading>
          <Text color="white" mb={4}>
            Vul je gegevens in en wij nemen spoedig contact met je op .
          </Text>
        </Box>

        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="lg"
          w={["100%", "100%", "100%", "400px"]}
          p={10}
        >
          <Heading as="h2" size="md" textAlign="center" mb={4}>
            Terugbelverzoek
          </Heading>

          <Text fontSize="15px" mb={4} textAlign="center">
            Laat je nummer achter zodat wij je terug kunnen bellen.
          </Text>

          <Stack>
            <Input fontSize={"12px"} fontWeight={400} placeholder="Naam" />
            <Input
              fontSize={"12px"}
              fontWeight={400}
              placeholder="Telefoonnummer"
            />
          </Stack>

          <Button
            fontSize={"12px"}
            fontWeight={400}
            colorScheme="orange"
            w="100%"
            mt={4}
          >
            Ja, bel mij terug! →
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
