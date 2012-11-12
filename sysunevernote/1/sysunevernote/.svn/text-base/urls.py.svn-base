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
	(r'^logout/','users.views.logout')
)
