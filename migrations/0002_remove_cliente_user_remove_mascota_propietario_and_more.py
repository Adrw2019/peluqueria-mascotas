# Generated by Django 5.1.1 on 2024-09-22 01:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cliente',
            name='user',
        ),
        migrations.RemoveField(
            model_name='mascota',
            name='propietario',
        ),
        migrations.DeleteModel(
            name='Cita',
        ),
        migrations.DeleteModel(
            name='Cliente',
        ),
        migrations.DeleteModel(
            name='Mascota',
        ),
    ]
