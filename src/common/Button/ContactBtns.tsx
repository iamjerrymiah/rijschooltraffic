import { Box, Button, Icon } from "@chakra-ui/react";

export default function ContactBtns({
  leftIcon,
  leftText,
  rightText,
  rightIcon,
  removeRightBtn
}: any) {
  return (
    <Box display="flex" gap={4}>
      <Button
        fontSize={"12px"}
        fontWeight={400}
        leftIcon={leftIcon}
        colorScheme="blue"
      >
        {leftText}
      </Button>
      {!removeRightBtn && (
        <Button
          fontSize={"12px"}
          fontWeight={400}
          colorScheme="orange"
          leftIcon={rightIcon}
        >
          {rightText}
        </Button>
      )}
    </Box>
  );
}
