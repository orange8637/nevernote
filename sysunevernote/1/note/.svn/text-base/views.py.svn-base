#coding=utf-8
from django.http import HttpResponse,HttpResponseRedirect
from django.shortcuts import render_to_response,redirect
from django.template import RequestContext
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q
from note.models import Note
from users.models import User
from sysunevernote.Validation import validation
import time,json
import logging
#redirect
def addNote_form(request):
	return render_to_response('note/addNote_form.html')
def searchNote_form(request):
	return render_to_response('note/searchNote_form.html')


#@get		get note list
@csrf_exempt
def getNoteList(request,tag = None):
	result = {}
	if not validation.loginedCheck(request):
		result['rc'] = 11
		return returnJSON(result)
	else:
		uid = request.session['UID']
		try:
			if not tag:
				note = Note.objects.filter(uid = uid).order_by('-date')
			else:
				note = Note.objects.filter(uid = uid,tag = tag).order_by('-date')
			result['rc'] = 0
			items = []
			for item in note:
				noteInfo = {}
				noteInfo['nid'] = item.nid
				noteInfo['title'] = item.title
				items.append(noteInfo)
			result['notes'] = items
		except Note.DoesNotExist:
			result['rc'] = 21
	return returnJSON(result)
	#return render_to_response('note/viewNote_form.html', {'note':note})


#@get		view note
@csrf_exempt
def viewNote(request, nid):
	result = {}
	if not validation.loginedCheck(request):
		result['rc'] = 11
		return returnJSON(result)
	else:
		uid = request.session['UID']
		if not validation.userAuthorationCheck(uid,nid):
			result['rc'] = 10
			return returnJSON(result)
			#return render_to_response('note/viewNote.html', {'errors':errors})
		try:
			note = Note.objects.get(nid = nid)
			result['rc'] = 0
			result['tag'] = note.tag
			result['title'] = note.title
			result['content'] = note.content
			result['date'] = str(note.date.replace(tzinfo=None))
		except Note.DoesNotExist:
			result['rc'] = 20
	return returnJSON(result)
	#return render_to_response('note/viewNote.html', {'note':note})

#@get		delete note
@csrf_exempt
def deleteNote(request,nid):
	result = {}
	if not validation.loginedCheck(request):
		result['rc'] = 11
		return returnJSON(result)
	else:
		uid = request.session['UID']
		try:
			note = Note.objects.get(nid = nid)
			if note.uid.id != uid:
				result['rc'] = 10
			else:
				note.delete()
				result['rc'] = 0
		except Note.DoesNotExist:
			result['rc'] = 20
	return returnJSON(result)
	#return HttpResponseRedirect('/viewNote/')


@csrf_exempt
def addNoteValidation(request):
	result = {}
	if not validation.loginedCheck(request):
		result['rc'] = 11
		return returnJSON(result)
	uid = request.session['UID']
	result = noteValidation(request)	
	if not result:
		tag = request.POST.get('tag')
		title = request.POST.get('title')
		content = request.POST.get('content')
		isPublic = request.POST.get('isPublic')
		addNote(uid, tag, title, content, isPublic)
		result['rc'] = 0
	return returnJSON(result)

@csrf_exempt
def editNoteValidation(request, nid):
	result = {}
	if not validation.loginedCheck(request):
		result['rc'] = 11
		return returnJSON(result)
	uid = request.session['UID']
	if not validation.userAuthorationCheck(uid, nid):
		result['rc'] = 10
		return returnJSON(result)

	result = noteValidation(request)
	if not result:
		tag = request.POST.get('tag')
		title = request.POST.get('title')
		content = request.POST.get('content')
		isPublic = request.POST.get('isPublic')
		updateNote(nid, tag, title, content, isPublic)
		result['rc'] = 0
	return returnJSON(result)

def noteValidation(request):
	result = {}
	tag = request.POST.get('tag', '')
	title = request.POST.get('title', '')
	content = request.POST.get('content', '')
	isPublic = request.POST.get('isPublic', '')
	#validation
	if not title:
		result['rc'] = 22
		result['error'] = 'title is empty'
	elif not content:
		result['rc'] = 22
		result['error'] = 'content is empty'
	elif not isPublic:
		result['rc'] = 22
		result['error'] = 'isPublic is empty'
	return result

@csrf_exempt
def searchNoteValidation(request):
	result = {}
	if not validation.loginedCheck(request):
		result['rc'] = 11
		return returnJSON(result)
	uid = request.session['UID']
	user = User.objects.get(id = uid)
	search = request.POST.get('keyword', '')
	if not search:
		result['rc'] = 22
		result['error'] = 'keyword is empty'
		return returnJSON(result)
	
	try:
		note = Note.objects.filter(Q(uid = user), Q(title__icontains = search) | Q(tag__icontains = search) | Q( content__icontains = search))
		result['rc'] = 0
		items = []
		for item in note:
			noteInfo = {}
			noteInfo['nid'] = item.nid
			noteInfo['title'] = item.title
			items.append(noteInfo)
		result['notes'] = items
	except Note.DoesNotExist:
		result['rc'] = 23
	return returnJSON(result)

def addNote(uid, tag, title, content, isPublic):
	user = User.objects.get(id = uid)
	now = time.strftime('%Y-%m-%d',time.localtime(time.time()))
	newNote = Note(uid = user, tag = tag, title = title, content = content, date = now, isPublic = isPublic)
	newNote.save()

def updateNote(nid, tag, title, content, isPublic):
	note = Note.objects.get(nid = nid)
	note.tag = tag
	note.title = title
	note.content = content
	note.isPublic = isPublic
	note.save()

def returnJSON(result):
	return HttpResponse(json.dumps(result),mimetype="application/json")

