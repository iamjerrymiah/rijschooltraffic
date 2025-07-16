import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import Section from "../../../common/Section";
import { MdPhone } from "react-icons/md";
import ContactBtns from "../../../common/Button/ContactBtns";

export default function Section3() {
  return (
    <Box my={10} px={[4, 10, 10, 28]}>
      <Section
        leftContent={
          <>
            <Box borderRadius="lg" overflow="hidden" w="100%">
              <Heading mb={5}>Diverse prijzen</Heading>
              <Text fontSize="14px" py={2}>
                Alle examenonderdelen kun je voorafgaand aan je rijles al
                lezen/bestuderen. In een persoonlijk lesrapport wordt elk
                examenonderdeel zorgvuldig vastgelegd. Je houdt op deze manier
                een goed beeld van je kennis en kunde.
              </Text>

              <Text fontSize="14px" py={2}>
                beeld van je kennis en kunde. Je rijlessen kun je zelfstandig
                via de app of via onze klantenservice plannen op tijden en dagen
                die voor jullie allebei het beste uitkomen. Je examendatum
                bepaal je samen met je instructeur.
              </Text>
            </Box>

            <ContactBtns
              leftIcon={<Icon as={MdPhone as unknown as React.ElementType} />}
              leftText="085 060 41 10"
              rightText="Gratis proefles aanvragen"
            />
          </>
        }
        rightContent={<Box borderRadius="lg" overflow="hidden" w="100%"></Box>}
      />
    </Box>
  );
}
