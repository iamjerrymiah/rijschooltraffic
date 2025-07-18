import { Box } from "@chakra-ui/react";

import heroImg from "../../assets/img/overons_hero.jpeg";

export default function CommonHero({ children, Img }: any) {
  return (
    <Box
      bgImage={Img ? Img : heroImg}
      bgSize="cover"
      bgPosition="center"
      minH="40vh"
      px={[4, 8, 8, 20]}
      py={{ base: 6, md: 12 }}
    >
      {children}
    </Box>
  );
}
