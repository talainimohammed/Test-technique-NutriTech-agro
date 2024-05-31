from rest_framework.response import Response
from rest_framework.decorators import api_view
from nutritechapp.models import Product
from .serializers import ProductSerializer
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework import status

@api_view(['GET'])
def getproducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addproduct(request):
    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteproduct(request, idProduct):
    product = Product.objects.get(id=idProduct)
    product.delete()
    response={'message':True}
    return Response(response)

@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)

    if user is not None:
        return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
    return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)
