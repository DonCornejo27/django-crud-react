# Generated by Django 4.2.5 on 2023-10-05 00:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0008_remove_horario_disponibilidad_remove_horario_day_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='horario',
            old_name='matriz',
            new_name='diurno',
        ),
        migrations.AddField(
            model_name='horario',
            name='vespertino',
            field=models.CharField(default='default_value', max_length=250),
        ),
    ]