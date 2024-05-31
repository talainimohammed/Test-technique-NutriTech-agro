from rest_framework.response import Response
from rest_framework.decorators import api_view
from nutritechapp.models import Product
from .serializers import ProductSerializer

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