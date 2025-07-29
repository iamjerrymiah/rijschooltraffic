import {
    Box,
    Heading,
    Icon,
    Image,
    Link,
    Text,
    VStack
} from "@chakra-ui/react";
import { Container } from "../../../styling/layout";
import Section from "../../../common/Section";

import secImg from "../../../assets/img/informatie5.webp";
import { useNavigate } from "react-router";
import { MdCheckCircleOutline, MdPhone } from "react-icons/md";
import ContactBtns from "../../../common/Button/ContactBtns";

export default function OpfriscursusApeldoorn({ region }: any) {
    const navigate = useNavigate();

    return (
        <Container>
            <Box my={10}>
                <Section
                    leftContent={
                        <Box borderRadius="lg" overflow="hidden" w="100%">
                            <Image src={secImg} alt="" w="100%" h="auto" />
                        </Box>
                    }
                    rightContent={
                        <VStack align="start">
                            <Heading size="lg">
                                Opfriscursus {region ? region : "Apeldoorn"}
                            </Heading>
                            <Text fontSize="14px" py={2}>
                                Heb je al een rijbewijs, maar voel jij je niet
                                zo zelfverzekerd achter stuur? Met een
                                opfriscursus van RijSchool Traffic Opleidingen
                                kunnen we je helpen om alle onzekerheden weg te
                                werken. Samen met jou behandelen wij alle
                                onderdelen die jou tegenzitten en waarmee je nog
                                even extra aandacht wilt.
                            </Text>
                            <VStack align="start" pt={2}>
                                {[
                                    "Enthousiaste en geduldige rijinstructeurs",
                                    "Veiligheid staat bij ons voorop!",
                                    "Auto’s verzekerd volgens norm"
                                ].map((item, i) => (
                                    <Text key={i} fontSize={["14px", "12px"]}>
                                        <Icon
                                            as={
                                                MdCheckCircleOutline as unknown as React.ElementType
                                            }
                                            color="green.400"
                                            mr={2}
                                        />
                                        {item}
                                    </Text>
                                ))}
                            </VStack>

                            <Text fontSize="14px" py={2}>
                                Met een opfriscursus zorgen we ervoor dat je
                                weer vol zelfvertrouwen achter het stuur kan en
                                volledig zelfstandig de weg op kunt gaan, zonder
                                enige twijfels. Je krijgt handige tips onder de
                                begeleiding van onze geduldige en vriendelijke
                                instructeurs. Meld je aan voor opfrisrijlessen
                                bij{" "}
                                <Link
                                    color={"orange"}
                                    onClick={() => navigate(`/opfriscursus`)}
                                >
                                    opfriscursus {region ? region : "Apeldoorn"}{" "}
                                </Link>
                                !
                            </Text>

                            <ContactBtns
                                leftIcon={
                                    <Icon
                                        as={
                                            MdPhone as unknown as React.ElementType
                                        }
                                    />
                                }
                                leftText="+31685841714"
                                rightText="Gratis proefles aanvragen"
                            />
                        </VStack>
                    }
                />
            </Box>
        </Container>
    );
}
