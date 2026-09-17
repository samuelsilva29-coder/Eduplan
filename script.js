// 1. Seleciona os elementos que vamos usar
const botaoMenu = document.querySelector("#btn-menu"); /* (const) cria uma variavel chamada botaoMenu, (document acessa o HTML),
(query.selector) seleciona o item do HTML. */
const menu = document.querySelector(".nav"); /* o JS reconhece tanto o "#" quanto "." */

// 2. Escuta o evento de clique no botão
botaoMenu.addEventListener("click", function () { /* adiciona um evento de click no botao menu */
    // 3. Alterna (liga/desliga) a classe "ativo" no menu 
    menu.classList.toggle("ativo"); /*acessa o menu (listas) e executa a função de "exibir" as listas */
});
