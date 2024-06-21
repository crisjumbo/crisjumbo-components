import { InputProps } from "./Input.types"
import './Input.styles.css'

export const Input = ({variant='default', placeholder, type, name, value, handleChange, handleFocus, handleBlur}: InputProps) => {
    return ( 
        <input className={`input input-${variant}`} placeholder={placeholder} type={type} name={name} value={value} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
    )
}