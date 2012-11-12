from django.http import HttpResponse
def index(request):
	username = "visitor"
	content = ""
	if 'username' in request.session:
		username = request.session['username']
		content = '<a href="/logout">logout</a>'
	else:
		content = '<a href="/reg">register</a><br /><a href="/login">login</a>'
	content += '<h1>hello,' + username + '</h1><br />This is Nevernote!Have a good experience!<br />' 
	
	return HttpResponse(content)
