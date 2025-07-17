import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Link,
  Text,
  VStack,
  HStack,
  Image,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
} from 'react-icons/fa';
import { useNavigate } from 'react-router';

const Footer = () => {

    const navigate = useNavigate()
    
    return (
        <Box bg="gray.900" color="white" pt={10}>
            <Box px={{ base: 4, md: 10 }} maxW="1200px" mx="auto">
                <Grid
                    templateColumns={['1fr','1fr','1fr','repeat(4, 1fr)']}
                    gap={10}
                    mb={10}
                >
                {/* Logo + Contact */}
                <GridItem>
                    <VStack align="flex-start" spacing={4}>
                    <Box bg="white" p={2} borderRadius="md" onClick={()=>navigate('/')}>
                        <Image src="/logo.png" alt="Logo" width="120" />
                    </Box>

                    <VStack align="flex-start" fontSize="sm" spacing={1}>
                        <HStack><Icon as={FaPhone as unknown as React.ElementType} /><Text>085-0604110</Text></HStack>
                        <HStack><Icon as={FaEnvelope as unknown as React.ElementType} /><Text>info@diepopleidingen.nl</Text></HStack>
                        <HStack><Icon as={FaPhone as unknown as React.ElementType} /><Text>085-0604110</Text></HStack>
                        <HStack><Icon as={FaMapMarkerAlt as unknown as React.ElementType} /><Text>Sutton 11, 7327 AB Apeldoorn</Text></HStack>
                    </VStack>

                    <Text fontSize="sm" mt={4}>Social Media Links</Text>
                    <HStack spacing={3}>
                        <Icon as={FaInstagram as unknown as React.ElementType} boxSize={5} />
                        {/* Add more icons as needed */}
                    </HStack>
                    </VStack>
                </GridItem>

                {/* Pagina */}
                <GridItem>
                    <Box>
                        <Heading size="sm" mb={2}>Pagina</Heading>
                        <VStack align="start" spacing={1} fontSize="sm">
                        {[
                            ['Home', '/'],
                            ['Over ons', '/over-ons'],
                            ['Tarieven', '/tarieven'],
                            ['Veelgestelde vragen', '/veelgestelde-vragen'],
                            ['Reviews', '/reviews'],
                            ['Werken bij DIEP', '/werken-bij-diep'],
                            ['Contact', '/contact'],
                            ['Driving School', '/driving-school'],
                        ].map((item:any, i) => (
                            <Link key={i} onClick={()=>navigate(item[1])}>{item[0]}</Link>
                        ))}
                        </VStack>
                    </Box>

                    <Box mt={4}>
                        <Heading size="sm" mb={2}>Cursussen</Heading>
                        <VStack align="start" spacing={1} fontSize="sm">
                        {[
                            ["Autorijles", `/autorijschool-apeldoorn`],
                            ["Motorrijles", `/motorrijles-apeldoorn`],
                            ["Theoriecursus", `/theoriecursus`],
                            ["Spoedcursus", `/spoedcursus`],
                            ["Opfriscursus", `/opfriscursus`],
                        ].map((item, i) => (
                            <Link key={i} onClick={()=>navigate(item[1])}>{item[0]}</Link>
                        ))}
                        </VStack>
                    </Box>

                </GridItem>

                {/* Kennisbank */}
                <GridItem>
                    <Box>
                        <Heading size="sm" mb={2}>Kennisbank</Heading>
                        <VStack align="start" spacing={1} fontSize="sm">
                        {[
                            ["Lessen vanaf 16,5 jaar", `/lessen-vanaf`],
                            ["Theorie-examen", `/theorie-examen`],
                            ["Eigen verklaring", `/eigen-verklaring`],
                            ["Rijschool machtigen", `/rijschool-machtigen`],
                            ["Praktijkexamen afleggen", `/praktijkexamen-afleggen`],
                            ["Wist jij dat", `/wist-jij-dat`],
                            ["Informatie voor ouders", `/informatie-voor-ouders`],
                            ["Veelgestelde vragen", `/veelgestelde-vragen`],
                        ].map((item, i) => (
                            <Link key={i} onClick={()=>navigate(item[1])}>{item[0]}</Link>
                        ))}
                        </VStack>
                    </Box>

                    <Box mt={4}>
                        <Heading size="sm" mb={2}>Onze regio’s</Heading>
                        <VStack align="start" spacing={1} fontSize="sm">
                        {[
                            ["Rijschool Apeldoorn", `/`],
                            ["Rijschool Beekbergen", `/rijschool-beekbergen`],
                            ["Rijschool Hoenderloo", `/rijschool-hoenderloo`],
                            ["Rijschool Teuge", `/rijschool-teuge`],
                            ["Rijschool Twello", `/rijschool-twello`],
                            ["Rijschool Vaassen", `/rijschool-vaassen`],
                        ].map((item, i) => (
                            <Link key={i} onClick={()=>navigate(item[1])}>{item[0]}</Link>
                        ))}
                        </VStack>
                    </Box>
                </GridItem>

                {/* Map + Openingstijden */}
                <GridItem>
                    <Heading size="sm" mb={2}>Openingstijden</Heading>
                    <VStack align="start" spacing={1} fontSize="sm">
                    {[
                        ['Maandag', '09:00–18:00'],
                        ['Dinsdag', '09:00–18:00'],
                        ['Woensdag', '09:00–18:00'],
                        ['Donderdag', '09:00–18:00'],
                        ['Vrijdag', '09:00–18:00'],
                        ['Zaterdag', '09:00–16:00'],
                        ['Zondag', 'Gesloten'],
                    ].map(([day, time], i) => (
                        <HStack key={i} justify="space-between" w="full">
                            <Text>{day}</Text>
                            <Text>{time}</Text>
                        </HStack>
                    ))}
                    </VStack>

                    <Box mt={4} borderRadius="md" overflow="hidden">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.5168292674424!2d5.978527!3d52.2123014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7a4e548c828c3%3A0xf68268d1089a3586!2sDIEP%20Opleidingen!5e0!3m2!1sen!2snl!4v1721193872000!5m2!1sen!2snl"
                        width="100%"
                        height="180"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    />
                    </Box>
                </GridItem>
                </Grid>
            </Box>

            {/* Bottom Bar */}
            <Box bg="#00AEEF" py={3}>
                <Flex
                    direction={['column','column','column','row']}
                    justify="space-between"
                    // align="center"
                    px={{ base: 4, md: 10 }}
                    color="white"
                    fontSize="xs"
                    gap={4}
                >
                    <Text fontSize={'sm'}>&copy; diepopleidingen.nl {new Date().getFullYear()}</Text>
                    <Stack justify={'right'}>
                        <SimpleGrid spacing={[2]} mt={{ base: 2, md: 0 }} columns={[2,5]}>
                            {['Algemene voorwaarden', 'Privacybeleid', 'Disclaimer', 'Cookies', 'Sitemap'].map(
                            (item, i) => (
                                <Link key={i}>{item}</Link>
                            )
                            )}
                        </SimpleGrid>
                    </Stack>
                </Flex>
            </Box>
        </Box>
    );
};

export default Footer;