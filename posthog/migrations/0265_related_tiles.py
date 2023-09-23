# Generated by Django 3.2.15 on 2022-10-06 10:45

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("posthog", "0264_user_partial_notification_settings"),
    ]

    operations = [
        # no-op migration to add related name to field in django
        migrations.AlterField(
            model_name="dashboardtile",
            name="dashboard",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, related_name="tiles", to="posthog.dashboard"
            ),
        ),
    ]
