import { Container, Heading, Text, VStack } from "@chakra-ui/react";

export default function LessonPackage() {
  return (
    <Container>
      <VStack align="center" mt={20} mb={10}>
        <Heading size="lg">Kies je lespakket</Heading>
        <Text ml={1} as="span" align="center">
          Hieronder kan je onze budgetvriendelijke lespakketten zien. Kies één
          van onze rijles pakketten die aansluit bij jouw tempo en wensen!
        </Text>

        <Heading size="md" mt={7}>Schakel lespakketten</Heading>
        <Text ml={1} as="span" align="center">
          Autorijles in een handgeschakelde lesauto voor een rijbewijs B.
        </Text>
      </VStack>
    </Container>
  );
}
