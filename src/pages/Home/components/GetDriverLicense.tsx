import { Box, Button, Center, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Container } from "../../../styling/layout";

import informatie3 from "../../../assets/img/informatie3.webp";
import region3Img from "../../../assets/img/region3_img.webp";
import { useNavigate } from "react-router";

export default function GetDriverLicense() {

    const navigate = useNavigate()

    return (
        <Box bg="gray.50" py={10} px={[4,10,10,28]}>
            <Container>
                <VStack spacing={2} textAlign="center" mb={8}>
                    <Heading size="xl">Rijbewijs halen bij DIEP opleidingen?</Heading>
                    <Text fontSize="sm" maxW="800px">
                        Opzoek naar de meest kwalitatieve rijopleiding van Nederland? Dan heb je bij ons je bestemming bereikt.
                        Wil je dit jaar nog je rijbewijs halen? Meld je dan snel aan voor een proefles.
                        Geen theorie? Geen probleem! Wij helpen je graag daarmee.
                    </Text>
                </VStack>

                <SimpleGrid columns={[1,2]} spacing={4}>
                    <Box
                        borderRadius="lg"
                        overflow="hidden"
                        w="100%"
                        shadow="md"
                        rounded="xl"
                    >
                        <Image src={informatie3} alt="" w="100%" h="300px" objectFit={'cover'}/>
                        <Heading textAlign={'center'} fontSize="sm" mt={5} px={5}>Rijlespakketten</Heading>
                        <Text textAlign="center" px={5} fontSize={'xs'}>
                            Bij DIEP Opleidingen bieden wij verschillende voordelige
                            pakketten aan. We kunnen ook een pakket volledig op maat maken
                            wat precies past bij jou.
                        </Text>
                        <Center>
                            <Button
                                fontSize={"12px"}
                                fontWeight={400}
                                colorScheme="orange"
                                my={5}
                                onClick={()=>navigate('/tarieven')}
                            >
                                Bekijk pakketten
                            </Button>
                        </Center>
                    </Box>

                    <Box
                        borderRadius="lg"
                        overflow="hidden"
                        w="100%"
                        shadow="md"
                        rounded="xl"
                    >
                        <Image src={region3Img} alt="" w="100%" h="300px" objectFit={'cover'} />
                        <Heading textAlign={'center'} fontSize="sm" mt={5} px={5}>Binnen 1 maand je rijbewijs</Heading>
                        <Text textAlign="center" px={5} fontSize={'xs'}>
                            Je vraagt je zeker af hoe dat kan. Door middel van onze unieke
                            examen gerichte les methode en onze unieke instructie video’s
                            kan jij binnen 1 maand je rijbewijs halen
                        </Text>
                        <Center>
                            <Button
                                fontSize={"12px"}
                                fontWeight={400}
                                colorScheme="orange"
                                my={5}
                                onClick={()=>navigate('/spoedcursus')}
                            >
                                Meer informatie
                            </Button>
                        </Center>
                    </Box>
				</SimpleGrid>


            </Container>
        </Box>
    )
}
