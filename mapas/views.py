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


def ocorrencias(request):
    
    if request.method == 'GET':
        lista = Marcadores.objects.all()
        context = {}
        context['ocorrencias'] = lista
        formulario = MarcadoresForm()
        return render(request, 'mapa.html', {
        'formulario': formulario,
        'ocorrencias': lista
        })
    
    
    if request.method == 'POST':
        formulario = MarcadoresForm(request.POST)
        if formulario.is_valid():
            marcador = Marcadores()
            marcador.marcador_nome = request.POST['marcador_form_nome']
            marcador.marcador_nivel = request.POST['marcador_form_nivel']
            marcador.marcador_tipo = request.POST['marcador_form_tipo']
            marcador.marcador_descricao = request.POST['marcador_form_descricao']
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
        for consulta in lista:
            ocorrencias = {
                        'nome': consulta.marcador_nome,
                        'descricao': consulta.marcador_descricao,
                        'nivel': consulta.marcador_nivel,
                        'tipo': consulta.marcador_tipo,
                        'endereco': consulta.marcador_endereco,
                        'lat': consulta.marcador_lat,
                        'lon': consulta.marcador_lon
                        }
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

#def gera_graficos(request):
#    if request.method == 'GET':
##        lista = Marcadores.objects.all()
#        context = {}
##        context['ocorrencias'] = lista
#
#        context['ocorrencias'] = Marcadores.objects.raw('SELECT id, marcador_nome, marcador_descricao FROM mapas_marcadores')
#        print '>>>>>>>>>>>',context['ocorrencias']
#        return render(request, 'gera_graficos.html', context)
    
    
def gera_graficos(request):
    if request.method == 'GET':
        context = {}
        consulta = Marcadores.objects.raw('SELECT id, count(id) AS contagem FROM mapas_marcadores GROUP BY marcador_nivel')
        context['ocorrencias'] = consulta
        for x in consulta:
            print '++++++',x.marcador_nivel

        return render(request, 'gera_graficos.html', context)

