import graphene

from graphene_django.types import DjangoObjectType

from dnd.monsters.models import Monster


class MonsterType(DjangoObjectType):
    class Meta:
        model = Monster


class Query(object):
    all_monsters = graphene.List(MonsterType)

    def resolve_all_monsters(self, info, **kwargs):
        return Monster.objects.all()
