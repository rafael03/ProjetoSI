#encoding: utf-8
# Create your views here.
from django.shortcuts import render_to_response, render

from django.shortcuts import render, get_object_or_404
from django.template import RequestContext
from django.http import HttpResponseRedirect, HttpResponse
from django.db import connection

from models import Usuario 
from models import UsuarioForm

def home(request):
    context = {
               'nome': "Rafael",
               'email': "rafaelrps11@gmail.com",
               }
    
    return render_to_response('home.html', 
                              context,
                              RequestContext(request))
def index(request):
	context = {'nome' :"mapas",
	}
	return render_to_response('construct.html',
								context,
								RequestContext(request))# Create your views here.

def cadastro(request):
    if request.method == 'POST':
        form = UsuarioForm(request.POST)        
        if form.is_valid():
            campos = Usuario()
            campos.nome = request.POST['nome']
            campos.cidade = request.POST['cidade']
            campos.email = request.POST['email']
            campos.save()
            return HttpResponseRedirect('/sucesso/') # Redirect after POST
    else:
        form = UsuarioForm()
    return render(request, 'cadastro.html', {
                            'form':form,
                            })

def lista_dados(request):
    if request.method == 'GET':
        lista = Usuario.objects.all()
        context = {}
        context['formularios'] = lista
        # cursor = connection.cursor()
        
        # campos = cursor.execute("SELECT * FROM usuarios_usuario")
        return render(request, 'lista_de_usuarios.html', context)


def sucesso(request):
    context = {'nome' :"mapas",
    }
    return render_to_response('sucesso.html',
                                context,
                                RequestContext(request))
