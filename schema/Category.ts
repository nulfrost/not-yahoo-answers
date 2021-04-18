import { objectType, extendType } from "nexus";

export const Category = objectType({
  name: "Category",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.questions();
  },
});

export const CategoryQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.categories({
      filtering: true,
      ordering: true,
    });
    t.crud.category();
  },
});
