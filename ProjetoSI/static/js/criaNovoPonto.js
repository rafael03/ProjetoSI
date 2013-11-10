// var map;
var options = {
	zoom : 12,
	center : new google.maps.LatLng(-15.780, -47.900), //cordenadas
	mapTypeId : google.maps.MapTypeId.ROADMAP
}
// 
// function criaNovoPonto(lat, lon, titulo, descricao, icone, map, foto) {
	// console.log(titulo, icone);
// 	
	// // Define o icone para cada marcador
	// var url_imagem = '';
	// switch(icone) {
		// case '1':
			// url_imagem = '/static/imagens/icone_baixo_nivel.png';
			// break;
		// case '2':
			// url_imagem = '/static/imagens/icone_meio_nivel.png';
			// break;
		// case '3':
			// url_imagem = '/static/imagens/icone_alto_nivel.png';
			// break;
	// }
	// var conteudo = '<div id="content">' + '<div id="siteNotice">' + '</div>' + '<h3 id="firstHeading" class="firstHeading">' + titulo + '</h3>' + '<div id="bodyContent">' + '<p><b>Descrição:</b><br> ' + descricao + '</p>' + '<p><center><button class="btn btn-primary btn btn-large" type="button" >Ver Tudo</button></center>' + '</div>' + '</div>';
	// var _icone = {
			// url: url_imagem,
			// size: new google.maps.Size(50, 50),
			// origin: new google.maps.Point(0,0),
			// anchor: new google.maps.Point(0, 32)
		// }
	// var marcador = new google.maps.Marker({
		// position : new google.maps.LatLng(lat, lon),
		// map : map,
		// icon : _icone,
		// title : titulo
	// });
// 
	// var infowindow = new google.maps.InfoWindow({
		// content : conteudo
	// });
// 
	// google.maps.event.addListener(marcador, 'click', function() {
		// infowindow.open(map, marcador);
	// });
// 
	// // map.panTo(position);
// 
	// $("#buttonCancelar").click();
// }