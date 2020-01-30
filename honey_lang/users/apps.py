from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class UsersConfig(AppConfig):
    name = "honey_lang.users"
    verbose_name = _("Users")

    def ready(self):
        try:
            import honey_lang.users.signals  # noqa F401
        except ImportError:
            pass
