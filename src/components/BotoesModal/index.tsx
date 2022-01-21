import { useEffect, useState } from "react";
import { Modal } from "../Modal";
import { Botao} from "./estilo";


interface IBotoesModal {
  gridArea: string;
  children: React.ReactNode;
  titulo: string;
}

export function BotoesModal ({gridArea, children, titulo}:IBotoesModal) {

  const [modalVisivel, setModalVisivel] = useState(false);

  useEffect(() => {
      document.body.style.overflow = modalVisivel ? "hidden" : "auto";
  }, [modalVisivel])

  return (
    <>
      <Botao
        data-cy={`botao-modal-${gridArea}`}
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