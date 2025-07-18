import { Box, Button, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Container } from "../../../styling/layout";

import contact1 from "../../../assets/img/contact1.webp";
import contact2 from "../../../assets/img/contact2.webp";
import contact3 from "../../../assets/img/contact3.webp";

export default function Section1() {
    const cards = [
        { title: "Bel ons", value: "085 060 41 10", img: contact1 },
        { title: "Whatsapp", value: "085 060 41 10", img: contact2 },
        { title: "Email", value: "info@diepopleidingen.nl", img: contact3 }
    ];

    return (
        <Container>
            <Box width="100%">
                <Text align="center" py={20} fontSize="xl">
                    Voor al jouw vragen kan je dagelijks contact opnemen met
                    onze klanten service. Dat kan door ons te bellen, whatsappen
                    of een mailtje te sturen. Alle gegevens kan je hieronder
                    vinden.
                </Text>
                <SimpleGrid columns={{ base: 1, lg: 2, xl: 3 }} spacing={4}
                >
                    {cards.map((card, i) => {
                        return (
                            <Button p={10} display='flex' shadow="xl" rounded="lg" key={i}>
                                <Image src={card.img} alt="" w="20%" h="auto" />
                                <VStack pl={5}>
                                    <Text>{card.title}</Text>
                                    <Text>{card.value}</Text>
                                </VStack>
                            </Button>
                        )
                    })}
                </SimpleGrid>

                <Text align="center" pt={10} pb={20} fontSize="md">
                    Op werkdagen zijn wij telefonisch alleen bereikbaar van
                    12:00 tot 15:00. Tijdens en/of buiten deze tijden zijn wij
                    gewoon altijd bereikbaar via WhatsApp en zullen zo snel
                    mogelijk reageren. Over het algemeen reageren we het snelst
                    op WhatsApp-berichten.
                </Text>
            </Box>
        </Container>
    );
}
