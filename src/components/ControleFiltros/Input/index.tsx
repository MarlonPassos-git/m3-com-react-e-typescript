import { Checkbox, Container, Texto } from "./estilos";

interface InputProps {
    tipoInput: string;
    texto: string;
}

export function Input ({ tipoInput, texto }: InputProps) {

    return (
        <Container
            tipoInput={tipoInput}
        >
            <Checkbox 
                type="checkbox"
                name="cor"
                value={texto}
            />
            <Texto>{ texto }</Texto> 
        </Container>
    )
}
