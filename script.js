// corOriginal começa sendo true, indicando que o próximo tema será escuro.
let corOriginal = true;

function mudarCor() {
    botao = document.querySelector('.header-moon');
    let body = document.body;
    let changeColors = window.document.querySelectorAll('.changeColors');

    // Objeto guardando os as cores a serem atribuidas.
    const DarkTheme = {
        'black': '#040404',
        'grey': '#A1A2A3',
        'white': '',
    };

    // Condicional para testar qual tema virá depois de apertar o botão:
    if (corOriginal) {
        body.style.backgroundColor = DarkTheme['black'];
        botao.setAttribute("src", 'imagens/svgSun.svg')
        changeColors.forEach(colors => {
            colors.style.color = DarkTheme['grey'];
        });
    } else {
        body.style.backgroundColor = DarkTheme['white'];
        botao.setAttribute("src", 'imagens/svgMoon.svg')
        changeColors.forEach(colors => {
            colors.style.color = DarkTheme['white'];
        });
    }
    // Inverte o valor da var corOriginal para próxima vez que a função for chamada, ela alternar entre os temas.
    corOriginal = !corOriginal;
}