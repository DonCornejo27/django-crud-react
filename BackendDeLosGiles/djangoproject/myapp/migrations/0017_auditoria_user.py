# Generated by Django 4.2.5 on 2023-10-19 02:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0016_alter_auditoria_fechahora'),
    ]

    operations = [
        migrations.AddField(
            model_name='auditoria',
            name='user',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='myapp.user'),
        ),
    ]
