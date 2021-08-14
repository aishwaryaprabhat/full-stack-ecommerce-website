from django.urls import path 
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"), #home page
    path('products/', views.getProducts, name="products"), #home page
    path('products/<str:pk>', views.getProduct, name="product"), #home page
]