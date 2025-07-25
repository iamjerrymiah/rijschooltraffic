import {
    Box,
    Button,
    Center,
    Heading,
    HStack,
    Icon,
    SimpleGrid,
    Text,
    useDisclosure,
    VStack
} from "@chakra-ui/react";
import { FaCar, FaCheckCircle } from "react-icons/fa";
import ModalCenter from "../Modal/ModalCenter";
import TrialForm from "../Form/TrialFrom";

const package1 = [
    {
        title: "Actiepakket",
        subtitle: "Alleen voor beginnende leerlingen",
        price: "€450",
        bg: "blue.600",
        features: [
            "10 rijlessen (5x blokuur 100 min)",
            "€100,- pakket korting",
            "Direct beginnen",
            "Vanaf 16,5 jaar",
            "Goedkoper kan niet!"
        ],
        cta: "Direct aanmelden"
    },
    {
        title: "Starterspakket",
        subtitle: "Direct starten met lessen",
        price: "€1625",
        bg: "orange.500",
        features: [
            "25 rijlessen (12x blokuur 100 min)",
            "€50,- pakket korting",
            "Inclusief praktijkexamen",
            "Inclusief voorrijden",
            "Vanaf 16,5 jaar",
            "Betalen in termijnen"
        ],
        cta: "Gratis proefles aanvragen"
    },
    {
        title: "Basispakket",
        subtitle: "Meest gekozen",
        price: "€2175",
        bg: "green.600",
        features: [
            "35 rijlessen (17x blokuur 100 min)",
            "€50,- pakket korting",
            "Inclusief praktijkexamen",
            "Inclusief voorrijden",
            "Vanaf 16,5 jaar",
            "Betalen in termijnen"
        ],
        cta: "Gratis proefles aanvragen"
    },
    {
        title: "GARANTIEPAKKET",
        subtitle: "Complete rijopleiding met examengarantie",
        price: "€3125",
        bg: "orange.600",
        features: [
            "45 rijlessen (22x blokuur 100 min)",
            "€50,- pakket korting",
            "Inclusief tussentijdse toets",
            "Inclusief voorrijden",
            "Inclusief praktijkexamen",
            "Inclusief gratis herexamen",
            "Inclusief theoriecursus",
            "Vanaf 16,5 jaar",
            "Betalen in termijnen"
        ],
        cta: "Gratis proefles aanvragen"
    }
];

const package2 = [
    {
        title: "Starterspakket",
        subtitle: "Direct starten met lessen",
        price: "€1750",
        bg: "orange.500",
        features: [
            "25 rijlessen (12x blokuur 100 min)",
            "€50,- pakket korting",
            "Inclusief praktijkexamen",
            "Inclusief voorrijden",
            "Vanaf 16,5 jaar",
            "Betalen in termijnen"
        ],
        cta: "Gratis proefles aanvragen"
    },
    {
        title: "Basispakket",
        subtitle: "Meest gekozen",
        price: "€2350",
        bg: "green.600",
        features: [
            "35 rijlessen (17x blokuur 100 min)",
            "€50,- pakket korting",
            "Inclusief praktijkexamen",
            "Inclusief voorrijden",
            "Vanaf 16,5 jaar",
            "Betalen in termijnen"
        ],
        cta: "Gratis proefles aanvragen"
    },
    {
        title: "GARANTIEPAKKET",
        subtitle: "Complete rijopleiding met examengarantie",
        price: "€3125",
        bg: "orange.600",
        features: [
            "45 rijlessen (22x blokuur 100 min)",
            "€50,- pakket korting",
            "Inclusief tussentijdse toets",
            "Inclusief voorrijden",
            "Inclusief praktijkexamen",
            "Inclusief gratis herexamen",
            "Inclusief theoriecursus",
            "Vanaf 16,5 jaar",
            "Betalen in termijnen"
        ],
        cta: "Gratis proefles aanvragen"
    }
];

const package3 = [
    {
        title: "Start and Go",
        subtitle: "Voor een snelle start",
        price: "€500",
        bg: "blue.600",
        features: [
            "10 rijlessen (5x blokuur 100 min)",
            "€100,- pakket korting",
            "Direct beginnen"
        ],
        cta: "Direct aanmelden"
    },
    {
        title: "AVB pakket",
        subtitle: "Voertuigbeheersing",
        price: "€700",
        bg: "orange.500",
        features: [
            "10 rijlessen (5x blokuur 100 min)",
            "€50,- pakket korting",
            "Inclusief AVB examen"
        ],
        cta: "Direct aanmelden"
    },
    {
        title: "AVD pakket",
        subtitle: "Verkeersdeelneming",
        price: "€800",
        bg: "green.600",
        features: [
            "10 rijlessen (5x blokuur 100 min",
            "€50,- pakket korting",
            "Inclusief AVD examen"
        ],
        cta: "Direct aanmelden"
    },
    {
        title: "READY TO RIDE",
        subtitle: "Actiepakket",
        price: "€1500",
        bg: "orange.600",
        features: [
            "20 rijlessen (10x blokuur 100 min)",
            "€100,- pakket korting",
            "Inclusief GRATIS proefles",
            "Inclusief AVB examen",
            "Inclusief AVD examen",
            "Betalen in 2 termijnen mogelijk"
        ],
        cta: "Gratis proefles aanvragen"
    }
];

