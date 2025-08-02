import {
    Button,
    Input,
    Select,
    SimpleGrid,
    Stack,
    Textarea,
    useToast
} from "@chakra-ui/react";
import { capCase } from "../../utils/utils";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function TrialForm() {
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        education: "",
        dob: "",
        resident: "",
        postCode: "",
        address: "",
        phoneNumber: "",
        foundUs: "",
        optMessage: ""
    });

    const handleChange = (e: any) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = () => {
        setLoading(true);

        emailjs
            .send(
                "",
                "template_vvc0wek",
                formData,
                "GAM0HXSusDBk261SD"
            )
            .then(() => {
                toast({
                    title: "Message sent.",
                    description: "We've received your message.",
                    status: "success",
                    duration: 5000,
                    isClosable: true
                });
                setFormData({
                    name: "",
                    email: "",
                    education: "",
                    dob: "",
                    resident: "",
                    postCode: "",
                    address: "",
                    phoneNumber: "",
                    foundUs: "",
                    optMessage: ""
                });
                setLoading(false);
            })
            .catch(e => {
                toast({
                    title: "Error",
                    description: "Failed to send message.",
                    status: "error",
                    duration: 5000,
                    isClosable: true
                });
            });
    };

    return (
        <form
            onSubmit={e => {
                e?.preventDefault();
                handleSubmit();
            }}
        >
            <Stack px={6}>
                <Select
                    fontSize={"12px"}
                    fontWeight={400}
                    placeholder="Selecteer je opleiding"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    isRequired
                >
                    {[
                        "Autorijles",
                        // "Motorrijles",
                        "Spoedcursus"
                        // "Theoriecursus",
                        // "Opfriscursus"
                    ].map((status: any, i) => (
                        <option key={i} value={status}>
                            {capCase(status)}{" "}
                        </option>
                    ))}
                </Select>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <Input
                        fontSize={"12px"}
                        fontWeight={400}
                        placeholder="Naam"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isRequired
                    />
                    <Input
                        fontSize={"12px"}
                        fontWeight={400}
                        placeholder="Geboortedatum"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        isRequired
                    />
                    <Input
                        fontSize={"12px"}
                        fontWeight={400}
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isRequired
                    />
                    <Input
                        fontSize={"12px"}
                        fontWeight={400}
                        placeholder="Woonplaats"
                        name="resident"
                        value={formData.resident}
                        onChange={handleChange}
                        isRequired
                    />
                    <Input
                        fontSize={"12px"}
                        fontWeight={400}
                        placeholder="Postcode"
                        name="postCode"
                        value={formData.postCode}
                        onChange={handleChange}
                        isRequired
                    />
                    <Input
                        fontSize={"12px"}
                        fontWeight={400}
                        placeholder="Adres"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                    <Input
                        fontSize={"12px"}
                        fontWeight={400}
                        placeholder="Telefoonnummer"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        isRequired
                    />
                    <Select
                        fontSize={"12px"}
                        fontWeight={400}
                        placeholder="Hoe heb je ons gevonden?"
                        name="foundUs"
                        value={formData.foundUs}
                        onChange={handleChange}
                        isRequired
                    >
                        {[
                            "Via Google",
                            "Via Facebook of Instagram",
                            "Via een vriend of vriendin",
                            "Ergens anders"
                        ].map((status: any, i) => (
                            <option key={i} value={status}>
                                {capCase(status)}{" "}
                            </option>
                        ))}
                    </Select>
                </SimpleGrid>
                <Textarea
                    fontSize={"12px"}
                    fontWeight={400}
                    placeholder="Eventuele bericht (niet verplicht)"
                    mt={4}
                    name="optMessage"
                    value={formData.optMessage}
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    fontSize={"12px"}
                    fontWeight={400}
                    colorScheme="orange"
                    w="100%"
                    my={4}
                    isDisabled={loading}
                    isLoading={loading}
                >
                    {"Gratis proefles aanvragen →"}
                </Button>
            </Stack>
        </form>
    );
}
