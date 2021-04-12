import { objectType, extendType } from "nexus";

export const Question = objectType({
  name: "Question",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.question();
    t.model.answers();
    t.model.category();
    t.model.createdAt();
    t.model.author();
  },
});

export const QuestionQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.question();
    t.crud.questions({
      ordering: true,
      pagination: true,
      filtering: true,
    });
  },
});

export const QuestionMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneQuestion();
    t.crud.deleteOneQuestion();
    t.crud.updateOneQuestion();
  },
});
