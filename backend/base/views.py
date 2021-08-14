from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .products import products

# Create your views here.
@api_view(['GET'])
def getRoutes(request):

    return Response('Hello')

@api_view(['GET'])
def getProducts(request):
    return Response(products)

@api_view(['GET'])
def getProduct(request, pk):
    product = None

    for prod in products:
        if prod["_id"]==pk:
            product = prod
            break

    return Response(product)