var map;
var options = {
	zoom : 12,
	center : new google.maps.LatLng(-15.780, -47.900), //cordenadas
	mapTypeId : google.maps.MapTypeId.ROADMAP
}

function criaNovoPonto(lat, lon, titulo, descricao, map, icone, foto) {
	console.log(lat, lon, titulo);

	var conteudo = '<div id="content">' + '<div id="siteNotice">' + '</div>' + '<h3 id="firstHeading" class="firstHeading">' + titulo + '</h3>' + '<div id="bodyContent">' + '<p><b>Descrição:</b><br> ' + descricao + '</p>' + '<p><center><button class="btn btn-primary btn btn-large" type="button" >Ver Tudo</button></center>' + '</div>' + '</div>';

	var marcador = new google.maps.Marker({
		position : new google.maps.LatLng(lat, lon),
		// icon : icone,
		map : map,
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