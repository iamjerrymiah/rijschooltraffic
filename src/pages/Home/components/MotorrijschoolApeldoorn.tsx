import { Box, Heading, Icon, Image, Link, Text, VStack } from "@chakra-ui/react";
import { Container } from "../../../styling/layout";
import Section from "../../../common/Section";
import { MdCheckCircleOutline, MdPhone } from "react-icons/md";
import { useNavigate } from "react-router";
import ContactBtns from "../../../common/Button/ContactBtns";

import secImg from '../../../assets/img/informatie5.webp'


export default function MotorrijschoolApeldoorn() {
    
    const navigate = useNavigate()

    return (
            <Container>
                <Box my={10}>
                    <Section 
                        leftContent={(
                            <VStack align="start">
                                <Heading size="lg">Motorrijschool Apeldoorn</Heading>
                                <Text fontSize="14px" py={2}>
                                    Bij DIEP Opleidingen bieden we ook motorrijlessen aan. Ervaar de vrijheid van de open weg en de opwinding van het motorrijden onder begeleiding van onze ervaren instructeurs. 
                                    Onze motorrijschool in Apeldoorn staat klaar om je te helpen jouw motorrijbewijs te behalen.
                                </Text>
                                <VStack align="start" pt={2}>
                                    {[
                                        "Ervaren instructeurs: Onze instructeurs zijn gepassioneerde motorrijders met uitgebreide ervaring. Ze begeleiden je stap voor stap door het leerproces en zorgen ervoor dat je zelfverzekerd en veilig de weg op gaat.",
                                        "Op maat gemaakt lesprogramma: We passen onze lessen aan op jouw niveau en behoeften, of je nu een beginner bent of je rijvaardigheden wilt verfijnen. Zo kun je op jouw eigen tempo en comfortabel leren motorrijden.",
                                        "Examengerichte aanpak: Ons lesprogramma is ontworpen met het oog op het behalen van het praktijkexamen. We volgen de examenrichtlijnen en bereiden je grondig voor, zodat je met vertrouwen en succes het examen kunt afleggen.",
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
                                    Bij DIEP Opleidingen streven we ernaar om jou een geweldige ervaring te bieden op weg naar het behalen van je motorrijbewijs. 
                                    Ontdek de spanning van motorrijden en schrijf je vandaag nog in voor een proef <Link color={'orange'} onClick={()=>navigate(`/motorrijles-apeldoorn`)}>bij onze motorrijschool!</Link>!
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
