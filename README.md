
<h1 align="center" class="line-1 anim-typewriter">Desafio M3 </h1>



<img align="center"  class="img__project " src="./screen.gif">

<img align="center"  class="img__project " src="./github/acessibilidade.png">


<div align="center"  class="links">
    <a href="#the_challenge">O desafio</a> |
     <a href="#links">Links</a> |
      <a href="#built_with">Ferramentas usadas</a> |
       <a href="#author">Coisa para se fazer</a>  |
       <a href="#resources">Recursos</a>
</div>

<h2 id="the_challenge"> 🌋 O desafio</h2>

Essa é a solução de um desafio proposto pela [Agência Digital M3](https://m3ecommerce.com/)

O objetivo desse desafio foi para avaliar os conhecimentos fundamentais de front end, por isso foi pedido que não fosse usado nenhum framework, ou se fossse usar algo usasse React JS.


- [x] HTML5 e CSS3
- [x] Requisição a API para obter os produtos
- [x] Funcionalidade: Filtrar produtos por cor, tamanho e preço.
- [x] Funcionalidade: Adicionar produto ao carrinho.
- [x] Funcionalidade: Carregar mais produtos.
- [x] Não utilizar Bootstrap, Foundation Css, Semantic ui ou semelhantes ;
- [x] Responsividade

<h2 id="Observações">🔎 Observações</h2>

- Como foi deixado bem explicito que esse desafio era para os validar os conhecimentos fundamentais, porem eu vi que a M3 usa ferramentas como react e typescrip EU DESIDI FAZER DUAS VERÇÕES desse mesmo projetos, uma usando __HTML, CSS e JavaScript__ e outra Verção usando __React JS e Typescript__ + CSSinJS.
- No relatorio de acessibilidade do **lighthouse** ficou mostrando que teve um erro de acessibilidade com o botão de mostras mais itens devido as suas cores, porem como eu tentei deixar o mais proximo possivel do **FIGMA** eu deixei esse pequeno detalhe.
- Em vez de colocar as imagens otimizadas localmente nos aquivos do projeto eu otimizei elas para **.webp**(-95% do tamanho) e coloquei elas em um serviço de hospedagem de imagens


<h2 id="links">🔗 Links</h2>

- Site online:  [https://m3-com-react-e-typescript.vercel.app/](https://m3-com-react-e-typescript.vercel.app/)
- Verção do projeto feita com **HTML**, **CSS** e **JavaScript**: [https://github.com/MarlonPassos-git/Desenvolvedor-M3](https://github.com/MarlonPassos-git/Desenvolvedor-M3)
- Verção do projeto feita com **React JS**, **Typescript** e **StyledComponents**: [https://github.com/MarlonPassos-git/m3-com-react-e-typescript](https://github.com/MarlonPassos-git/m3-com-react-e-typescript) 

<h2 id="built_with">👷‍♂️ Ferramentas usadas</h2>

-  <img src="https://img.icons8.com/color/20/000000/typescript.png"/> TypeScrpt
-  <img class="icon" height="20" src="https://avatars-04.gitter.im/group/iv/4/5800767ed73408ce4f2e2711"/> Styled-Components
-  <img src="https://img.icons8.com/plasticine/20/000000/react.png"/> React JS





<h2 id="author">👨‍🎓 Coisa para se fazer </h2>


<h2 id="resources">🚧 Pobremas A corrigir</h2>

- [ ] Quando clica no botão de ver mais itens, a pagina automaticamente scrolla para o final da pagina.
- [ ] Verificar quando uma musica não tem preview e mostrar uma capa de tipo sem preview ou um aviso para o usuario

<h2 id="resources">📚 Recursos</h2>


- Para alguns elementos que eu queria um tamanho diferente em varias telas eu usei uma bibliote que eu to desenvolvendo que se chama progressive-size, que tem [origem nesse  artigo](https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/#for-those-who-dont-mind-that-edge-case), é por isso que alguns elementos o tamanho nao ta em PX mais sim em função css usando o clamp, min, max e calc.
- Documentation [react JS](https://reactjs.org/docs/getting-started.html) 




