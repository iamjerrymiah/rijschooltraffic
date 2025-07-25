import {
  Box,
  Text,
  Button,
  VStack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { MdSearchOff } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const MotionBox = motion(Box);

export default function PageNotFound() {
    const navigate = useNavigate();

    return (
        <Box
            minH="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg={useColorModeValue('gray.50', 'gray.900')}
            px={4}
        >
            <VStack spacing={6} textAlign="center" maxW="lg">
                <MotionBox
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <Icon as={MdSearchOff as unknown as React.ElementType} boxSize={24} color="red.400" />
                </MotionBox>

                <Text fontSize={['3xl', '4xl']} fontWeight="bold">Oops! Page not found.</Text>

                <Text color="gray.500" fontSize={['md', 'lg']}>
                    The page you're looking for doesn't exist or has been moved.  
                    Don’t worry — we’ll guide you back to safer roads.
                </Text>

                <Button
                    colorScheme="orange"
                    size="lg"
                    onClick={() => navigate('/')}
                    px={8}
                    mt={4}
                    fontSize={'14px'}
                    fontWeight={400}
                >
                    Back to Home
                </Button>
            </VStack>
        </Box>
    );
}