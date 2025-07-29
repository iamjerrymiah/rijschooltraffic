import { Box, Heading, Icon, Image, Text } from "@chakra-ui/react";
import Section from "../../../common/Section";
import { MdPhone } from "react-icons/md";
import ContactBtns from "../../../common/Button/ContactBtns";

import imagery from "../../../assets/img/sec1.webp";

export default function Section6() {
    return (
        <Box my={10}>
            <Section
                leftContent={
                    <Box borderRadius="lg" overflow="hidden" w="100%">
                        <Image src={imagery} alt="" w="100%" h="auto" />
                    </Box>
                }
                rightContent={
                    <>
                        <Box borderRadius="lg" overflow="hidden" w="100%">
                            <Heading mb={3} fontSize="xl">
                                De rijinstructeurs
                            </Heading>
                            <Text fontSize="14px" py={2}>
                                Onze instructeurs beschikken altijd over de
                                benodigde instructiepapieren. Zo zijn wij
                                volledig WRM gecertificeerd. Daarnaast zijn de
                                instructeurs speciaal opgeleid in het begeleiden
                                van leerlingen met faalangst. Deze leerlingen
                                kunnen tegenwoordig zelfs een speciaal
                                faalangstexamen afleggen. Zou u graag meer
                                informatie willen ontvangen over een
                                faalangstexamen, dan raden wij u contact met ons
                                op te nemen.
                            </Text>

                            <Heading fontSize="xl">
                                Algemene voorwaarden
                            </Heading>
                            <Text fontSize="14px" py={2}>
                                In de algemene voorwaarden staan alle
                                voorwaarden, o.a. die met betrekking tot het
                                annuleren van de rijlessen. Annuleren van de
                                rijles binnen 48 uur wordt doorberekend. Klik op
                                algemene voorwaarden om deze te lezen.
                            </Text>
                        </Box>

                        <ContactBtns
                            leftIcon={
                                <Icon
                                    as={MdPhone as unknown as React.ElementType}
                                />
                            }
                            leftText="+31685841714"
                            rightText="Contact opnemen"
                        />
                    </>
                }
            />
        </Box>
    );
}
