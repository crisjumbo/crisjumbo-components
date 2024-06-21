import { ButtonProps } from "./Button.types"
import './Button.styles.css'

export const Button = ({text, variant = 'default', handleClick}: ButtonProps) => {
    return (
        <button className={`button button-${variant}`} onClick={handleClick}>
            {text}
        </button>
    )
}