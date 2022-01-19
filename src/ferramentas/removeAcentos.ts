export function removeAcentos(frase: string): string{
    const novaFrase = frase
        .toLowerCase()                                                         
        .replace(/[ÁÀÂÃ]/gi, 'a')
        .replace(/[ÉÈÊ]/gi, 'e')
        .replace(/[ÍÌÎ]/gi, 'i')
        .replace(/[ÓÒÔÕ]/gi, 'o')
        .replace(/[ÚÙÛ]/gi, 'u')
        .replace(/[Ç]/gi, 'c')
        .replace(/ /gi, '_')
        
    return novaFrase; 
}