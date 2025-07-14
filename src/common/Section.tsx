import {
    Box,
    Flex,
} from '@chakra-ui/react';

interface SectionProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  leftFlex?: number;
  rightFlex?: number;
  gap?: number | string;
}

export default function Section({
    leftContent,
    rightContent,
    leftFlex = 1,
    rightFlex = 1,
    gap = 8,
}: SectionProps) {

    return (
        <Flex
            direction={['column','column','column','row']}
            gap={gap}
            align="flex-start"
            justify="space-between"
        >
            <Box flex={leftFlex} w="100%">{leftContent}</Box>
            <Box flex={rightFlex} w="100%">{rightContent}</Box>
        </Flex>
    );
}
