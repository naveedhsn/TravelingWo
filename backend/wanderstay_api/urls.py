from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import routers
from blog.views import PostViewSet, CategoryViewSet, SubscribeView

from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve as static_serve  # ✅ This fixes the NameError

# API router
router = routers.DefaultRouter()
router.register(r'posts', PostViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/subscribe/', SubscribeView.as_view(), name='subscribe'),
]

# Serve media files correctly based on environment
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
else:
    urlpatterns += [
        re_path(r'^media/(?P<path>.*)$', static_serve, {
            'document_root': settings.MEDIA_ROOT,
        }),
    ]
