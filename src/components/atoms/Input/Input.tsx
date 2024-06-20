import { InputProps } from "./Input.types"

export const Input = ({placeholder, type, value, onChange}: InputProps) => {
    return (
        <input
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
        />
    )
}