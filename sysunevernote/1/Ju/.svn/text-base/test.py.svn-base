from django.http import HttpResponse
from django.template import Template, Context
from django.template.loader import get_template
from django.shortcuts import render_to_response
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime

def sayHello(request):
	now=datetime.now()
	content="Oh My GOD!!!~~<br/>ZBH!!~~~~Oh No~~~"
	return HttpResponse('%s%s%s'%(content,"<br/>",now))

def paraHandler(request,paras):
	content="You have passed the parameter: %s<br/>Oh they killed Kenny.<br/>You bastards!"%paras
	return HttpResponse(content)

def moduleTest(request,paras):
	c=Context({'nameA':paras})
	return HttpResponse(render_to_response('Ju/Templates/template.html',c))
	# t=Template(raw_template)
	# c=Context({'nameA':paras})
	# content=t.render(c)
	# return HttpResponse(content)

def mvc(request):
	content="This is Ju's MVC test"
	return HttpResponse(content)

def ajax(request,paras):
	c=Context({'nameA':paras})
	return HttpResponse(render_to_response('Ju/Templates/ajax.html',c))

def main(request):
	return HttpResponse(render_to_response('Ju/Templates/main.html'))

@csrf_exempt
def ajaxResponse(request):
	rName=""
	rType=request.GET.get('type')
	if(rType=="GET"):
		rName=request.GET.get('txt_name')	
		return HttpResponse("%s_GET"%rName)	
	else:
		rName=request.POST.get('txt_name')
		return HttpResponse("%s_POST"%rName)
	# return HttpResponse("%sABC"%rName)
	# return "%s!!!"%rName