import { Box, Heading, Icon, Image, Text } from "@chakra-ui/react";
import Section from "../../../common/Section";
import { MdPhone } from "react-icons/md";
import ContactBtns from "../../../common/Button/ContactBtns";

import imagery from "../../../assets/img/informatie2.webp";

export default function Section2() {
  return (
    <Box my={10}>
      <Section
        leftContent={
          <>
            <Box borderRadius="lg" overflow="hidden" w="100%">
              <Heading mb={5}>Proefles informatie voor ouders</Heading>
              <Text fontSize="14px" py={2}>
                De interesse is gewekt om bij DIEP Opleidingen te gaan lessen,
                LEUK! Om een indruk te krijgen of er een klik is tussen de
                leerling en de instructeur is het mogelijk om vrijblijvend een
                proefles af te nemen. Er is dus na de proefles geen verplichting
                tot pakketafname. Wel worden er kosten in rekening gebracht voor
                de vrijblijvende proefles*. Indien na de proefles wordt besloten
                om een pakket af te nemen, worden de kosten van de proefles in
                mindering gebracht van de gekozen lespakket.
              </Text>

              <Text fontSize="14px" py={2}>
                Tijdens deze proefles krijgt de leerling de kans om goed kennis
                te maken met de instructeur waar hij/zij de weg mee op gaat.
                Daarnaast kan de instructeur kennis maken met de vaardigheden
                van de leerling en hiermee een inschatting van de leerling
                maken. Na deze proefles zou er een indicatie gegeven kunnen
                worden hoeveel rijlessen er ongeveer nodig zijn. Uiteraard
                blijft dit altijd een schatting. Er wordt informatie met de
                leerling gedeeld over hoe het hele proces gaat verlopen en wat
                er bijvoorbeeld van de leerling verwacht wordt door onder andere
                het CBR.
              </Text>
            </Box>

            <ContactBtns
              leftIcon={<Icon as={MdPhone as unknown as React.ElementType} />}
              leftText="085 060 41 10"
              rightText="Contact opnemen"
            />
          </>
        }
        rightContent={
          <Box borderRadius="lg" overflow="hidden" w="100%">
            <Image src={imagery} alt="" w="100%" h="auto" p={10} />
          </Box>
        }
      />
    </Box>
  );
}
