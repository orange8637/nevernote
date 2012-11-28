from django.db import models
from users.models import User
# Create your models here.

class Teaminfo(models.Model):
	tid = models.AutoField(primary_key = True)
	name = models.CharField(max_length = 20)
	infomation = models.CharField(max_length = 100)
	founder = models.ForeignKey(User)

	def __unicode__(self):
		return self.name

class TeamMember(models.Model):
	mid = models.AutoField(primary_key = True)
	uid = models.ForeignKey(User)
	tid = models.ForeignKey(Teaminfo)
	permissionType = models.IntegerField()
