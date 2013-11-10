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
    	console.log('initi')
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
        	console.log("Click na tela")
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
        $("#id_marcador_form_lat").val(location.ob);
        $("#id_marcador_form_lon").val(location.nb);
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

function criaNovoPonto(lat, lon, titulo, descricao, icone, map, foto) {
	console.log(titulo, icone);
	
	// Define o icone para cada marcador
	var url_imagem = '';
	switch(icone) {
		case '1':
			url_imagem = '/static/imagens/icone_baixo_nivel.png';
			break;
		case '2':
			url_imagem = '/static/imagens/icone_meio_nivel.png';
			break;
		case '3':
			url_imagem = '/static/imagens/icone_alto_nivel.png';
			break;
	}
	var conteudo = '<div id="content">' + '<div id="siteNotice">' + '</div>' + '<h3 id="firstHeading" class="firstHeading">' + titulo + '</h3>' + '<div id="bodyContent">' + '<p><b>Descrição:</b><br> ' + descricao + '</p>' + '<p><center><button class="btn btn-primary btn btn-large" type="button" >Ver Tudo</button></center>' + '</div>' + '</div>';
	var _icone = {
			url: url_imagem,
			size: new google.maps.Size(50, 50),
			origin: new google.maps.Point(0,0),
			anchor: new google.maps.Point(0, 32)
		}
	var marcador = new google.maps.Marker({
		position : new google.maps.LatLng(lat, lon),
		map : map,
		icon : _icone,
		title : titulo
	});

	var infowindow = new google.maps.InfoWindow({
		content : conteudo
	});

	google.maps.event.addListener(marcador, 'click', function() {
		infowindow.open(map, marcador);
	});

	// map.panTo(position);

	$("#buttonCancelar").click();
}