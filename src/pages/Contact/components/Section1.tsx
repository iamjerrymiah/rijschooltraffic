import { Box, Button, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Container } from "../../../styling/layout";

import contact1 from "../../../assets/img/contact1.webp";
import contact2 from "../../../assets/img/contact2.webp";
import contact3 from "../../../assets/img/contact3.webp";

export default function Section1() {
    const cards = [
        {
            title: "Bel ons",
            value: "+31685841714",
            img: contact1,
            link: "tel:+31685841714"
        },
        { title: "Whatsapp", value: "+31685841714", img: contact2, link: "https://wa.me/+31685841714" },
        { title: "Email", value: " traffic70@live.com", img: contact3, link: "mailto: traffic70@live.com" },
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
                <SimpleGrid columns={{ base: 1, lg: 2, xl: 3 }} spacing={4}>
                    {cards.map((card, i) => {
                        return (
                            <a rel="noreferrer" href={card?.link || ""} target="_blank" key={i}>
                                <Button
                                    p={10}
                                    display="flex"
                                    shadow="xl"
                                    rounded="lg"
                                    key={i}
                                >
                                    <Image
                                        src={card.img}
                                        alt=""
                                        w="40px"
                                        h="auto"
                                    />
                                    <VStack pl={5}>
                                        <Text>{card.title}</Text>
                                        <Text>{card.value}</Text>
                                    </VStack>
                                </Button>
                            </a>
                        );
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
