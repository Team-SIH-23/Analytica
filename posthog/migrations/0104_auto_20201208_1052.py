# Generated by Django 3.0.11 on 2020-12-08 10:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("posthog", "0103_retention_remove_date"),
    ]

    operations = [
        migrations.AlterField(
            model_name="dashboarditem",
            name="funnel",
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.DeleteModel(
            name="Funnel",
        ),
    ]
