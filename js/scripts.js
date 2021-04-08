$(function () {

    $(window).scroll(function () {
        // pega a altura do scroll
        var windowOffY = $(window).scrollTop();
        // pega a altura total da página
        var windowHeight = $(window).height();
        $('.sessao').each(function () {
            // pega a distância do topo do elemento ao topo da página
            var elOffY = $(this).offset().top;

            if (elOffY + 400 < (windowOffY + windowHeight) && elOffY + 400 + $(this).height() > windowOffY) {
                $('a').css('color', '#B0CFBB');
                var target = $(this).attr('target');
                $('.' + target).css('color', '#1A1B3D');
                return;
            }
        })
    })

});