const package4 = [
    {
        title: "Theoriecursus",
        subtitle: "Dag- of avondcursus voor theorie",
        price: "€100",
        bg: "blue.600",
        features: [
            "Klassikaal les",
            "1 daagse cursus",
            "Examengericht",
            "100% slagingskans",
        ],
        cta: "Direct aanmelden"
    },
    {
        title: "Opfriscursus",
        subtitle: "Inkomen na lang geen auto te hebben gereden",
        price: "€220",
        bg: "orange.600",
        features: [
            "4 rijlessen van 60 min",
            "Getrainde rijinstructeurs",
            "Faalangst deskundige",
        ],
        cta: "Direct aanmelden"
    },
    {
        title: "Spoedcursus",
        subtitle: "Binnen 10 dagen je rijbewijs op zak!",
        price: "€1000",
        bg: "green.600",
        features: [
            "Rijlespakket volledig op maat",
            "Zo snel mogelijk afrijden",
            "Inclusief voorrijden",
            "Inclusief praktijkexamen",
        ],
        cta: "Direct aanmelden"
    }
];

export default function LessonPackage({ last }:any) {
    return (
        <Box py={10}>
            <VStack spacing={2} textAlign="center" mb={4}>
                <Heading size="xl">Kies je lespakket</Heading>
                <Text fontSize="sm" maxW="800px">
                    Hieronder kan je onze budgetvriendelijke lespakketten zien.
                    Kies één van onze rijles pakketten die aansluit bij jouw
                    tempo en wensen!
                </Text>
            </VStack>

            <PackageListing
                packages={package1}
                heading="Schakel lespakketten"
                subHeading="Autorijles in een handgeschakelde lesauto voor een rijbewijs B."
            />

            <PackageListing
                columns={[1, 1, 1, 3]}
                packages={package2}
                heading="Automaat lespakketten"
                subHeading="Autorijles in een automaat lesauto voor een rijbewijs B met code 78."
            />

            <PackageListing
                packages={package3}
                heading="Motorrijles pakketten"
                subHeading="Motorrijlessen voor een categorie A, A code 80, A2 rijbewijs."
            />

            {last && 
                <PackageListing
                    columns={[1, 1, 1, 3]}
                    packages={package4}
                    heading="Onze cursussen op een rijtje"
                    // subHeading="Motorrijlessen voor een categorie A, A code 80, A2 rijbewijs."
                />  
            }
        </Box>
    );
}

function PackageListing({
    heading,
    subHeading,
    columns,
    packages
}: {
    heading: string;
    subHeading?: string;
    columns?: any;
    packages: any[];
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box py={4}>
            <VStack textAlign={"center"}>
                <Heading fontSize={"md"}>{heading}</Heading>
                <Text fontSize="sm" mb={3}>
                    {subHeading}
                </Text>
            </VStack>

            <SimpleGrid columns={columns ?? [1, 2, 2, 4]}>
                {packages?.map((pkg: any, idx: any) => (
                    <Box
                        key={idx}
                        h="500px"
                        bg="white"
                        borderRadius="md"
                        boxShadow="sm"
                        overflow="hidden"
                        border="1px solid #eee"
                        transition="0.3s"
                        _hover={{ boxShadow: "lg" }}
                        position={"relative"}
                    >
                        <Box
                            bg={pkg.bg}
                            color="white"
                            textAlign={"center"}
                            p={4}
                            h="70px"
                        >
                            <Heading fontSize="lg">{pkg.title}</Heading>
                            <Text fontSize="xs" mt={1}>
                                {pkg.subtitle}
                            </Text>
                        </Box>

                        <VStack spacing={3} p={[3, 6]}>
                            <Text fontSize="3xl" fontWeight="bold">
                                {pkg.price}
                            </Text>
                            <VStack spacing={2} align="start">
                                {pkg.features.map((feat: any, i: any) => (
                                    <HStack key={i} align="start">
                                        <Icon
                                            as={
                                                FaCheckCircle as unknown as React.ElementType
                                            }
                                            color="green.400"
                                            boxSize={4}
                                            mt={1}
                                        />
                                        <Text fontSize="xs">{feat}</Text>
                                    </HStack>
                                ))}
                            </VStack>
                        </VStack>

                        <Box
                            position={"absolute"}
                            bottom={"20px"}
                            left={"10px"}
                            right={"10px"}
                        >
                            <Button
                                colorScheme="orange"
                                leftIcon={
                                    <Icon
                                        as={
                                            FaCar as unknown as React.ElementType
                                        }
                                    />
                                }
                                size="sm"
                                width="100%"
                                fontWeight={400}
                                fontSize={"12px"}
                                onClick={onOpen}
                            >
                                Gratis proefles aanvragen
                            </Button>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>

            <ModalCenter
                isOpen={isOpen}
                onClose={onClose}
                body={
                    <>
                        <Center>
                            <Heading fontSize="2xl" py={2}>
                                Vraag onze gratis proefles aan!
                            </Heading>
                        </Center>
                        <Text align="center" pb={2} color="orange">
                            Proefles is gratis i.c.m. een lespakket.
                        </Text>
                        <TrialForm />
                    </>
                }
            />
        </Box>
    );
}
