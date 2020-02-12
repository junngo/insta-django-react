from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from . import models, serializers


class Images(APIView):

    def get(self, request, format=None):

        user = request.user
        following_users = user.following.all()

        image_list = []

        for following_user in following_users:
            user_images = following_user.images.all()[:2]

            for image in user_images:
                image_list.append(image)

        my_images = user.images.all()[:2]
        for image in my_images:
            image_list.append(image)

        sorted_list = sorted(
            image_list, key=lambda image: image.created_at, reverse=True)

        serializer = serializers.ImageSerializer(sorted_list, 
                                                 many=True, 
                                                 context={'request': request}
                                                )

        return Response(serializer.data)
