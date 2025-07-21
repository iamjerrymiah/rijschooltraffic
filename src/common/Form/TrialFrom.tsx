import {
    Button,
    Input,
    Select,
    SimpleGrid,
    Stack,
    Textarea
} from "@chakra-ui/react";

export default function TrialForm() {
    return (
        <Stack px={6}>
            <Select
                fontSize={"12px"}
                fontWeight={400}
                placeholder="Selecteer je opleiding"
            />
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <Input
                    fontSize={"12px"}
                    fontWeight={400}
                    placeholder="Achternaam"
                />
                <Input
                    fontSize={"12px"}
                    fontWeight={400}
                    placeholder="Geboortedatum"
                />
                <Input fontSize={"12px"} fontWeight={400} placeholder="Email" />
                <Input
                    fontSize={"12px"}
                    fontWeight={400}
                    placeholder="Woonplaats"
                />
                <Input
                    fontSize={"12px"}
                    fontWeight={400}
                    placeholder="Postcode"
                />
                <Input fontSize={"12px"} fontWeight={400} placeholder="Adres" />
                <Input
                    fontSize={"12px"}
                    fontWeight={400}
                    placeholder="Telefoonnummer"
                />
                <Select
                    fontSize={"12px"}
                    fontWeight={400}
                    placeholder="Hoe heb je ons gevonden?"
                />
            </SimpleGrid>
            <Textarea
                fontSize={"12px"}
                fontWeight={400}
                placeholder="Eventuele bericht (niet verplicht)"
                mt={4}
            />
            <Button
                fontSize={"12px"}
                fontWeight={400}
                colorScheme="orange"
                w="100%"
                my={4}
            >
                Gratis proefles aanvragen →
            </Button>
        </Stack>
    );
}
