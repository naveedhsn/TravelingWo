from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import routers
from blog.views import PostViewSet, CategoryViewSet, SubscribeView

# API router
router = routers.DefaultRouter()
router.register(r'posts', PostViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/subscribe/', SubscribeView.as_view(), name='subscribe'),
]

# Serve media files only in development
from django.conf import settings
from django.conf.urls.static import static

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

else:
    # Serve media files in production using re_path
    urlpatterns += [
        re_path(r'^media/(?P<path>.*)$', static_serve, {
            'document_root': settings.MEDIA_ROOT,
        }),
    ]

