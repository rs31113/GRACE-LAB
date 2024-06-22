import django.views
from django.shortcuts import render
from gallery.models import Collection


class MainView(django.views.generic.TemplateView):
    template_name = "main.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["gallery"] = Collection.objects.all()
        return context


__all__ = ()
