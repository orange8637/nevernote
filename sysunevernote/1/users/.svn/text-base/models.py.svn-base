from django.db import models

class User(models.Model):
	username = models.CharField(max_length = 20)
	password = models.CharField(max_length = 32)
	email = models.EmailField()
	regDate = models.DateField()

	def __unicode__(self):
		return self.username

	class Meta:
		db_table = "user"
