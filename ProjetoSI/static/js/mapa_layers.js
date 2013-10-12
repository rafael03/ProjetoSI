var map;
var image;
var imaAzul;
var titulo;
var descricao;
var foto; 

function initialize() {
    console.log("TESTE")
  var mapOptions = {
    center : new google.maps.LatLng(-15.780, -47.900), //cordenadas
    zoom : 12, //Nivel de zoom
    mapTypeId : google.maps.MapTypeId.ROADMAP, //Define o Tipo de Mapa
    disableDefaultUI : false // mostra as opções na tela
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h2 id="firstHeading" class="firstHeading">Buraco na pista</h2>'+
    '<div id="bodyContent">'+
    '<p><b>Descrição:</b>, Pequeno buraco em frente ao projeção.</p>'+
    '<p><center><img src='+ 'img/buraconapista.jpg' +' height=250px width=250px></center></p>'+
    '</div>'+
    '</div>';



var imaVerde = {
    url: 'img/marcadorVerde.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(50, 50),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(0, 32)
  };

  imaAzul = {
    url: 'img/marcadorAzul.png',
    size: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 32)
  }var map;
var image;
var imaAzul;
var titulo;
var descricao;
var foto; 

function initialize() {
    console.log("TESTE")
  var mapOptions = {
    center : new google.maps.LatLng(-15.780, -47.900), //cordenadas
    zoom : 12, //Nivel de zoom
    mapTypeId : google.maps.MapTypeId.ROADMAP, //Define o Tipo de Mapa
    disableDefaultUI : false // mostra as opções na tela
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h2 id="firstHeading" class="firstHeading">Buraco na pista</h2>'+
    '<div id="bodyContent">'+
    '<p><b>Descrição:</b>, Pequeno buraco em frente ao projeção.</p>'+
    '<p><center><img src='+ 'img/buraconapista.jpg' +' height=250px width=250px></center></p>'+
    '</div>'+
    '</div>';



var imaVerde = {
    url: 'img/marcadorVerde.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(50, 50),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(0, 32)
  };

  imaAzul = {
    url: 'img/marcadorAzul.png',
    size: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 32)
  }
    


  

    var titulo = 'Pequeno buraco';
    var descricao = 'Pequeno buraco em frente ao projecao de taguatinga';
    foto = 'img/buraconapista.jpg'
    var lat = -15.780;
    var lon = -47.900;

    //Quando clicar no mapa ...
    google.maps.event.addListener(map, 'click', function(e) {
        //Crama função responsavel por criar novo ponto no mapa
        formCriacaoDePontoNoMapa(e.latLng, map, imaAzul, foto);
    });

  // criaPonto(titulo, descricao, foto, lat, lon, imaVerde);
    // criaPonto('Poça d\'água', 'Carro quebra ao passar em uma Poça d\'água em ceilândia', 'img/carronoburaco.jpg', -15.750, -47.990, imaAzul)

}

//Funciton que cria novo ponto no mapa
function formCriacaoDePontoNoMapa(position, map, icone, foto) {

    $("#buttonPopup").click();
    $("#buttonSalvar").click( function() {
        criaNovoPonto(position, map, imaAzul, foto);
    });
    
}

function criaNovoPonto(position, map, icone, foto) {

    titulo = $("#campoTitulo").val();
    descricao = $("#campoDescricao").val();

    var conteudo = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h2 id="firstHeading" class="firstHeading">'+ titulo +'</h2>'+
        '<div id="bodyContent">'+
        '<p><b>Descrição:</b><br> ' + descricao + '</p>'+
        '<p><center><img src='+ foto +' height=200px width=200px class="img-rounded"></center></p>'+
        '<p><center><button class="btn btn-primary btn btn-large" type="button" >Ver Tudo</button></center>'+
        '</div>'+
        '</div>';

    var marcador = new google.maps.Marker({
        position: position,
        icon: icone,
        map: map,
        title: titulo
    });

    var infowindow = new google.maps.InfoWindow({
        content: conteudo
    });

    google.maps.event.addListener(marcador, 'click', function() {
        infowindow.open(map,marcador);
    });

    map.panTo(position);

    $("#buttonCancelar").click();
}

// function criaPonto(titulo, descricao, foto, lat, lon, icone) {
//     var conteudo = '<div id="content">'+
//         '<div id="siteNotice">'+
//         '</div>'+
//         '<h2 id="firstHeading" class="firstHeading">'+ titulo +'</h2>'+
//         '<div id="bodyContent">'+
//         '<p><b>Descrição:</b><br> ' + descricao + '</p>'+
//         '<p><center><img src='+ foto +' height=200px width=200px class="img-rounded"></center></p>'+
//         '<p><center><button class="btn btn-primary btn btn-large" type="button" >Ver Tudo</button></center>'+
//         '</div>'+
//         '</div>';

//  var marcador = new google.maps.Marker({
//         position: new google.maps.LatLng( lat, lon),
//         icon: icone,
//         map: map,
//         title: titulo
//     });

//     var infowindow = new google.maps.InfoWindow({
//         content: conteudo
//     });

//     google.maps.event.addListener(marcador, 'click', function() {
//         infowindow.open(map,marcador);
//     });

//     map.panTo(position);
// }

    


  

    var titulo = 'Pequeno buraco';
    var descricao = 'Pequeno buraco em frente ao projecao de taguatinga';
    foto = 'img/buraconapista.jpg'
    var lat = -15.780;
    var lon = -47.900;

    //Quando clicar no mapa ...
    google.maps.event.addListener(map, 'click', function(e) {
        //Crama função responsavel por criar novo ponto no mapa
        formCriacaoDePontoNoMapa(e.latLng, map, imaAzul, foto);
    });

  // criaPonto(titulo, descricao, foto, lat, lon, imaVerde);
    // criaPonto('Poça d\'água', 'Carro quebra ao passar em uma Poça d\'água em ceilândia', 'img/carronoburaco.jpg', -15.750, -47.990, imaAzul)

}

