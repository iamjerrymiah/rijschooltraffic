import { Box, Button, Grid, GridItem, Heading, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import { FaCar } from "react-icons/fa";
import { MdCheckBox } from "react-icons/md";

const features = [
    {
        title: 'Geen wachttijden',
        description: 'Wij hebben meerdere rijinstructeurs, dus je kunt direct starten met rijlessen.',
    },
    {
        title: 'Rijlessen vanaf 16,5 jaar',
        description: 'Je kunt bij DIEP Opleidingen al vanaf 16,5 jaar beginnen met rijlessen en slagen op je 17e verjaardag!',
    },
    {
        title: 'Betalen in termijnen',
        description: 'Wil je niet alles in 1 keer betalen? Je kunt de lespakket die bij jou past veilig via iDeal betalen in termijnen!',
    },
    {
        title: 'Schakel en automaat',
        description: 'Je hebt bij ons de keuze om rijles te volgen in een handgeschakelde of automaat lesauto.',
    },
];

export default function FeaturesGrid() {
    const colCount = useBreakpointValue({ base: 1, sm: 2, md: 2, lg: 4 });

    return (
        <Box p={{ base: 4, md: 8 }} >
            <Grid
                templateColumns={`repeat(${colCount}, 1fr)`}
                gap={6}
                justifyContent="center"
            >
            {features.map((feature, idx) => (
                <GridItem
                    key={idx}
                    bg="white"
                    px={6}
                    py={5}
                    h={['300px']}
                    borderRadius="md"
                    boxShadow="lg"
                    textAlign="center"
                    position={'relative'}
                >
                    <Icon
                        as={MdCheckBox as unknown as React.ElementType }
                        color="orange.400"
                        boxSize={10}
                        mb={4}
                    />
                    <Heading fontSize="lg" mb={2}>{feature.title}</Heading>
                    <Text fontSize="sm" mb={4}>{feature.description}</Text>
                    <Box position={'absolute'} bottom={'20px'} left={'10px'} right={'10px'}>
                        <Button
                            colorScheme="orange"
                            leftIcon={<Icon as={FaCar as unknown as React.ElementType} />}
                            size="sm"
                            width="100%"
                            fontWeight={400}
                            fontSize={'12px'}
                        >
                            Gratis proefles aanvragen
                        </Button>
                    </Box>
                </GridItem>
                ))}
            </Grid>
        </Box>
    )
}
