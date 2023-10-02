import Label from "../../../components/Label"
import Button from "../../../components/Button"
import Input from "../../../components/Input"


function FormLogin () {
    return (
        <div className="flex flex-col">
            <form className="flex flex-col items-center ">
                <div className="bg-fredcode-100 p-8 mb-2 w-96">
                    <h2 
                        className="text-center text-2xl mb-5">
                            Login
                        </h2>
                    <div className="flex flex-col mb-3">
                        <Label forLabel="name">
                            Nome
                        </Label>
                        <Input  
                            name="name"
                            id="name"
                            type="text" 
                            placeholder="Digite seu nome"
                        /> 
                    </div>
                    <div className="flex flex-col">
                        <Label forLabel="balance">
                            Saldo
                        </Label>
                        <Input  
                            type="number" 
                            name="balance"
                            id="balance"
                            // onChange={}
                            placeholder="Digite seu saldo"
                            required={true}
                        />
                    </div>
                </div>
                <Button type='submit'>
                        Entrar
                </Button>
            </form>
        </div>
    )
}

export default FormLogin