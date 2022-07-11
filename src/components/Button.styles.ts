import styled from "styled-components";

export type buttonVariants = 'primary' | 'secondary' | 'success' | 'danger'

interface ButtonProps {
    variant: buttonVariants
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    success: 'green',
    danger: 'red'
}

export const ButtonContainer = styled.button<ButtonProps>`
    width: 100px;
    height: 30px;
    background: ${props => props.theme[props.variant]};
`