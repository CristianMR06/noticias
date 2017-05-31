var noticias_cargadas = 1;

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height()) {
        if (noticias_cargadas < 4) {
            $.getJSON( "https://rawgit.com/CristianMR06/noticias/master/data/"+ noticias_cargadas +".json", function( jsonObject ) {
                poner_noticias( jsonObject );
            }); noticias_cargadas++;
        } else {
            $('#cargar_mas').text('No hay más noticias');
        }
    }
});


function cargar() {
    if (noticias_cargadas < 4) {
        $.getJSON( "https://rawgit.com/CristianMR06/noticias/master/data/"+ noticias_cargadas +".json", function( jsonObject ) {
            poner_noticias(jsonObject);
        }); noticias_cargadas++;
    } else {
        $('#cargar_mas').text('No hay más noticias');
    }
};



function poner_noticias(json){
   $.each(json, function (i, item) {

    $("#hola").append('<article class="post clearfix">' +
        '<a href="news1" class="thumb pull-left">' +
        '<img class="img-thumbnail" src="' + item.img_noticia + '" /> </a>' +
        '<h2 class="post-title"><a href="news1">' + item.titulo_noticia + '</a></h2>'+
        '<p><span class="glyphicon glyphicon-calendar"></span> <span class="post-fecha">' + item.fecha_noticia +
        '</span></p><p class="post-contenido text-justify">' + item.descripcion_noticia +
        '<div class="vermas"><a href="news1" class="btn btn-primary">Leer más</a></div></article>');
})
};
