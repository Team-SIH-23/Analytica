# Generated by Django 3.2.12 on 2022-05-02 14:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("posthog", "0229_add_filters_hash_to_dashboard_table"),
    ]

    operations = [
        migrations.AddField(
            model_name="cohort",
            name="filters",
            field=models.JSONField(blank=True, null=True),
        ),
    ]
