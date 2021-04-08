import { objectType, extendType } from "nexus";

export const Answer = objectType({
  name: "Answer",
  definition(t) {
    t.model.id();
    t.model.answer();
    t.model.createdAt();
    t.model.author();
    t.model.updatedAt();
    t.model.Question();
  },
});

export const AnswerMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneAnswer();
    t.crud.deleteOneAnswer();
    t.crud.updateOneAnswer();
  },
});
