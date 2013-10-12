#encoding: utf-8
from django.db import models
from django.core.urlresolvers import reverse
# Create your models here.
from django import forms
TYPE_ESTADOS = (
				(1, u'Acre (AC)'),
				(2, u'Alagoas (AL)'),
				(3, u'Amapá (AP)'),
				(4, u'Amazonas (AM)'),
				(5, u'Bahia (BA)'),
				(6, u'Ceará (CE)'),
				(7, u'Distrito Federal (DF)'),
				(8, u'Espírito Santo (ES)'),
				(9, u'Goiás (GO)'),
				(10, u'Maranhão (MA)'),
				(11, u'Mato Grosso (MT)'),
				(12, u'Mato Grosso do Sul (MS)'),
				(13, u'Minas Gerais (MG)'),
				(14, u'Pará (PA) '),
				(15, u'Paraíba (PB)'),
				(16, u'Paraná (PR)'),
				(17, u'Pernambuco (PE)'),
				(18, u'Piauí (PI)'),
				(19, u'Rio de Janeiro (RJ)'),
				(20, u'Rio Grande do Norte (RN)'),
				(21, u'Rio Grande do Sul (RS)'),
				(22, u'Rondônia (RO)'),
				(23, u'Roraima (RR)'),
				(24, u'Santa Catarina (SC)'),
				(25, u'São Paulo (SP)'),
				(26, u'Sergipe (SE)'),
				(27, u'Tocantins (TO)'),
					)
class Usuario(models.Model):
	nome = models.CharField(verbose_name=u'Nome:', max_length=100)
	cidade = models.CharField(verbose_name=u'Cidade:', max_length=100)
	email = models.EmailField(verbose_name=u'E-mail:')
	data = models.DateTimeField(verbose_name=u'Data:', auto_now_add=True)

class UsuarioForm(forms.Form):
	nome = forms.CharField(max_length=100)
	cidade = forms.CharField(max_length=5, widget=forms.Select(choices=TYPE_ESTADOS))
	email = forms.EmailField()
	# data = forms.DateTimeField()