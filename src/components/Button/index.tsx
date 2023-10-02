interface Props {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void
  };

function Button ({ children, type, onClick }: Props) {

    return (
        <button 
            className="bg-fredcode-100 py-2 w-full" 
            type={type} 
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;