//Funciton que cria novo ponto no mapa
function formCriacaoDePontoNoMapa(position, map, icone, foto) {

    $("#buttonPopup").click();
    $("#buttonSalvar").click( function() {
        criaNovoPonto(position, map, imaAzul, foto);
    });
    
}

function criaNovoPonto(position, map, icone, foto) {

    titulo = $("#campoTitulo").val();
    descricao = $("#campoDescricao").val();

    var conteudo = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h2 id="firstHeading" class="firstHeading">'+ titulo +'</h2>'+
        '<div id="bodyContent">'+
        '<p><b>Descrição:</b><br> ' + descricao + '</p>'+
        '<p><center><img src='+ foto +' height=200px width=200px class="img-rounded"></center></p>'+
        '<p><center><button class="btn btn-primary btn btn-large" type="button" >Ver Tudo</button></center>'+
        '</div>'+
        '</div>';

    var marcador = new google.maps.Marker({
        position: position,
        icon: icone,
        map: map,
        title: titulo
    });

    var infowindow = new google.maps.InfoWindow({
        content: conteudo
    });

    google.maps.event.addListener(marcador, 'click', function() {
        infowindow.open(map,marcador);
    });

    map.panTo(position);

    $("#buttonCancelar").click();
}

// function criaPonto(titulo, descricao, foto, lat, lon, icone) {
//     var conteudo = '<div id="content">'+
//         '<div id="siteNotice">'+
//         '</div>'+
//         '<h2 id="firstHeading" class="firstHeading">'+ titulo +'</h2>'+
//         '<div id="bodyContent">'+
//         '<p><b>Descrição:</b><br> ' + descricao + '</p>'+
//         '<p><center><img src='+ foto +' height=200px width=200px class="img-rounded"></center></p>'+
//         '<p><center><button class="btn btn-primary btn btn-large" type="button" >Ver Tudo</button></center>'+
//         '</div>'+
//         '</div>';

//  var marcador = new google.maps.Marker({
//         position: new google.maps.LatLng( lat, lon),
//         icon: icone,
//         map: map,
//         title: titulo
//     });

//     var infowindow = new google.maps.InfoWindow({
//         content: conteudo
//     });

//     google.maps.event.addListener(marcador, 'click', function() {
//         infowindow.open(map,marcador);
//     });

//     map.panTo(position);
// }
