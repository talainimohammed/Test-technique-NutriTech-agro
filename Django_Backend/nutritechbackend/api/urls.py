from django.urls import path
from . import views

urlpatterns = [
    path('products', views.getproducts ),
    path('addproduct', views.addproduct ),
    path('deleteproduct/<int:idProduct>', views.deleteproduct ),
    path('login', views.login ),
]