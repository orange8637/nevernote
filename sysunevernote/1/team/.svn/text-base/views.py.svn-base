#coding=utf-8
from django.http import HttpResponse,HttpResponseRedirect
from django.shortcuts import render_to_response,redirect
from django.template import RequestContext
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q
from note.models import Note
from users.models import User
from team.models import Teaminfo, TeamMember
from sysunevernote.Validation import validation
import time,json

#redirect
def addTeam_form(request):
	return render_to_response('team/addTeam_form.html')

@csrf_exempt
def addTeamValidation(request):
	result = {}
	if not validation.loginedCheck(request):
		result['rc']= 11
		return returnJSON(result)
	uid = request.session['UID']
	if not result:
		name = request.POST.get('name', '')
		infomation = request.POST.get('infomation', '')
		founder = User.objects.get(id = uid)
		addTeam(name = name, infomation = infomation, founder = founder)
		tid = Teaminfo.objects.get(name = name, founder = founder)
		addTeamMember(uid = founder, tid = tid, permissionType = 0)
		return HttpResponseRedirect('/')
@csrf_exempt
def getTeamList(request):
	result = {}
	if not validation.loginedCheck(request):
		result['rc'] = 11
		return returnJSON(result)
	else:
		####many to many 
		uid = request.session['UID']
		teammember = TeamMember.objects.filter(uid = uid)
		teaminfo = []
		for item in teammember:
			teaminfo.append(item.tid)
		return render_to_response('team/getTeamList.html', {'teaminfo':teaminfo})
@csrf_exempt
def viewTeam(request, tid):
	result = {}
	if not validation.loginedCheck(request):
		result['rc']= 11
		return returnJSON(result)
	else:
		uid = request.session['UID']
		if not validation.teamAuthorationCheck(uid = uid, tid = tid):
			result['rc'] = 10
			return returnJSON(result)
		try:
			teaminfo = Teaminfo.objects.get(tid = tid)
			teammember = TeamMember.objects.get(uid = uid, tid = teaminfo)
		except Teaminfo.DoesNotExist:
			result['rc'] =20
	#you write JSON
	return render_to_response('team/viewTeam.html', {'teaminfo':teaminfo, 'permissionType':teammember.permissionType})

def TeamValidation(request):
	result = {}
	name = request.POST.get('name', '')
	#validation
	if not name:
		result['rc'] = 22
		result['error'] = 'name is empty'
	return result
def addTeam(name, infomation, founder):
	newTeam = Teaminfo(name = name, infomation = infomation, founder = founder)
	newTeam.save()
def addTeamMember(uid, tid, permissionType):
	newTeamMember = TeamMember(uid = uid, tid = tid, permissionType = permissionType)
	newTeamMember.save()

