# Create your views here.
from django.shortcuts import render, render_to_response
from django.template import RequestContext
from django.http import HttpResponseRedirect, HttpResponse
from models import Marcadores, MarcadoresForm


def home(request):
    context = {
               'nome': "Rafael",
               'email': "rafaelrps11@gmail.com",
               }
    
    return render_to_response('home.html', 
                              context,
                              RequestContext(request))


def cadastra_ocorrencia(request):
    if request.method == 'POST':
        formulario = MarcadoresForm(request.POST)
        if formulario.is_valid():
            marcador = Marcadores()
            marcador.marcador_nome = request.POST['marcador_form_nome']
            marcador.marcador_tipo = request.POST['marcador_form_tipo']
            marcador.marcador_endereco = request.POST['marcador_form_endereco']
            marcador.marcador_lat = request.POST['marcador_form_lat']
            marcador.marcador_lon = request.POST['marcador_form_lon']
            marcador.save()
            return HttpResponseRedirect('/lista_de_ocorrencias/')
    else:
        formulario = MarcadoresForm()
    return render(request, 'mapa.html', {
        'formulario': formulario,
        })

def lista_de_ocorrencias(request):
    if request.method == 'GET':
        lista = Marcadores.objects.all()
        context = {}
        context['ocorrencias'] = lista
        return render(request, 'lista_de_ocorrencias.html', context)


def mostra_pontos(request):
    if request.method == 'GET':
        lista = Marcadores.objects.all()
        context = {}
        context['ocorrencias'] = lista
        return render(request, 'mostra_pontos.html', context)

def mapa(request):
	context = {'nome' :"mapas",
	}
	return render_to_response('mapa.html',
								context,
								RequestContext(request))