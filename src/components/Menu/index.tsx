import { useEffect, useState } from "react";
import { BotaoMostraMaisItens } from "../BotaoMostrarMaisItens";
import { BotoesModal } from "../BotoesModal";
import { ControladorOrdem } from "../ControladorOrdem";
import { ControleFiltros } from "../ControleFiltros";
import { ListaProdutos } from "../ListaProdutos";
import { Aside, Container, Titulo } from "./estilos";

export function Menu () {
    const tipoTela = window.innerWidth > 768 ? false : true;
    const [Mobile, SetMobile] = useState(tipoTela);


    useEffect(() => {
        window.addEventListener("resize", ()=> {


            window.innerWidth <= 750 ? SetMobile(true) : SetMobile(false);
        }) 
    }, [])

    return (
        <Container>
            <Titulo>
                Blusas
            </Titulo>
            <ListaProdutos/>
            {(Mobile) ? (<>
                <BotoesModal
                    gridArea="filtrar"
                    titulo="Filtrar"
                >
                    <ControleFiltros/>
                </BotoesModal>
                <BotoesModal
                    gridArea="ordenar"
                    titulo="Ordernar"
                >
                    <ControladorOrdem
                        estaNoModal={true}
                    />
                </BotoesModal>
            </>) : (<>  
                <ControladorOrdem />
                <Aside>
                    <ControleFiltros
                    mostrarImputs={true}
                    />
                </Aside>
                
            </>)}
            
            <BotaoMostraMaisItens />
        </Container>
    )
}