export type InputProps = {
    variant?: string;
    placeholder: string;
    type: string;
    name: string;
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}