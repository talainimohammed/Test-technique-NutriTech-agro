# Generated by Django 5.0.6 on 2024-05-31 16:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nutritechapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(upload_to='upload/'),
        ),
    ]
