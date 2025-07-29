import {
    Box,
    Button,
    Center,
    Heading,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import ModalCenter from "../Modal/ModalCenter";
import TrialForm from "../Form/TrialFrom";

export default function ContactBtns({
    leftIcon,
    leftText,
    rightText,
    rightIcon,
    removeLeftBtn,
    removeRightBtn
}: any) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box display="flex" gap={4} mt={2}>
            {!removeLeftBtn && (
                <a href={`tel:${leftText}`}>
                    <Button
                        fontSize={"12px"}
                        fontWeight={400}
                        leftIcon={leftIcon}
                        colorScheme="blue"
                    >
                        {leftText}
                    </Button>
                </a>
            )}
            {!removeRightBtn && (
                <Button
                    fontSize={"12px"}
                    fontWeight={400}
                    colorScheme="orange"
                    leftIcon={rightIcon}
                    onClick={onOpen}
                >
                    {rightText}
                </Button>
            )}

            <ModalCenter
                isOpen={isOpen}
                onClose={onClose}
                body={
                    <>
                        <Center>
                            <Heading fontSize="2xl" py={2}>
                                Vraag onze gratis proefles aan!
                            </Heading>
                        </Center>
                        <Text align="center" pb={2} color="orange">
                            Proefles is gratis i.c.m. een lespakket.
                        </Text>
                        <TrialForm />
                    </>
                }
            />
        </Box>
    );
}
