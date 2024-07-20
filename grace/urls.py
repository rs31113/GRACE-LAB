from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("", include("main.urls", namespace="main")),
    path("gallery/", include("gallery.urls", namespace="gallery")),
    path("about/", include("about.urls", namespace="about")),
    path("admin/", admin.site.urls),
    path("ckeditor5/", include("django_ckeditor_5.urls")),
]
