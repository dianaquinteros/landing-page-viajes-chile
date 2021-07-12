$(function () {
    // Habilita links de navbar hacia las secciones del sitio
    $('a').click(function (event) {
        event.preventDefault();

        var gato = this.hash;

        $('html').animate(
            {
                scrollTop: $(gato).offset().top
            },
            800
        );
    });

    // Cambia color de navbar de transparente a negro cuando se realiza scroll en la página
    $(document).scroll(function () {
        var $nav = $(".navbar.fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

    // Activa Bootstrap Tooltip
    $('[data-toggle="tooltip"]').tooltip();
    
});
