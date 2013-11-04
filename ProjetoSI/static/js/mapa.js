var map;
var ponteiro = 'move';

function initialize() {
    var mapa = new googleMapas();
    mapa.inicializa();

    //Chama uma funcao ao clicar no botão central
    $("#criarMarker").click(function(){
        console.log("PAssou no click");
        mapa.mostraPonto();
        
    });

}

function mostraMarcadores(titulo, lat, lon) {
    console.log("passou no mostraMarcadores");
    var mapa = new googleMapas();
    mapa.inicializa();
    mapa.criaMarcadores(lat, lon);

}

var googleMapas = function () {

    this.inicializa = function() {
        var mapOptions = {
            zoom: 12,
            center : new google.maps.LatLng(-15.780, -47.900), //cordenadas
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            streetViewControl: true,
            draggingCursor: ponteiro
        }

        map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
        
        // var marker = new google.maps.Marker({
                // position: new google.maps.LatLng( -15.731457491108594, -47.900390625),
                // map: map,
                // title: 'titulo'
        // });
        
        this.criaMarcadores = function(lat, lon) {
            console.log("chegou no criaMarcadores", lon, lat);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(lon, lat),
                title: "Meu ponto personalizado! :-D",
                map: map
            });
        }
        //Server para criar um Marcador
        // this.mostraMarcadores = function(titulo) {
        //     var marker = new google.maps.Marker({
        //         position: map.getCenter(),
        //         map: map,
        //         title: titulo
        //     });
        // }

        //Pega o ponto onde foi clicado

        this.mostraPonto = function() {
            google.maps.event.addListener(map, 'click', function(event) {
                preencheLatLon(event.latLng);
                $("#buttonPopup").click();
                // placeMarker(event.latLng);
            });
        }

        
        
    }

    preencheLatLon = function(location){
        console.log(location);
        // Preenche os Campos Latitude e Longitude do formulario
        $("#id_marcador_form_lat").val(location.mb);
        $("#id_marcador_form_lon").val(location.lb);
    }
    //Cria um ponto onde foi clicado
    // placeMarker = function(location) {
        // var marker = new google.maps.Marker({
            // position: location,
            // map: map
        // });
        // // $("#buttonPopup").bind();
        // console.log(marker.position);
    // }

    
}

