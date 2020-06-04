import graphene

import dnd.monsters.schema


class Query(
    dnd.monsters.schema.Query,
    graphene.ObjectType
):
    pass


schema = graphene.Schema(query=Query)
