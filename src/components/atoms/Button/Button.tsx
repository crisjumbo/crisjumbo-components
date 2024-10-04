import { ButtonProps } from "./Button.types"
import { DefaultButton } from "./Button.styled"

// TO-DO: Refactor to a better state managment
export const Button = ({text, variant = 'default', handleClick}: ButtonProps) => {
    return (
        <DefaultButton onClick={handleClick}>
            {text}
        </DefaultButton>
    )
}