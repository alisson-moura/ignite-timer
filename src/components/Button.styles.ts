import styled from 'styled-components'

export type buttonVariants = 'primary' | 'secondary' | 'success' | 'danger'

interface ButtonProps {
  variant: buttonVariants
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: 100px;
  height: 30px;
  background: ${(props) => props.theme['green-500']};
`
