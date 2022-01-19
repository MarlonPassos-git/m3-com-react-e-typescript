import { useState } from "react";
import { Modal } from "../Modal";
import { Botao} from "./estilo";


interface IBotoesModal {
  gridArea: string;
  children: React.ReactNode;
  titulo: string;
}

export function BotoesModal ({gridArea, children, titulo}:IBotoesModal) {

  const [modalVisivel, setModalVisivel] = useState(false);

  return (
    <>
      <Botao
        gridArea={gridArea}
        onClick={() => setModalVisivel(true)}
      >
        {titulo}
      </Botao>
      {modalVisivel && (
      <Modal 
        titulo={titulo}
        fecharModal={setModalVisivel}
        children={children}
      />
      )}
    </>
  )
}