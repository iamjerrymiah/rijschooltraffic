import {
    Box,
    Flex,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Heading,
    Text,
    VStack,
    Icon,
    Button,
    useDisclosure,
    Center
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import ModalCenter from "../../../common/Modal/ModalCenter";
import TrialForm from "../../../common/Form/TrialFrom";

const faqs = [
    {
        question:
            "Wat is het gemiddeld aantal rijlessen dat iemand nodig heeft?",
        answer: "Je kunt je natuurlijk voorstellen dat dit erg verschilt per leerling. In Nederland heeft een leerling gemiddeld 43 rijlessen nodig. Neem een gratis proefles en krijg professioneel advies van een van onze rijinstructeurs. Met onze unieke examengerichte lesmethode heb je minder gemiddeld aantal rijlessen nodig om te kunnen slagen."
    },
    {
        question:
            "Als ik bij jullie begin met rijlessen moet ik dan al geslaagd zijn voor mijn theorie?",
        answer: "Nee. Je moet geslaagd zijn voor je theorie-examen op de dag dat je gaat afrijden of voor je tussentijdse toets. Ons advies is om je theorie-examen voor het starten van je rijopleiding te reserveren! Vanwege de lange doorlooptijden bij het CBR is het belangrijk dat je zo snel als mogelijk een theorie-examen gaat reserveren! Wij helpen je graag daarmee!"
    },
    {
        question: "Kan ik met spoed mijn rijbewijs halen?",
        answer: "Ja, met de spoedcursus kun je binnen 10 dagen je rijbewijs halen!"
    },
    {
        question: "Wat is een rijbewijs B?",
        answer: "Met Rijbewijs B mag u een personenauto t/m 3.500 kg besturen en maximaal acht personen vervoeren. In tegenstelling tot wat veel mensen denken, mag u met alleen rijbewijs B ook een aanhanger aan de auto koppelen. Zolang het ledig gewicht plus het laadvermogen van de aanhanger maar minder is dan 750 kg. Het trekken van een zwaardere aanhangwagen met alleen rijbewijs B, is ook toegestaan als: 1. het ledig gewicht plus het toegestane laadvermogen van de aanhanger minder is dan het ledig gewicht (kentekengewicht) van de trekauto; én 2. het toegestane gewicht van de totale combinatie niet meer dan 3.500 kg is. Voor zwaardere aanhangers en/of een hoger combinatiegewicht is rijbewijs BE (E achter B) vereist. Lang verhaal kort, een B rijbewijs is een autorijbewijs."
    },
    {
        question:
            "Is het mogelijk om in de avonden en weekenden les te krijgen?",
        answer: "Ja, we geven per instructeur rijles op zaterdag of/en zondag. We geven rijles tot uiterlijk 22.00 uur."
    }
];

const uniquePoints = [
    "De rijschool bestaat sinds 2012",
    "Duidelijk en eerlijk, geen kleine lettertjes!",
    "Veiligheid staat bij ons voorop!",
    "Enthousiaste en geduldige rijinstructeurs",
    "Goed onderhouden lesauto’s",
    "Auto’s verzekerd volgens norm",
    "Hoog slagingspercentage",
    "Uitgebreide app, met instructiekaart",
    "Inzage op rooster van je instructeur en zelf inplannen",
    "Rijles in het Engels",
    "10 jaar+ succesvol in de branche",
    "DE MEEST KWALITATIEVE RIJOPLEIDING"
];

export default function FaqSection() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box py={10}>
            <VStack spacing={2} textAlign="center" mb={4}>
                <Heading size="xl">Veelgestelde vragen</Heading>
                <Text fontSize="sm" maxW="800px">
                    Hieronder heb je een lijst met de meest voorkomende vragen.
                </Text>
            </VStack>

            <Flex
                direction={["column", "column", "column", "row"]}
                gap={6}
                py={10}
                w="100%"
            >
                <Box flex={1} w={["100%", "100%", "100%", "70%"]}>
                    <Accordion allowToggle defaultIndex={[0]}>
                        {faqs.map((faq, i) => (
                            <AccordionItem
                                key={i}
                                border="1px solid #ddd"
                                mb={2}
                                borderRadius="md"
                            >
                                <h2>
                                    <AccordionButton
                                        _expanded={{ bg: "gray.100" }}
                                        px={4}
                                        py={3}
                                    >
                                        <Box
                                            flex="1"
                                            textAlign="left"
                                            fontSize={"18px"}
                                        >
                                            {faq.question}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                {faq.answer && (
                                    <AccordionPanel pb={4} px={4} fontSize="sm">
                                        {faq.answer}
                                    </AccordionPanel>
                                )}
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Box>

                <Box
                    // flex={1}
                    w={["100%", "100%", "100%", "30%"]}
                    bg="gray.900"
                    borderRadius="md"
                    color="white"
                    p={6}
                    overflow="hidden"
                    // minH="450px"
                >
                    <Box>
                        <Heading size="md" mb={4}>
                            {" "}
                            Wat ons uniek maakt
                        </Heading>
                        <VStack align="start" spacing={3}>
                            {uniquePoints.map((point, i) => (
                                <Flex align="center" key={i}>
                                    <Icon
                                        as={
                                            FaCheckCircle as unknown as React.ElementType
                                        }
                                        mr={2}
                                        color="green.400"
                                    />
                                    <Text fontSize="xs" color="white">
                                        {point}
                                    </Text>
                                </Flex>
                            ))}
                        </VStack>
                        <Button
                            colorScheme="orange"
                            mt={6}
                            fontSize={"12px"}
                            fontWeight={400}
                            size="sm"
                            leftIcon={
                                <Icon
                                    as={
                                        FaCheckCircle as unknown as React.ElementType
                                    }
                                />
                            }
                            onClick={onOpen}
                        >
                            Gratis proefles aanvragen
                        </Button>
                    </Box>
                </Box>
            </Flex>

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
