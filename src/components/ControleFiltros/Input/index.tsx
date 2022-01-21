import { useDados } from "../../../context/dados";
import { Checkbox, Container, Texto } from "./estilos";

interface InputProps {
  tipoSessao: "cores" | "tamanhos" | "faixaPrecos";
  texto: string;
  value: string;
  tipoInput: "checkbox" | "radio";
}

export function Input({ tipoSessao, tipoInput, texto, value }: InputProps) {
  const { filtros, setFiltros } = useDados();

  function handleInput() {
    if (tipoInput === "radio") {
      if (filtros[tipoSessao][0] === value) {
        setFiltros({
          ...filtros,
          [tipoSessao]: [],
        });
      } else {
        setFiltros({
          ...filtros,
          [tipoSessao]: [value],
        });
      }
    } else if (filtros[tipoSessao].includes(value)) {
      setFiltros({
        ...filtros,
        [tipoSessao]: filtros[tipoSessao].filter((item) => item !== value),
      });
    } else {
      setFiltros({
        ...filtros,
        [tipoSessao]: [...filtros[tipoSessao], value],
      });
    }
  }

  return (
    <Container tipoSessao={tipoSessao}>
      <Checkbox
        type={tipoInput}
        name="cor"
        onClick={handleInput}
        onChange={handleInput}
        onKeyDown={({ key }) => key === "Enter" && handleInput()}
        checked={filtros[tipoSessao].includes(value)}
      />
      <Texto>{texto}</Texto>
    </Container>
  );
}
