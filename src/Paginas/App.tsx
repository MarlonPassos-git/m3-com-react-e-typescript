import "the-new-css-reset/css/reset.css"
import { Cabecario } from  "../components/Cabecario"
import { RodaPe } from "../components/RodaPe"
import { EstilosGlobais } from "../estilos/estilosGlobais"

export function App() {
  return (
    <>
      <Cabecario />
      <RodaPe />
      <EstilosGlobais />
    </>
   
  )
  
}

