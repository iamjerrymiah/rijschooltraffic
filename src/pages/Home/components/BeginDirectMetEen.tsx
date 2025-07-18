import { Box, Heading, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { Container } from "../../../styling/layout";
import Section from "../../../common/Section";
import { MdPhone } from "react-icons/md";
import ContactBtns from "../../../common/Button/ContactBtns";

import secImg from '../../../assets/img/informatie5.webp'

export default function BeginDirectMetEen({ region }: any) {

    return (
            <Container>
                <Box my={10}>
                    <Section 
                        leftContent={(
                            <VStack align="start">
                                <Heading size="lg">Begin direct met een gratis proefles</Heading>
                                <Text fontSize="14px" py={2}>
                                    Wil je graag in één keer slagen voor je rijbewijs bij een erkende rijschool in Apeldoorn? Dan is DIEP Opleidingen Autorijschool de juiste keuze voor jou. 
                                    Bij onze verkeersschool draait alles om jou. We hebben zorgvuldig gekozen rijinstructeurs die er alles aan doen om ervoor te zorgen dat je slaagt voor je eerste rijexamen. 
                                    Je krijgt les van dezelfde instructeur, wat je kans op slagen vergroot. 
                                </Text>
                                <Text fontSize="14px" py={2}>
                                    Wil je graag rijlessen van hoge kwaliteit en een grotere kans hebben om te slagen bij je eerste examen? Of wil je eerst meer informatie om te oriënteren? 
                                    Ons slagingspercentage is hoog en we hebben professionele rijinstructeurs die je uitstekend kunnen voorbereiden op je rijexamen voor rijbewijs B. 
                                    Je kunt bij ons een gratis proefles volgen, dus meld je snel aan! Wie weet kun je binnenkort zelfstandig naar de Apenheul rijden.
                                </Text>

                                <Heading fontSize={'md'}>Bij de leukste rijschool in Apeldoorn</Heading>

                                <Text fontSize="14px" py={2}>
                                    Onze rijschool biedt leerzame en plezierige rijlessen voor verschillende soorten voertuigen. We houden rekening met jouw individuele wensen. 
                                    De meeste mensen hebben maar een beperkt aantal lessen nodig om het rijexamen af te leggen. 
                                    Maar ook als je meer tijd nodig hebt, ben je bij ons welkom. We werken persoonlijk en doelgericht, zodat iedereen succesvol kan zijn tijdens de rijles.
                                </Text>

                                <Text fontSize="14px" py={2}>
                                    Ontmoet onze verkeersrijschool en volg rijlessen in Apeldoorn. Vraag ons vandaag nog naar de prijzen van de verschillende rijopleidingspakketten en ga zo snel mogelijk de weg op met een van onze docenten. 
                                    Het regelen van rijlessen was nog nooit zo snel en makkelijk.
                                </Text>

                                <ContactBtns
                                    leftIcon={<Icon as={MdPhone as unknown as React.ElementType} />}
                                    leftText="085 060 41 10"
                                    rightText="Gratis proefles aanvragen"
                                />
                            </VStack>
                        )}
                        rightContent={(
                            <Box borderRadius="lg" overflow="hidden" w="100%">
                                <Image src={secImg} alt="" w="100%" h="auto" />
                            </Box>
                        )}
                    />
                </Box>
            </Container>
    )
}
