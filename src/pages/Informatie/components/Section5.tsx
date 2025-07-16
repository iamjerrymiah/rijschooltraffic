import { Box, Heading, Icon, Image, Text } from "@chakra-ui/react";
import Section from "../../../common/Section";
import { MdPhone } from "react-icons/md";
import ContactBtns from "../../../common/Button/ContactBtns";

import imagery from "../../../assets/img/informatie5.webp";

export default function Section5() {
  return (
    <Box my={10}>
      <Section
        leftContent={
          <>
            <Box borderRadius="lg" overflow="hidden" w="100%">
              <Heading mb={3} fontSize="xl">De lesgebieden</Heading>
              <Text fontSize="14px" py={2}>
                Onze lesgebieden zijn: Apeldoorn, Den Haag, Delft, Rijswijk,
                Ypenburg, Nootdorp, Leidschendam, Voorburg, Naaldwijk, Monster
                etc. Naar mate het examen in zicht komt rijden wij altijd met
                onze leerlingen de ‘bekende’ examenroutes. Dit zodat de
                leerlingen dan bekend raken aan de routes en ze te laten wennen
                aan de verkeerssituaties in de gebieden waar veelal de examens
                worden afgenomen.
              </Text>

              <Heading mb={2} fontSize="xl">Financieel</Heading>
              <Text fontSize="14px" pb={2}>
                De betalingen van de rijlessen gaan bij ons door middel van een
                factuur met betaallink. U krijgt van ons ook de mogelijkheid om
                het bedrag over te maken op ons rekeningnummer of eventueel
                contant te betalen. Bent u, of uw zoon of dochter niet in staat
                om in de vooraf gestelde termijnen te betalen dan kunt u altijd
                contact opnemen met ons om een betalingsregeling te treffen
                zodat uw zoon of dochter toch het rijbewijs kan behalen. Meer
                informatie over de kosten en de termijnbetaling vindt u op de
                tarieven pagina.
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
