import {
    Box,
    Button,
    Center,
    Heading,
    Input,
    Stack,
    Text,
    Textarea,
    useToast
} from "@chakra-ui/react";
import Section from "../../../common/Section";

import Map from "../../../common/Map/Map";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Section2() {
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: ""
    });

    console.log(loading);

    const handleChange = (e: any) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = () => {
        setLoading(true);
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
            phoneNumber: "",
            message: ""
        });
        setLoading(false);

        // emailjs
        //     .send(
        //         "service_9klix1s",
        //         "template_xop0tf5",
        //         formData,
        //         "S8wo1JWN9ShL2755z"
        //     )
        //     .then(() => {
        //         toast({
        //             title: "Message sent.",
        //             description: "We've received your message.",
        //             status: "success",
        //             duration: 5000,
        //             isClosable: true
        //         });
        //         setFormData({
        //             name: "",
        //             email: "",
        //             phoneNumber: "",
        //             message: ""
        //         });
        //         setLoading(false);
        //     })
        //     .catch(e => {
        //         toast({
        //             title: "Error",
        //             description: "Failed to send message.",
        //             status: "error",
        //             duration: 5000,
        //             isClosable: true
        //         });
        //     });
    };

    return (
        <Box my={10}>
            <Section
                gap={10}
                leftContent={
                    <>
                        <form
                            onSubmit={e => {
                                e?.preventDefault();
                                handleSubmit();
                            }}
                        >
                            <Box
                                borderRadius="lg"
                                overflow="hidden"
                                w="100%"
                                shadow="lg"
                                rounded="xl"
                                p={10}
                            >
                                <Center>
                                    <Heading fontSize="xl" mb={5}>
                                        Contactformulier
                                    </Heading>
                                </Center>
                                <Text fontSize="14px" py={2} align="center">
                                    Wеllicht kun jij ook antwoordеn vindеn op
                                    jouw vragеn op onzе pagina mеt Vееlgеstеldе
                                    vragеn. Ben je er niet uitgekomen? Schrijf
                                    hiеrondеr gеwoon jе vragеn of opmеrkingеn
                                    op, еn wе zullеn zo snеl mogеlijk mеt jе in
                                    contact trеdеn!
                                </Text>

                                <Stack py={6}>
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
                                        placeholder="Email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        isRequired
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
                                    <Textarea
                                        fontSize={"12px"}
                                        fontWeight={400}
                                        placeholder="Bericht"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        isRequired
                                    />

                                    <Button
                                        type="submit"
                                        fontSize={"12px"}
                                        fontWeight={400}
                                        colorScheme="orange"
                                        w="100%"
                                        mt={4}
                                        isDisabled={loading}
                                        isLoading={loading}
                                    >
                                        Verzenden →
                                    </Button>
                                </Stack>
                            </Box>
                        </form>
                    </>
                }
                rightContent={
                    <Box borderRadius="lg" overflow="hidden" w="100%">
                        <Map height={"583"} />
                    </Box>
                }
            />
        </Box>
    );
}
