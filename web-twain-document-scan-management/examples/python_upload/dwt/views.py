from django.http import HttpResponse, request
from django import template
from django.shortcuts import render
import os
from PIL import Image as PILImage

from .models import Image

def index(request):
  return render(request, 'dwt/index.html')

# def upload(request):
#     if request.method == 'POST':
#         # handle_uploaded_file(request.FILES['RemoteFile'], str(request.FILES['RemoteFile']))
#         # return HttpResponse("Successful")
#         image = Image()
#         image.name = request.FILES['RemoteFile'].name
#         image.data = request.FILES['RemoteFile']
#         image.save()
#         return HttpResponse("Successful")

#     return HttpResponse("Failed")

# def handle_uploaded_file(file, filename):
#     if not os.path.exists('upload/'):
#         os.mkdir('upload/')

#     with open('upload/' + filename, 'wb+') as destination:
#         for chunk in file.chunks():
#             destination.write(chunk)

#         return destination


def upload(request):
    if request.method == 'POST':
        image_file = request.FILES['RemoteFile']
        
        # Create an instance of the image model if you have one
        image = Image()
        image.name = image_file.name
        
        # Save the image with a specified DPI
        save_image_with_dpi(image_file, image_file.name, dpi=(400, 400))

        image.data = image_file
        image.save()

        return HttpResponse("Successful")

    return HttpResponse("Failed")

def save_image_with_dpi(file, filename, dpi=(400, 400)):
    # Check if the upload directory exists, create if not
    upload_directory = 'upload/'
    if not os.path.exists(upload_directory):
        os.mkdir(upload_directory)

    # Open the image using Pillow
    with PILImage.open(file) as img:
        # Save the image with the specified DPI
        img.save(os.path.join(upload_directory, filename), dpi=dpi)

    return True  # Indicate successful saving