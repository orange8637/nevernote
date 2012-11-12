from django.http import HttpResponse,HttpResponseRedirect
from django.shortcuts import render_to_response,redirect
from django.template import RequestContext
from django.views.decorators.csrf import csrf_exempt
import time
import logging
from users.models import User 

#redirect
def reg_form(request):
	return render_to_response('users/reg_form.html')

def regSuccess(request):
	return render_to_response('users/regSuccess.html')

def login_form(request):
	return render_to_response('users/login.html')


@csrf_exempt
def registrationValidation(request):
	errors = []
	if request.method == "POST":
		username = request.POST.get('username','')  
		email = request.POST.get('email','')
		password = request.POST.get('password','') 
	
		#validation
		if not username:
			errors.append('Enter the username')
		if not password:
			errors.append('Enter the password')
		if not email:
			errors.append('Enter the email')
		#to do 
		


		if not errors:
			createUser(username,password,email)
			return render_to_response('users/regSuccess.html')
		else:
			logging.error(str(errors))
			return render_to_response('users/reg_form.html',{'errors':errors})

	else:
		return render_to_response('users/reg_form.html')

@csrf_exempt
def loginValidation(request):
	if request.method == "POST":
		email = request.POST.get('email','')
		password = request.POST.get('password','') 
		#validation
		errors = []
		if not email:
			errors.append('Enter the email')
		if not password:
			errors.append('Enter the password')
	
		
		if not errors:
			if doCheck(request,email,password):
				return HttpResponseRedirect('/')
			else:
				errors.append("username and password didn't match.")
				return render_to_response('users/login.html',{'errors':errors})
		else:
			logging.error(str(errors))
			return render_to_response('users/login.html',{'errors':errors})
	else:
		return render_to_response('users/login.html')

def logout(request):
	if 'username' in request.session:
		del request.session['username']
	if 'UID' in request.session:
		del request.session['UID']
	return HttpResponseRedirect('/')

def createUser(username,password,email):
		now = time.strftime('%Y-%m-%d',time.localtime(time.time()))
		newUser = User(username = username,
			password = password,
			regDate = now,
			email = email
			)
		newUser.save()


def doCheck(request,email,password):
	try:
		user = User.objects.get(email = email,password = password)
		request.session['username'] = user.username
		request.session['UID'] = user.id
		return True
	except:
		return False
