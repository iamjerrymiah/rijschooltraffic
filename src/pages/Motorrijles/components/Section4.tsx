import {
    Box,
    Heading,
    Icon,
    Image,
    Text,
    VStack
} from "@chakra-ui/react";
import { Container } from "../../../styling/layout";
import Section from "../../../common/Section";
import { MdPhone } from "react-icons/md";

import imagery from "../../../assets/img/motor5.webp";
import ContactBtns from "../../../common/Button/ContactBtns";

export default function Section4() {
    return (
        <Container>
            <Box my={10}>
                <Section
                    leftContent={
                        <VStack align="start" p={5}>
                            <Heading size="xl">
                                Motorrijschool in Apeldoorn
                            </Heading>

                            <Text fontSize="14px" py={2}>
                                Ben je op zoek naar een betrouwbare en
                                professionele motorrijschool in Apeldoorn en
                                omgeving? Bij DIEP Opleidingen ben je aan het
                                juiste adres voor kwalitatieve motorrijlessen
                                tegen een aantrekkelijke prijs. Onze rijschool
                                staat bekend om zijn ervaren instructeurs,
                                flexibele lesmethoden en hoog
                                slagingspercentage. Neem vandaag nog contact met
                                ons op voor meer informatie of meld je aan voor
                                een proefles. We kijken ernaar uit om je te
                                begeleiden naar het behalen van je
                                motorrijbewijs!
                            </Text>

                            <Text fontSize="14px" py={2}>
                                Bij DIEP Opleidingen geloven we in flexibiliteit
                                en maatwerk. Onze ervaren instructeurs passen de
                                lessen aan op jouw tempo en leerstijl, zodat je
                                op een ontspannen en effectieve manier leert
                                motorrijden. Of je nu behoefte hebt aan extra
                                oefening in voertuigbeheersing of
                                verkeersdeelneming, wij zorgen ervoor dat je
                                alle benodigde vaardigheden onder de knie krijgt
                                om veilig de weg op te gaan.
                            </Text>

                            <Text fontSize="14px" py={2}>
                                Ben je benieuwd naar onze motorrijlessen? Bij
                                DIEP Opleidingen kun je een proefles boeken om
                                kennis te maken met onze lesmethoden en
                                instructeurs. Tijdens deze proefles krijg je een
                                eerste indruk van het motorrijden en ontvang je
                                persoonlijk advies over het vervolg van je
                                opleidingstraject. We voorzien je van alle
                                benodigde materialen, zoals kleding, helm en
                                handschoenen, zodat je vol vertrouwen op de
                                motor stapt.
                            </Text>

                            <Text fontSize="14px" py={2}>
                                Neem vandaag nog contact op met DIEP Opleidingen
                                voor meer informatie over onze motorrijlessen en
                                vraag een vrijblijvende proefles aan. We kijken
                                ernaar uit om je te verwelkomen en samen met jou
                                de weg op te gaan!
                            </Text>

                            <ContactBtns
                                leftIcon={
                                    <Icon
                                        as={
                                            MdPhone as unknown as React.ElementType
                                        }
                                    />
                                }
                                leftText="085 060 41 10"
                                rightText="Gratis proefles aanvragen"
                            />
                        </VStack>
                    }
                    rightContent={
                        <Box borderRadius="lg" overflow="hidden" w="100%">
                            <Image
                                src={imagery}
                                alt=""
                                w="100%"
                                h="auto"
                                p={10}
                            />
                        </Box>
                    }
                />
            </Box>
        </Container>
    );
}
