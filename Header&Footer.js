// Função para carregar o header
function CarregarCabecalho() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data
        })
}

// Função para carregar o footer
function CarregarRodape() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data
        })
}

// Chamar as funções para carregar o header e o footer
document.addEventListener('DOMContentLoaded', function () {
    CarregarCabecalho()
    CarregarRodape()
})

