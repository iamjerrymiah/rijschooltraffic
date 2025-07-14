import React from 'react'
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react'
import { ElementColor, TextColor } from '../../constants/colors';

interface ButtonProps extends ChakraButtonProps {
    text?: string;
    children?: React.ReactNode;
    onClick?: any;
    loading?: boolean;
    disabled?: boolean;
    radius?: string;
    iconType?: 'create' | 'edit' | 'delete' | 'save' |'back' | 'next' | 'goto' | 'filter' | 'reset' | 'search' | 'download' | 'add' | 'cancel' | 'export';
}

function Button({
    children,
    type,
    text,
    loading,
    disabled,
    fontSize,
    radius,
    margin,
    color,
    bgColor,
    fontWeight,
    colorScheme,
    variant = 'solid',
    iconType,
    ...props
}: ButtonProps) {

    return (
        <ChakraButton
            size={props.size ?? 'sm'}
            type={type}
            isLoading={loading}
            isDisabled={disabled}
            bgColor={colorScheme ? undefined : variant !== 'solid' ? undefined : bgColor || ElementColor.primary}
            color={colorScheme ? undefined : color || TextColor.white}
            variant={variant}
            colorScheme={colorScheme}
            borderRadius={radius || "6px"}
            margin={margin || '0px'}
            fontWeight={fontWeight || 500}
            fontSize={fontSize || '13px'}
            _hover={{ filter: disabled ? "" : "grayscale(30%)" }}
            transition='.3s ease-in-out'
            lineHeight={1}
            border={variant === 'outline' ? `1px solid ${"#858585"}` : props.border}
            // leftIcon={iconType ? pickIcon(iconType) : undefined}
            {...props}
        >
            {text ?? children}
        </ChakraButton>
    )
}

export default Button