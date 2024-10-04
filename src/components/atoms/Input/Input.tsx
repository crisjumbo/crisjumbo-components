import { InputProps } from "./Input.types"
import { InputDefault } from "./Input.styled"

export const Input = ({variant='default', placeholder, type, name, value, handleChange, handleFocus, handleBlur}: InputProps) => {
    return ( 
        <InputDefault placeholder={placeholder} type={type} name={name} value={value} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
    )
}