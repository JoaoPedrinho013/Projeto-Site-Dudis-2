
// O JavaScript pode ser usado para ajustar dinamicamente o tamanho das linhas
window.addEventListener('resize', function () {
    adjustLines();
});

function adjustLines() {
    const containerWidth = document.querySelector('.titulo').offsetWidth;
    const lineWidth = (containerWidth - document.querySelector('.centered-text').offsetWidth) / 2;
    document.querySelector('.left-line').style.width = lineWidth + 'px';
    document.querySelector('.right-line').style.width = lineWidth + 'px';
}

// Chame a função para ajustar as linhas quando a página é carregada inicialmente
adjustLines();


