import "the-new-css-reset/css/reset.css";
import { Cabecario } from "../components/Cabecalho";
import { Menu } from "../components/Menu";
import { RodaPe } from "../components/RodaPe";
import { DadosProvider } from "../context/dados";
import { EstilosGlobais } from "../estilos/estilosGlobais";

export function App() {
  return (
    <>
      <DadosProvider>
        <Cabecario />
        <Menu />
        <RodaPe />
        <EstilosGlobais />
      </DadosProvider>
    </>
  );
}
