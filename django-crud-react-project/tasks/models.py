from django.db import models

# Create your models here.



# Create model for the tasks 


class Task(models.Model):
    title = models.CharField(max_length=250)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)

    def __str__(self):
        return self.title