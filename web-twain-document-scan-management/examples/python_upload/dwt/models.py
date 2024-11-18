from django.db import models

# Create your models here.
class Image(models.Model):
    name = models.CharField(max_length=30)
    data = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.name
    
class MapType(models.Model):
    map_code = models.CharField(max_length=30,blank=True, null=True)
    mapname_english = models.CharField(max_length=100,blank=True,null=True)
    mapname_marathi = models.CharField(max_length=100,blank=True,null=True)


    class Meta:
        verbose_name = ("MapType")
        verbose_name_plural = ("MapType")
    
    def __str__(self):
        return f"{self.pk},{self.map_code}"


class District(models.Model):
    district_code = models.CharField(max_length=30, unique=True, null=True, blank=True)
    district_name = models.CharField(max_length=30,blank=True,null=True)


    class Meta:
        verbose_name = ("District")
        verbose_name_plural = ("District")
    
    def __str__(self):
        return f"{self.pk},{self.district_code},{self.district_name}"


class Taluka(models.Model):
    district= models.ForeignKey(District,on_delete=models.CASCADE,blank=True,null=True,related_name='district_id')
    taluka_code = models.CharField(max_length=30, unique=True, null=True, blank=True)
    taluka_name = models.CharField(max_length=30,blank=True,null=True)


    class Meta:
        verbose_name = ("Taluka")
        verbose_name_plural = ("Taluka")
    
    def __str__(self):
        return f"{self.pk},{self.taluka_code}"

class Village(models.Model):
    taluka = models.ForeignKey(Taluka,on_delete=models.CASCADE,blank=True,null=True,related_name='taluka_id')
    village_code = models.CharField(max_length=30, unique=True, null=True, blank=True)
    village_name = models.CharField(max_length=100,blank=True,null=True)


    class Meta:
        verbose_name = ("Village")
        verbose_name_plural = ("Village")

    def __str__(self):
        return f"{self.pk},{self.village_code}"
    