from django.http import HttpResponse,HttpResponseRedirect
from django.shortcuts import render_to_response,redirect
from django.template import RequestContext
from django.views.decorators.csrf import csrf_exempt
import time
from note.models import Note
from users.models import User

#redirect
def addNote_form(request):
	return render_to_response('note/addNote_form.html')
def searchNote_form(request):
	return render_to_response('note/searchNote_form.html')

@csrf_exempt
def addNoteValidation(request):
	errors = []
	if request.method == "POST":
		uid = request.session['UID']
		user = User.objects.get(id = uid)
		tag = request.POST.get('tag', '')
		title = request.POST.get('title', '')
		content = request.POST.get('content', '')
		isPublic = request.POST.get('isPublic', '')
		#validation
		if not title:
			errors.append('Enter the title')
		else:
			note = Note.objects.filter(uid = user, title = title)
			if note: 
				errors.append('the title name is repeat!')
		#to do
		if not errors:
			addNote(user, tag, title, content, isPublic)
			return render_to_response('note/addNoteSuccess.html')
		else:
			return render_to_response('note/addNote_form.html', {'errors':errors})
	else:
		return HttpResponseRedirect('/')
@csrf_exempt
def searchNoteValidation(request):
	if request.method == "POST":
		uid = request.session['UID']
		user = User.objects.get(id = uid)
		search = request.POST.get('search', '')
		note = Note.objects.filter(uid = user, title__icontains=search)
		result = False
		if note:
			result = True
		return render_to_response('note/searchNoteSuccess.html', {'result':result, 'note':note})
	else:
		return HttpResponseRedirect('/')
@csrf_exempt
def viewNote_form(request):
	uid = request.session['UID']
	note = Note.objects.filter(uid = uid).order_by('-date')
	return render_to_response('note/viewNote_form.html', {'note':note})
@csrf_exempt
def viewNote(request, nid):
	uid = request.session['UID']
	note = Note.objects.get(nid = nid)
	request.session['NID'] = note.nid
	return render_to_response('note/viewNote.html', {'note':note})
@csrf_exempt
def editNote(request):
	errors = []
	nid = request.session['NID']
	uid = request.session['UID']
	user = User.objects.get(id = uid)
	note = Note.objects.get(nid = nid)
	return render_to_response('note/editNote_form.html', {'note':note})
@csrf_exempt
def editNoteValidation(request):
	pass

@csrf_exempt
def deleteNote(request):
	nid = request.session['NID']
	note = Note.objects.get(nid = nid)
	note.delete()
	return HttpResponseRedirect('/viewNote/')
	

def addNote(user, tag, title, content, isPublic):
	now = time.strftime('%Y-%m-%d',time.localtime(time.time()))
	newNote = Note(uid = user, tag = tag, title = title, content = content, date = now, isPublic = isPublic)
	newNote.save()

