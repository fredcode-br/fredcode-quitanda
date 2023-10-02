interface Props {
    children: React.ReactNode;
    forLabel: string;
}

function Label({ children, forLabel }: Props) {
    return (
        <label 
            className=""
            htmlFor={forLabel}
        >
            {children}
        </label>
    )
}

export default Label