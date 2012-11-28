from django.db import models
from users.models import User
# Create your models here.
class Note(models.Model):
	nid = models.AutoField(primary_key = True)
	uid = models.ForeignKey(User)
	tag = models.CharField(max_length = 20)
	title = models.CharField(max_length = 100)
	content = models.TextField()
	date = models.DateTimeField(auto_now = True)
	isPublic = models.BooleanField()
	
	def __unicode__(self):
		return self.title
	class Meta:
		db_table = "note"
