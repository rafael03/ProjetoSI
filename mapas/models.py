#encoding: utf-8
from django.db import models
from django.core.urlresolvers import reverse
# Create your models here.
from django import forms
# Create your models here.

TYPE_OCORRENCIA = (
				(1, u'Cano quebrado'),
				(2, u'Buraco na pista'),
				(3, u'Lixo na rua'),
				(4, u'Iluminação'),
					)

class Marcadores(models.Model):
	marcador_nome = models.CharField(verbose_name=u'Nome:', max_length=100)
	marcador_descricao = models.CharField(verbose_name=u'Descrição', max_length=300)
	marcador_tipo = models.CharField(verbose_name=u'Tipo:', max_length=100)
	marcador_endereco = models.CharField(verbose_name=u'Endereco:', max_length=100)
	marcador_lat = models.CharField(verbose_name=u'Latitude:', max_length=100)	
	marcador_lon = models.CharField(verbose_name=u'Longitude:', max_length=100)
	data = models.DateTimeField(verbose_name=u'Data:', auto_now_add=True)

class MarcadoresForm(forms.Form):
	marcador_form_nome = forms.CharField(label='Titulo:', max_length=100)
	marcador_form_tipo = forms.CharField(label='Tipo da Ocorrência', max_length=10, widget=forms.Select(choices=TYPE_OCORRENCIA))
	marcador_form_descricao = forms.CharField(label='Descrição',max_length=300, widget=forms.Textarea)
	marcador_form_endereco = forms.CharField(label='Endereço', max_length=100)
	marcador_form_lat = forms.CharField(label='Latitude', max_length=100)
	marcador_form_lon = forms.CharField(label='Longitude', max_length=100)
