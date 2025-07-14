import { Box, Spinner } from '@chakra-ui/react'
import { ElementColor } from '../../constants/colors'


function Loader() {
    return (
        <Box
            width='full'
            height='full'
            display='flex'
            alignItems='center'
            flexDirection='column'
            justifyContent='center'
            position='fixed'
            top={0}
            left={0}
        >
            <Spinner
                thickness='5px'
                speed='0.55s'
                emptyColor='gray.200'
                color={ElementColor.primary}
                width='70px'
                height='70px'
            />
        </Box>
    )

}

export default Loader