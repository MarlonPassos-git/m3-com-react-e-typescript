import { IProduto } from "../types/dadosProps";

export const regrasOrdenacao = {
  'Menor preço': (a: IProduto, b: IProduto) => a.price - b.price,
  'Maior preço': (a: IProduto, b: IProduto) => b.price - a.price,
  'Mais recente': (a: IProduto, b: IProduto) => {
    const c = new Date(a.date.replace(/-/g, ",")); 
    const d = new Date(b.date.replace(/-/g, ","));

    return d.getTime() - c.getTime();
  },
};