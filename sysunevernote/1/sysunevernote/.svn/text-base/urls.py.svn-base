from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'sysunevernote.views.home', name='home'),
    # url(r'^sysunevernote/', include('sysunevernote.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
	
	#index:
	(r'^$','sysunevernote.hello.index'),
	(r'^index/$','sysunevernote.hello.index'),
	#reg
	(r'^reg/$','users.views.reg_form'),
	(r'^reg/postRegisteration/$','users.views.registrationValidation'),
	(r'^reg/regSuccess/$','users.views.regSuccess'),
	#login
	(r'^login/$','users.views.login_form'),
	(r'^login/postLogin/$','users.views.loginValidation'),
	#logout
	(r'^logout/','users.views.logout'),
	#Note
	#addNote
	(r'^addNote/$', 'note.views.addNoteValidation'),
	(r'^addNote/form/$', 'note.views.addNote_form'),
	#searchNote
	(r'^searchNote/form$', 'note.views.searchNote_form'),
	(r'^searchNote/$', 'note.views.searchNoteValidation'),
	#viewNote
	(r'^getNoteList/$', 'note.views.getNoteList'),
	(r'^getNoteList/(?P<tag>.+)/$', 'note.views.getNoteList'),
	(r'^viewNote/(?P<nid>\d+)/$', 'note.views.viewNote'),
	#editNote
	(r'^editNote/(?P<nid>\d+)/$', 'note.views.editNoteValidation'),
	#deleteNote
	(r'^deleteNote/(?P<nid>\d+)/$', 'note.views.deleteNote'),
	#Team
	#addTeam
	(r'^addTeam/$', 'team.views.addTeamValidation'),
	(r'^addTeam/form/$', 'team.views.addTeam_form'),
	#viewTeam
	(r'^getTeamList/$', 'team.views.getTeamList'),
	(r'^viewTeam/(?P<tid>\d+)/$', 'team.views.viewTeam'),
	#JuTest
	(r'^Ju/hello/$','Ju.test.sayHello'),
	(r'^Ju/paras/(\d)/$','Ju.test.paraHandler'),
	(r'^Ju/mod/(.*)/$','Ju.test.moduleTest'),
	(r'^Ju/mvc/$','Ju.test.mvc'),
	(r'^Ju/ajax/(.*)/$','Ju.test.ajax'),
	(r'^Ju/main','Ju.test.main'),
	##JuTest Response
	# (r'^Ju/function/ajaxResponse/(.*)/$','Ju.test.ajaxResponse'),
	(r'^Ju/function/ajaxResponse/$','Ju.test.ajaxResponse'),
	#JuAJAX Necessities
	# (r'^function/(?P<path>.*)$','django.views.static.serve',{'document_root':'Ju/function'}),
	(r'^js/(?P<path>.*)$','django.views.static.serve',{'document_root':'Ju/js'}),
	(r'^css/(?P<path>.*)$','django.views.static.serve',{'document_root':'Ju/css'}),
	(r'^img/(?P<path>.*)$','django.views.static.serve',{'document_root':'Ju/img'}),
	(r'^fonts/(?P<path>.*)$','django.views.static.serve',{'document_root':'Ju/fonts'}),
)
