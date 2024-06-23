$(document).ready(function(){
    // Função para verificar quando o elemento está na visão do usuário
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop()
        var docViewBottom = docViewTop + $(window).height()
        var elemTop = $(elem).offset().top
        return elemTop <= docViewBottom
    }
    
    // Função para animar elementos quando entram na visão do usuário
    function animateOnScroll() {
        $(".animar").each(function() {
            if (isScrolledIntoView(this)) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateX(0)'
                })
            }
        })
    }
    
    // Chama a função ao carregar a página e ao rolar
    $(window).on('load scroll resize', function() {
        animateOnScroll()
    })
})

function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Comportamento suave de rolagem
        })
    }

    // Detecta quando a página é recarregada (F5 ou botão de recarregar)
    window.onload = function() {
        scrollToTop() // Chama a função para rolar para o topo
    };

    // Para garantir que funcione também com F5
    window.addEventListener('beforeunload', function() {
        window.scrollTo(0, 0)
    })