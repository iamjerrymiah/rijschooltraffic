import {
    Box,
    Button,
    Center,
    Heading,
    Input,
    Stack,
    Text,
    Textarea
} from "@chakra-ui/react";
import Section from "../../../common/Section";

import Map from "../../../common/Map/Map";

export default function Section2() {
    return (
        <Box my={10}>
            <Section
                gap={10}
                leftContent={
                    <>
                        <Box
                            borderRadius="lg"
                            overflow="hidden"
                            w="100%"
                            shadow="lg"
                            rounded="xl"
                            p={10}
                        >
                            <Center>
                                <Heading fontSize="xl" mb={5}>
                                    Contactformulier
                                </Heading>
                            </Center>
                            <Text fontSize="14px" py={2} align="center">
                                Wеllicht kun jij ook antwoordеn vindеn op jouw
                                vragеn op onzе pagina mеt Vееlgеstеldе vragеn.
                                Ben je er niet uitgekomen? Schrijf hiеrondеr
                                gеwoon jе vragеn of opmеrkingеn op, еn wе zullеn
                                zo snеl mogеlijk mеt jе in contact trеdеn!
                            </Text>

                            <Stack py={6}>
                                <Input
                                    fontSize={"12px"}
                                    fontWeight={400}
                                    placeholder="Naam"
                                />
                                <Input
                                    fontSize={"12px"}
                                    fontWeight={400}
                                    placeholder="Email"
                                />
                                <Input
                                    fontSize={"12px"}
                                    fontWeight={400}
                                    placeholder="Telefoonnummer"
                                />
                                <Textarea
                                    fontSize={"12px"}
                                    fontWeight={400}
                                    placeholder="Bericht"
                                />

                                <Button
                                    fontSize={"12px"}
                                    fontWeight={400}
                                    colorScheme="orange"
                                    w="100%"
                                    mt={4}
                                >
                                    Verzenden →
                                </Button>
                            </Stack>
                        </Box>
                    </>
                }
                rightContent={
                    <Box borderRadius="lg" overflow="hidden" w="100%">
                        <Map height={"583"} />
                    </Box>
                }
            />
        </Box>
    );
}
