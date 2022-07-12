import { ButtonContainer, buttonVariants } from './Button.styles'

interface ButtonProps {
  variant?: buttonVariants
}

export default function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Teste 1</ButtonContainer>
}
