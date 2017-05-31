var cargado = 1;

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height()) {
        if (cargado < 4) {
            $.getJSON( "https://rawgit.com/CristianMR06/noticias/master/data/"+ cargado +".json", function( jsonObject ) {
                ponerComunidades( jsonObject );
            }); cargado++;
        } else {
            $('#cargar_mas').text('No hay más noticias');
        }
    }
});


function cargar() {
    if (cargado < 4) {
        $.getJSON( "https://rawgit.com/CristianMR06/noticias/master/data/"+ cargado +".json", function( jsonObject ) {
            ponerComunidades(jsonObject);
        }); cargado++;
    } else {
        $('#cargar_mas').text('No hay más noticias');
    }
};



function ponerComunidades(json){
   $.each(json, function (i, item) {

    $("#hola").append('<article class="post clearfix">' +
        '<a href="#" class="thumb pull-left">' +
        '<img class="img-thumbnail" src="' + item.img_noticia + '" /> </a>' +
        '<h2 class="post-title"><a href="#">' + item.titulo_noticia + '</a></h2>'+
        '<p><span class="glyphicon glyphicon-calendar"></span> <span class="post-fecha">' + item.fecha_noticia +
        '</span></p><p class="post-contenido text-justify">' + item.descripcion_noticia +
        '<div class="vermas"><a href="#" class="btn btn-primary">Leer más</a></div></article>');
})
};
