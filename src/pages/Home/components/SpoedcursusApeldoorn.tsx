import { Box, Heading, Icon, Image, Link, Text, VStack } from "@chakra-ui/react";
import { Container } from "../../../styling/layout";
import Section from "../../../common/Section";

import secImg from '../../../assets/img/informatie5.webp'
import { useNavigate } from "react-router";
import { MdCheckCircleOutline, MdPhone } from "react-icons/md";
import ContactBtns from "../../../common/Button/ContactBtns";

export default function SpoedcursusApeldoorn({ region }: any) {

    const navigate = useNavigate()

    return (
            <Container>
                <Box my={10}>
                    <Section 
                        leftContent={(
                            <Box borderRadius="lg" overflow="hidden" w="100%">
                                <Image src={secImg} alt="" w="100%" h="auto" />
                            </Box>
                        )}
                        rightContent={(
                            <VStack align="start">
                                <Heading size="lg">Spoedcursus rijbewijs {region ? region : "Apeldoorn"}</Heading>
                                <Text fontSize="14px" py={2}>
                                    Kan je niet wachten en wil je zo snel mogelijk je rijbewijs halen? Met een spoedcursus 
                                    rijbewijs kan je bij DIEP Opleidingen binnen 1, 2 of 3 weken al je rijbewijs halen. 
                                    Je wordt in een korte tijd helemaal klaargestoomt voor het examen. 
                                </Text>
                                <Text fontSize="14px" py={2}>
                                    Eerst neem je een intakeles van 120 minuten. Aan de hand van de intakeles kijkt je rijinstructeur samen met jou hoeveel rijlessen je ongeveer nodig zult hebben. 
                                    Vervolgens maak je samen met je instructeur een planning voor de lessen wat past bij jouw agenda.
                                </Text>
                                <VStack align="start" pt={2}>
                                    {[
                                        "Binnen 1 tot 3 weken je rijbewijs",
                                        "Examengerichte rijlessen",
                                        "Hoog slagingspercentage",
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
                                    De rijbewijs snelcursus is volledig aangepast op jouw niveau. 
                                    Onze geduldige en ervaren instructeurs maken je met onze unieke lesmethode in een korte tijd klaar voor het examen. 
                                    De meeste slagen in één keer! Klik op <Link color={'orange'} onClick={()=>navigate(`/spoedcursus`)}>spoedcursus rijbewijs {region ? region : "Apeldoorn"} </Link>voor meer informatie.
                                </Text>

                                <ContactBtns
                                    leftIcon={<Icon as={MdPhone as unknown as React.ElementType} />}
                                    leftText="085 060 41 10"
                                    rightText="Gratis proefles aanvragen"
                                />
                            </VStack>
                        )}
                    />
                </Box>
            </Container>
    )
}
