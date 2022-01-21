import { Input } from "../Input";
import {
  Titulo,
  TituloA,
  WrapperForm,
  WrapperFormA,
  WrapperInputs,
} from "./estilos";

interface SassaoProps {
  faixaPrecos: {
    text: string;
    value: string;
  }[];
  mostrarImputs?: boolean;
}

export function SessaoFaixaPrecos({ faixaPrecos, mostrarImputs }: SassaoProps) {
  const inputs = faixaPrecos.map(({ text, value }, index) => (
    <Input
      key={index}
      tipoSessao="faixaPrecos"
      texto={text}
      value={value}
      tipoInput="radio"
    />
  ));

  return mostrarImputs ? (
    <WrapperForm>
      <Titulo>Faixa de Preço</Titulo>
      <WrapperInputs>{inputs}</WrapperInputs>
    </WrapperForm>
  ) : (
    <WrapperFormA>
      <TituloA>Faixa de Preço</TituloA>
      <WrapperInputs>{inputs}</WrapperInputs>
    </WrapperFormA>
  );
}
