import { ButtonProps } from "./Button.types"
import './Button.styles.css'

export const Button = ({text, variant = 'default'}: ButtonProps) => {
    return (
        <button className={`button button-${variant}`}>
            {text}
        </button>
    )
}