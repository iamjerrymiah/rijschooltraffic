import { Box, Button, Container, Heading, Icon, Text } from "@chakra-ui/react";
import Section from "../../../common/Section";
import { MdPhone } from "react-icons/md";
import ContactBtns from "../../../common/Button/ContactBtns";

export default function Section2() {
  return (
    <Box my={10}>
      <Section
        leftContent={
          <>
            <Box borderRadius="lg" overflow="hidden" w="100%" mb={4}>
              <Heading mb={5}>Vervolgpakketten</Heading>
              <Text fontSize="14px" py={2}>
                Heb je een rijlespakket bij ons afgenomen maar heb je toch nog
                wat meer lessen nodig voordat je op kunt voor je praktijkexamen?
                Je kunt er natuurlijk voor kiezen om losse rijlessen af te
                nemen, maar we bieden je ook voordelige vervolgpakketten aan.
              </Text>

              <Text fontSize="14px" py={2}>
                Bij losse rijlessen bepaal jij zelf wanneer je wilt lessen. Je
                betaalt je rijlessen per keer en je maakt telkens een nieuwe
                lesafspraak. In overleg met je instructeur kun je dan al snel je
                examen aanvragen. Uniek is dat je bij de eerste rijles een
                instructiewijzer in een app krijgt waarin alle
                instructieonderdelen staan beschreven, en worden uitgelegd, die
                op het examen gevraagd kunnen worden.
              </Text>

              <Text fontSize="14px" py={2}>
                Twijfel je over welk vervolgpakket het beste bij jou past?
                Overleg het met je instructeur. Hij of zij kent je situatie als
                geen ander en kan je hier dus perfect over adviseren!
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
