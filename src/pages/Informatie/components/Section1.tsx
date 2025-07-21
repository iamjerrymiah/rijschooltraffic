import { Box, Heading, Icon, Image, Text } from "@chakra-ui/react";
import Section from "../../../common/Section";
import { MdPhone } from "react-icons/md";
import ContactBtns from "../../../common/Button/ContactBtns";

import imagery from "../../../assets/img/Informatie_img.webp";

export default function Section1() {
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
            <Box borderRadius="lg" overflow="hidden" w="100%">
              <Heading mb={5}>Informatie voor ouders</Heading>
              <Text fontSize="14px" py={2}>
                Uw zoon of dochter gaat beginnen met het nemen van rijlessen. In
                de loop der jaren is het halen van een rijbewijs steeds
                ingewikkelder geworden. Wij begrijpen dat u als ouder graag wilt
                weten hoe de rijopleiding verloopt. Op deze pagina geven we u
                als ouders wat meer informatie in de zaken die zich afspelen bij
                het behalen van het autorijbewijs. Vroeger was de leeftijd
                waarop je mocht beginnen met autorijles 18 jaar. Tegenwoordig
                mag uw zoon of dochter al beginnen vanaf 16,5 jaar. Afrijden mag
                vanaf 17 jaar. Wij hebben alle informatie voor ouders over
                2toDrive apart voor u op een rijtje gezet. De belangrijkste
                voorwaarde voor rijden onder 18 jaar is het toezicht van een
                begeleider. Lees meer over de voorwaarden voor het aanvragen van
                een begeleiderspas.
              </Text>

              <Heading mb={2} mt={6}>
                Kennismaking
              </Heading>
              <Text fontSize="14px" py={2}>
                Uiteraard begrijpen wij dat het een fijn gevoel kan geven dat u
                op de hoogte bent van bij wie uw zoon of dochter de rijlessen
                doorbrengt. Het is daarom altijd mogelijk om een contactmoment
                te maken waarbij er kennis gemaakt wordt. Zo heeft u een goed
                beeld van de instructeur die met uw kind op pad gaat.
              </Text>
            </Box>

            <ContactBtns
              leftIcon={<Icon as={MdPhone as unknown as React.ElementType} />}
              leftText="085 060 41 10"
              rightText="Gratis proefles aanvragen"
            />
          </>
        }
      />
    </Box>
  );
}
