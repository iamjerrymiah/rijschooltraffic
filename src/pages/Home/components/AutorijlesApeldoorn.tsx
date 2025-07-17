import { Box, Heading, Icon, Image, Link, Text, VStack } from "@chakra-ui/react";
import { Container } from "../../../styling/layout";
import Section from "../../../common/Section";
import { MdCheckCircleOutline, MdPhone } from "react-icons/md";
import ContactBtns from "../../../common/Button/ContactBtns";
import { useNavigate } from "react-router";

import secImg from '../../../assets/img/informatie5.webp'

export default function AutorijlesApeldoorn() {

    const navigate = useNavigate()

    return (
            <Container>
                <Box my={10}>
                    <Section 
                        leftContent={(
                            <VStack align="start">
                                <Heading size="lg">Autorijles Apeldoorn</Heading>
                                <Text fontSize="14px" py={2}>
                                    Wil jij je rijbewijs B halen bij DIEP Opleidingen? Onze rijschool in Apeldoorn en omstreken geeft jou die kans in goed verzorgde lesauto’s met vakkundige instructeurs. 
                                    Je mag bij ons al beginnen met je eerste rijles als je 16,5 jaar oud bent. Op je 17e verjaardag kan je direct afrijden. 
                                    Tot je 18e verjaardag mag je samen met je begeleider achter het stuur. Op je 18e verjaardag mag je direct al volledig zelfstandig auto rijden!
                                </Text>
                                <Text fontSize="14px" py={2}>
                                    Je hebt bij ons de keuze om rijles te volgen in een handgeschakelde en automaat lesauto. 
                                    Houd er wel rekening mee dat je met een automaat rijbewijs, oftewel rijbewijs B met code 78, je enkel in een automaat auto mag rijden.
                                </Text>
                                <VStack align="start" pt={2}>
                                    {[
                                        "Goed onderhouden lesauto’s",
                                        "Uitgebreide app, met instructiekaart",
                                        "Duidelijk en eerlijk, geen kleine lettertjes!",
                                    ].map((item, i) => (
                                        <Text key={i} fontSize={["14px", "12px"]}>
                                        <Icon
                                            as={MdCheckCircleOutline as unknown as React.ElementType}
                                            color="green.400"
                                            mr={2}
                                        />
                                        {item}
                                        </Text>
                                    ))}
                                </VStack>

                                <Text fontSize="14px" py={2}>
                                    Wil je autorijlessen volgen en heb je al een keuze gemaakt of je in een schakel of automaat wilt rijden? Dan volgen de rijlessen. 
                                    De rijlessen zijn bij ons examengericht, wat dus wilt zeggen dat we voornamelijk gaan rijden op de examenroutes van het CBR. 
                                    Zo zal het praktijkexamen aanvoelen als een herhaling van de lessen, waardoor het een stuk makkelijker wordt om te slagen. 
                                    Interesse? Vraag een gratis proefles aan voor autorijles bij onze <Link color={'orange'} onClick={()=>navigate(`/autorijschool-apeldoorn`)}>autorijschool in Apeldoorn</Link>!
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
