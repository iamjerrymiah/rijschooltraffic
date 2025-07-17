import { Box, Heading, Icon, Image, Link, Text, VStack } from "@chakra-ui/react";
import { Container } from "../../../styling/layout";
import Section from "../../../common/Section";
import { MdCheckCircleOutline, MdPhone } from "react-icons/md";
import ContactBtns from "../../../common/Button/ContactBtns";
import { useNavigate } from "react-router";

import secImg from '../../../assets/img/informatie5.webp'

export default function TheoriecursusApeldoorn() {

    const navigate = useNavigate()

    return (
            <Container>
                <Box my={10}>
                    <Section 
                        leftContent={(
                            <VStack align="start">
                                <Heading size="lg">Theoriecursus Apeldoorn</Heading>
                                <Text fontSize="14px" py={2}>
                                    Wil je jouw theoriecertificaat halen? Dan raden wij aan een theoriecursus te volgen. Met een theoriecursus is slagen voor het theorie-examen zo goed als gegarandeerd. 
                                    Je leert op een examengerichte wijze met handige ezelsbruggetjes en echte examenvragen. Omdat wij al jarenlang in deze branche zitten, weten wij precies hoe het examen inelkaar zit. 
                                </Text>
                                <VStack align="start" pt={2}>
                                    {[
                                        "Slagen is zo goed als gegarandeerd",
                                        "Examengericht met handige ezelsbruggetjes",
                                        "Dag- en avondopleiding mogelijk",
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
                                    Wat het nog beter maakt is dat je na je theoriecursus dezelfde dag nog het examen in kan. 
                                    Doordat je het theorie-examen in gaat met de verse lesstof, is de kans op slagen nog groter! Door onze unieke aanpak slagen bijna al onze leerlingen in één keer. 
                                    Bespaar geld met een theoriecursus door zakken te voorkomen bij <Link color={'orange'} onClick={()=>navigate(`/theoriecursus`)}>theoriecursus Apeldoorn</Link>!
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
