import {
    Box,
    Button,
    Container,
    Heading,
    Icon,
    Image,
    Text
} from "@chakra-ui/react";
import Section from "../../../common/Section";
import { MdPhone } from "react-icons/md";
import ContactBtns from "../../../common/Button/ContactBtns";

import imagery from "../../../assets/img/sec1.webp";

export default function Section2() {
    return (
        <Box my={10}>
            <Section
                leftContent={
                    <Box borderRadius="lg" overflow="hidden" w="100%">
                        <Image src={imagery} alt="" w="100%" h="auto" p={10} />
                    </Box>
                }
                rightContent={
                    <>
                        <Box
                            borderRadius="lg"
                            overflow="hidden"
                            w="100%"
                            mb={4}
                        >
                            <Heading mb={5}>Wat is 2toDrive?</Heading>
                            <Text fontSize="14px" py={2}>
                                Met 2toDrive kun jij eerder je rijbewijs halen.
                                Je hoeft je niet te registreren voor 2toDrive en
                                mag vanaf 16,5 jaar zelf een rijschool benaderen
                                om te starten met autolessen. Vanaf 17 jaar kun
                                je het rijexamen afleggen. Geslaagd en je
                                rijbewijs in de pocket? Dan mag je tot je 18e de
                                weg op onder begeleiding van een coach. Wel zo
                                handig toch?
                            </Text>

                            <Text fontSize="14px" py={2}>
                                2toDrive bestaat sinds 2011 en is ingevoerd om
                                de verkeersveiligheid te vergroten. Sinds de
                                start hebben al veel jongeren vervroegd hun
                                rijbewijs gehaald. Beginnende bestuurders zijn
                                door minder rijervaring vaker betrokken bij
                                ongelukken dan ervaren bestuurders. 2toDrive
                                zorgt ervoor dat jij onder relatief veilige
                                omstandigheden rijervaring kunt opdoen. Zo word
                                jij een zelfverzekerdere bestuurder en heb je
                                minder kans op brokken in het verkeer.
                            </Text>
                        </Box>

                        <ContactBtns
                            leftIcon={
                                <Icon
                                    as={MdPhone as unknown as React.ElementType}
                                />
                            }
                            leftText="085 060 41 10"
                            rightText="Gratis proefles aanvragen"
                        />
                    </>
                }
            />
        </Box>
    );
}
