interface Props {
    type: "text" | "number"
    name: string,
    id?: string | undefined
    placeholder?: string
    required?: boolean | false
}

function Input({ type, name, id, placeholder }: Props) {
    return (
        <input 
            type={type} 
            name={name} 
            id={id}
            placeholder={placeholder}
        />
    )
}

export default Input