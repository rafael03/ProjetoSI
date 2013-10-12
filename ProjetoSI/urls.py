from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'mapas.views.home', name='home'),
    url(r'^$', 'mapas.views.cadastra_ocorrencia', name=''),
    url(r'^mapa/', 'mapas.views.cadastra_ocorrencia', name='mapa'),
    url(r'^lista_de_ocorrencias/', 'mapas.views.lista_de_ocorrencias', name='lista_de_ocorrencias'),
    url(r'^mostra_pontos/', 'mapas.views.mostra_pontos', name='mostra_pontos'),

    # URL'S Referente aos Usuarios
    url(r'^ususario/', 'usuarios.views.index', name='usuario'),
    url(r'^usuario/cadastro/', 'usuarios.views.cadastro', name='cadastro_de_usuarios'),
    url(r'^usuario/lista_de_usuarios/', 'usuarios.views.lista_dados', name='lista_dados'),


    # URL'S Referente aos Graficos
    url(r'^graficos/','usuarios.views.index', name='graficos'),

    url(r'^sucesso/', 'usuarios.views.sucesso', name='sucesso'),
    # url(r'^ProjetoSI/', include('ProjetoSI.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
