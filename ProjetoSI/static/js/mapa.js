var map;
function initialize() {
    var mapa = new googleMapas();
    mapa.inicializa();
    // console.log(mapa.name);

    //Chama uma funcao ao clicar no botão central
    $("#criarMarker").click(function(){
        console.log("PAssou no click");
        mapa.mostraPonto();
    });

}

function mostraMarcadores(titulo, lat, lon) {
    var mapa = new googleMapas();
    mapa.inicializa();
    mapa.criaMarcadores(titulo, lat, lon);
}

var googleMapas = function () {

    this.inicializa = function() {
        var mapOptions = {
            zoom: 12,
            center : new google.maps.LatLng(-15.780, -47.900), //cordenadas
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
        
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

        this.criaMarcadores = function(titulo, lat, lon) {
            console.log(titulo);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(lat, lon),
                map: map,
                title: titulo
            });
        }
        
    }

    preencheLatLon = function(location){
        console.log(location.pb);
        // Preenche os Campos Latitude e Longitude do formulario
        $("#id_marcador_form_lat").val(location.pb);
        $("#id_marcador_form_lon").val(location.qb);
    }
    //Cria um ponto onde foi clicado
    placeMarker = function(location) {
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
        // $("#buttonPopup").bind();
        console.log(marker.position);
    }

    
}

