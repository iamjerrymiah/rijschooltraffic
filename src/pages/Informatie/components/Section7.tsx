import {
    Box,
    Center,
    Heading,
    Icon,
    Image,
    SimpleGrid,
    Text,
    VStack
} from "@chakra-ui/react";

import imagery from "../../../assets/img/lessen_vanaf.webp";
import { MdCheckCircleOutline } from "react-icons/md";

export default function Section7() {
    return (
        <Box width="100%" py={5}>
            <Center>
                <Heading fontSize="4xl" mt={5} mb={10}>
                    Daarom RijSchool Traffic Opleidingen
                </Heading>
            </Center>
            <SimpleGrid columns={{ base: 1, lg: 2, xl: 3 }} spacing={4}>
                <Box>
                    <VStack align="start" pt={2}>
                        {[
                            "De rijschool bestaat sinds 2009",
                            "Duidelijk en eerlijk, geen kleine lettertjes!",
                            "Veiligheid staat bij ons voorop!",
                            "Enthousiaste en geduldige rijinstructeurs",
                            "Goed onderhouden lesauto’s",
                            "Auto’s verzekerd volgens norm"
                        ].map((item, i) => (
                            <Text key={i} fontSize={["14px", "12px"]}>
                                <Icon
                                    as={
                                        MdCheckCircleOutline as unknown as React.ElementType
                                    }
                                    color="green.400"
                                    mr={2}
                                />
                                {item}
                            </Text>
                        ))}
                    </VStack>
                </Box>

                <Box>
                    <VStack align="start" pt={2}>
                        {[
                            "Hoog slagingspercentage",
                            "Uitgebreide app, met instructiekaart",
                            "Inzage op rooster van je instructeur en zelf inplannen",
                            "Rijles in het Engels",
                            "10 jaar+ succesvol in de branche",
                            "DE MEEST KWALITATIEVE RIJOPLEIDING"
                        ].map((item, i) => (
                            <Text key={i} fontSize={["14px", "12px"]}>
                                <Icon
                                    as={
                                        MdCheckCircleOutline as unknown as React.ElementType
                                    }
                                    color="green.400"
                                    mr={2}
                                />
                                {item}
                            </Text>
                        ))}
                    </VStack>
                </Box>

                <Box borderRadius="lg" overflow="hidden" w="100%">
                    <Image src={imagery} alt="" w="100%" h="auto" />
                </Box>
            </SimpleGrid>
        </Box>
    );
}
