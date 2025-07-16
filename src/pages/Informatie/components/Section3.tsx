import { Box, Center, Heading, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { MdCheckCircleOutline } from "react-icons/md";

export default function Section3() {
  const cards = [
    {
      title: "Een proefles als verrassing",
      text: ` Wil je een proefles als verrassing regelen voor je zoon of dochter?
            Super leuk, gaan we doen! Geef jij maar aan waar en wanneer. Neem
            contact op om deze unieke verrassing te regelen.
        `
    },
    {
      title: "Rijbewijs cadeau geven",
      text: ` Een rijbewijs geeft vrijheid en is daarom een enorm waardevol cadeau. Overweeg 
      je om een lespakket of een aantal lessen cadeau te geven? Bel ons op om de mogelijkheden te bespreken..
        `
    },
    {
      title: "Hoe we je als ouder op de hoogte houden",
      text: `Elke leerling krijgt een persoonlijke instructiekaart in ons online systeem Plango. 
      Deze instructiekaart is inzichtelijk voor instructeur, leerling én ouders/verzorgers.
        `
    }
  ];

  return (
    <Box width="100%">
      <SimpleGrid columns={{ base: 1, lg: 2, xl: 3 }} spacing={4}>
        {cards.map((card, i) => {
          return (
            <Box key={i} shadow="xl" p={10} rounded={40} gap={30}>
              <Center>
                <Icon
                  as={MdCheckCircleOutline as unknown as React.ElementType}
                  color="green.400"
                  fontSize={50}
                />
              </Center>
              <Heading textAlign="center" fontSize="lg" py={5}>
                {card.title}
              </Heading>
              <Text textAlign="center" fontWeight="light">{card.text}</Text>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
