# Generated by Django 3.0.11 on 2021-01-05 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("posthog", "0250_exportedasset_created_by"),
    ]

    operations = [
        migrations.CreateModel(
            name="EventBuffer",
            fields=[
                ("id", models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("event", models.JSONField(null=True, blank=True)),
                ("process_at", models.DateTimeField()),
                ("locked", models.BooleanField()),
            ],
        ),
    ]
