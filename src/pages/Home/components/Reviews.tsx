import {
    Box,
    Flex,
    Text,
    Avatar,
    VStack,
    HStack,
    Icon,
    useBreakpointValue,
    Heading,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

const reviews = [
    {
        name: 'Gabriella Angelista',
        stars: 5,
        content: `Ik heb op 30-10-2018 mijn rijbewijs gehaald bij Rijschool Helena. 
        Ik had geen betere rijlessen kunnen hebben. Hij leert je niet alleen het beheersen van de auto maar, ook echt autorijden. 
        Auto rijden waar je na het halen van je rijbewijs nog elke dag veel aan terug zal denken en wat aan hebt natuurlijk. Zeker een aanrader !!`,
    },
    {
        name: 'Francisca F',
        stars: 4,
        content: `
        Wat een fijne rijschool! Ik heb zoveel dingen geleerd op een leuke en begrijpelijke manier. 
        Geen ene rijles was saai! Ook hebben de rijinstructeurs veel geduld met mij gehad haha. 
        Maar wat het belangrijkste was, is dat zij heel motiverend waren. Ik ben blij dat ik de keuze heb gemaakt om bij jullie te lessen!`,
    },
    {
        name: 'Lucky Lad',
        stars: 4,
        content: `Rijbewijs in 1x gehaald binnen de afgesproken dagen. Goed en duidelijk uitleg gekregen`,
    },
    {
        name: 'Chaan Jageswar',
        stars: 5,
        content: `
        Echt een aanrader!! Na vele rij-instructeurs te hebben versleten ben ik blij met rijschool Diep opleiding. 
        Ik heb super veel geleerd van Noandly, Idries en met name Delicio! Hartstikke bedankt voor jullie geduld en leerzame uurtjes!!!`,
    },
    {
        name: 'Christel Achea',
        stars: 5,
        content: `
        5 sterren- TOP RIJSCHOOL. Vandaag heb ik met trots mijn praktijkexamen mogen behalen. 
        Door de Rijinstructeurs die de tijd voor je nemen, die zeer kwalitatief les aanbieden voor hun leerlingen. 
        Die DIEP door het lesstof gaan met hun leerlingen. Ook hebben zij erg veel geduld met de leerlingen, 
        en zijn erg flexibel met tijden als een bepaald tijdstip jou niet uitkomt. Ik kan mij geen betere rijschool bedenken dan Diep opleidingen!`,
    },
    {
        name: 'Chirin Amor',
        stars: 4,
        content: `Nadat ik gezakt was door de zenuwen, had ik steeds minder vertrouwen in mezelf. 
        Maar gelukkig had ik een top rij instructeur die niet opgaf en genoeg vertrouwen in had in mij!! 
        Ondanks dat ik alles snel wilde leren en altijd met mijn voet plat op het gaspedaal drukte, Lukte t Nen toch om mij te leren hoe het echt moet (tijdens mijn examen dan😝). 
        Toen ik afgelopen donderdag mijn examen had, ging het super goed!! Ik bleef rustig en luisterde naar Nen zijn stem (soms een waarschuwingschreeuw😂) in mijn hoofd. Ik ging geslaagd naar huis!!!
        En daarom bedank ik Rijschool Helena voor het vertrouwen hebben en het niet opgeven op mij!!`,
    },
    {
        name: 'Rik Jansen',
        stars: 4,
        content: `Ik had me geen betere rijschool en/of instructeur kunnen wensen! Noandly neemt de tijd voor zijn leerlingen, snapt waar leerlingen tegenaan lopen en helpt ze op een manier die bij hun past in plaats van “het vaste riedeltje” af te lopen. 
        Ik heb dit bij mijzelf en bij andere leerlingen mogen meemaken. Als je op zoek bent naar een Rijschool die je oprecht leert rijden en leert begrijpen hoe je een auto bestuurt raad ik rijschool Helena ten alle tijden volop aan. 
        Voor iedereen die snel, gunstig geprijsd en op een juiste manier zijn rijbewijs wilt halen, zoek niet verder! Noandly, bedankt jongen!`,
    },
    {
        name: 'Edward Janzen',
        stars: 5,
        content: `Helena rijschool is een top rijschool die flexibelen tijden heb die je echt 100 procent uit jou uiterste laat halen zo dat je zelf vertrouwen om de weg kan rijden om je rijbewijs te kunnen behalen binnen 2 weken heb ik mijn rijbewijs behaald bedankt Nen`,
    },
    {
        name: 'Hamza Ibn Ayyub',
        stars: 4,
        content: `heel flexibel in les plannen en duidelijke communicatie tijdens lessen in een ontspannen maar professionele sfeer. werd op een hoog niveau opgeleid door een uitstekend ervaren instructeur en IN ÉÉN KEER GESLAAGD!!! betere school kan je niet vinden 😉`,
    },
    {
        name: 'Eshagh Mozafari',
        stars: 5,
        content: `Ik wil graag mijn complimenten geven aan deze geweldige rijschool in Apeldoorn. Een erg ervaren, geduldige en vriendelijke rijinstructeur, 
        door zijn duidelijke uitleg en deskundigheid heb ik mijn angst overwonnen en daardoor met plezier rijlessen gevolgd. 
        Ik heb in een zeer korte tijd mijn rijbewijs gehaald voor een automaat auto. 
        Ik raad iedereen aan om rijlessen te nemen bij deze rijschool in Apeldoorn!`,
    },
    // Add more if needed
];

export default function Reviews() {
    const cardWidth = useBreakpointValue({base: '90%', md: '45%', lg: '30%' });

    return (
        <Box py={10} px={[4,10]}>
        
            <VStack spacing={2} textAlign="center" mb={8}>
                <Heading size="xl">Reviews</Heading>
                <Text fontSize="sm" maxW="800px">Lees hieronder de Google reviews van leerlingen die hun rijbewijs bij ons hebben gehaald.</Text>
            </VStack>

            <Box overflowX="scroll" className='scroll-custom-light' bg={'whitesmoke'}>
                <Flex gap={6}>
                    {reviews.map((review, i) => (
                        <Box
                            key={i}
                            bg="white"
                            boxShadow="md"
                            borderRadius="md"
                            p={5}
                            w={cardWidth}
                            minW={cardWidth}
                            flexShrink={0}
                        >
                            <HStack mb={2}>
                                <Avatar name={review?.name} size="md" />
                                <VStack spacing={'-2'}>
                                    <Text fontWeight="semibold">{review.name}</Text>
                                    <HStack spacing={1} mb={3}>
                                        {[...Array(review?.stars)].map((_, i) => (
                                            <Icon key={i} as={FaStar as unknown as React.ElementType} color="orange.400" />
                                        ))}
                                    </HStack>
                                </VStack>
                            </HStack>

                            <Text fontSize="sm" color="gray.700">{review.content}</Text>
                        </Box>
                    ))}
                </Flex>
            </Box> 

        </Box>
    );
}