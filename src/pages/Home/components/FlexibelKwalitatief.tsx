import { Box, Heading, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { Container } from "../../../styling/layout";
import Section from "../../../common/Section";
import { MdCheckCircleOutline, MdPhone } from "react-icons/md";
import ContactBtns from "../../../common/Button/ContactBtns";

import secImg from "../../../assets/img/informatie5.webp";

export default function FlexibelKwalitatief() {
    return (
        <Container>
            <Box my={10}>
                <Section
                    leftContent={
                        <VStack align="start">
                            <Heading size="lg">
                                Flexibel, kwalitatief & betaalbaar!
                            </Heading>
                            <Text fontSize="14px" py={2}>
                                Wij bieden rijlessen aan waarbij een instructeur
                                je thuis kan ophalen in Apeldoorn of omgeving.
                                Het is ook mogelijk om opgehaald te worden van
                                werk of school. Bij RijSchool Traffic
                                Opleidingen is het geen probleem om overdag of
                                ‘s avonds lessen te volgen, aangezien we erg
                                flexibel zijn. We bieden verschillende opties
                                voor rijlespakketten, zoals losse lessen, een
                                spoedopleiding of een voordelig startpakket.
                            </Text>
                            <Text fontSize="14px" py={2}>
                                We bieden rijlessen aan die zijn afgestemd op
                                jouw behoeften, met persoonlijke begeleiding en
                                een ontspannen en leuke sfeer in de auto. Onze
                                opleiding volgt een logische stapsgewijze aanpak
                                en je krijgt persoonlijke aandacht van je vaste
                                instructeur.
                            </Text>
                            <VStack align="start" pt={2}>
                                {[
                                    "Rijlessen mogelijk in het Nederlands en Engels",
                                    "Afnemen van losse rijlessen mogelijk",
                                    "In termijnen betalen met iDeal"
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

                            <Text fontSize="14px" py={2}>
                                We bieden rijlessen en het examen aan in
                                dezelfde auto. Een spoedopleiding is ook
                                mogelijk en we bieden begeleiding bij het
                                behalen van het theorie-examen. Aan de hand van
                                onze slagingspercentage kunnen wij met trots
                                zeggen dat wij de beste rijopleiding in
                                Gelderland bieden.
                            </Text>

                            <ContactBtns
                                leftIcon={
                                    <Icon
                                        as={
                                            MdPhone as unknown as React.ElementType
                                        }
                                    />
                                }
                                leftText="+31685841714"
                                rightText="Gratis proefles aanvragen"
                            />
                        </VStack>
                    }
                    rightContent={
                        <Box borderRadius="lg" overflow="hidden" w="100%">
                            <Image src={secImg} alt="" w="100%" h="auto" />
                        </Box>
                    }
                />
            </Box>
        </Container>
    );
}
