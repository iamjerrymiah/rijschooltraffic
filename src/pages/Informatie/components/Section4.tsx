import { Box, Center, Heading, Icon, Image, Text } from "@chakra-ui/react";
import Section from "../../../common/Section";
import { MdPhone } from "react-icons/md";
import ContactBtns from "../../../common/Button/ContactBtns";

import imagery from "../../../assets/img/informatie3.webp";

export default function Section1() {
  return (
    <Box my={14}>
      <Center>
        <Heading mb={10} fontSize="3xl">
          Nog meer informatie voor ouders
        </Heading>
      </Center>

      <Section
        leftContent={
          <Box borderRadius="lg" overflow="hidden" w="100%">
            <Image src={imagery} alt="" w="100%" h="auto" p={1} rounded="xl" />
          </Box>
        }
        rightContent={
          <>
            <Box borderRadius="lg" overflow="hidden" w="100%">
              <Heading fontSize="xl">Theorie</Heading>
              <Text fontSize="14px" py={2}>
                Voordat een leerling op een Tussentijdse Toets of praktijkexamen
                mag dient hij of zij in het bezit te zijn van een
                theoriecertificaat. Aangezien de theorie gezien wordt als het
                ‘minst prettige’ van een rijopleiding, wordt het halen hiervan
                vaak genegeerd of er wordt te makkelijk over gedacht. Op
                verschillende manieren proberen wij de leerlingen te wijzen op
                het belang van het spoedig behalen van het theoriecertificaat.
                Bij DIEP Opleidingen heeft u de mogelijk om een theoriecursus te
                nemen als deze niet in het pakket zit.
              </Text>

              <Text my={5}>
                Uiteindelijk blijft de leerling zelf verantwoordelijk voor het
                tijdig behalen van het theoriecertificaat.
              </Text>

              <Heading fontSize="xl">De lesauto’s</Heading>
              <Text fontSize="14px" py={2}>
                Onze instructeurs rijden in veilige en goed onderhouden
                leswagens van het merk Volkswagen en Mercedes. Alle lesauto’s
                zijn recente modellen en beschikken o.a. over airco/climate
                controle, ABS, ESP, airbags rondom en winterbanden tijdens de
                wintermaanden. Onze auto’s worden continu onderhouden door
                erkende vakgarages. De kwaliteit van de veiligheid van uw zoon
                of dochter houden wij hierdoor optimaal. Ook is uw zoon of
                dochter volledig verzekerd in onze leswagen, zowel als
                bestuurder als passagier.
              </Text>
            </Box>

            <ContactBtns
              leftIcon={<Icon as={MdPhone as unknown as React.ElementType} />}
              leftText="085 060 41 10"
              rightText="Contact opnemen"
            />
          </>
        }
      />
    </Box>
  );
}
