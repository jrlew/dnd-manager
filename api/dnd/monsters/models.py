from django.db import models


class Monster(models.Model):
    name = models.CharField(max_length=100)
    meta = models.CharField(max_length=100)
    armor_class = models.CharField(max_length=100)
    hit_points = models.CharField(max_length=100)
    speed = models.CharField(max_length=100)
    strength = models.CharField(max_length=100, db_column="str")
    str_mod = models.CharField(max_length=100)
    dex = models.CharField(max_length=100)
    dex_mod = models.CharField(max_length=100)
    con = models.CharField(max_length=100)
    con_mod = models.CharField(max_length=100)
    intelligence = models.CharField(max_length=100, db_column="int")
    int_mod = models.CharField(max_length=100)
    wis = models.CharField(max_length=100)
    wis_mod = models.CharField(max_length=100)
    cha = models.CharField(max_length=100)
    cha_mod = models.CharField(max_length=100)
    saving_throws = models.CharField(max_length=100, null=True)
    skills = models.CharField(max_length=100, null=True)
    senses = models.CharField(max_length=100)
    damage_vulnerabilities = models.CharField(max_length=100, null=True)
    damage_resistances = models.CharField(max_length=100, null=True)
    damage_immunities = models.CharField(max_length=100, null=True)
    condition_immunities = models.CharField(max_length=100, null=True)
    languages = models.CharField(max_length=100)
    challenge = models.CharField(max_length=100)
    traits = models.CharField(max_length=100, null=True)
    actions = models.CharField(max_length=100, null=True)
    legendary_actions = models.CharField(max_length=100, null=True)
    reactions = models.CharField(max_length=100, null=True)
    img_url = models.CharField(max_length=100, null=True)

    def __str__(self):
        return self.name