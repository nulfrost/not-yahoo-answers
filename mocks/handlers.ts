import { graphql } from "msw";
import {
  AllCategoriesQuery,
  AllCategoriesQueryVariables,
  AllQuestionsQuery,
  AllQuestionsQueryVariables,
} from "generated/graphql";
import { v4 as uuidv4 } from "uuid";
import faker from "faker";

const categories = [
  "art",
  "business",
  "news",
  "parenting",
  "pets",
  "sports",
  "food",
  "cars",
  "technology",
  "politics",
  "education",
  "travel",
];

export const handlers = [
  graphql.query<AllQuestionsQuery, AllQuestionsQueryVariables>(
    "AllQuestions",
    (req, res, ctx) => {
      return res(
        ctx.data({
          __typename: "Query",
          questions: Array.from({ length: 20 }, (_, value) => ({
            __typename: "Question",
            id: uuidv4(),
            title: faker.lorem.sentence(),
            question: faker.lorem.paragraph(),
            category: {
              __typename: "Category",
              name: categories[Math.floor(Math.random() * categories.length)],
            },
            createdAt: faker.date.recent(),
            answers: [
              {
                __typename: "Answer",
                id: uuidv4(),
                author: {
                  __typename: "User",
                  id: uuidv4(),
                },
              },
            ],
          })),
        })
      );
    }
  ),
  graphql.query<AllCategoriesQuery, AllCategoriesQueryVariables>(
    "AllCategories",
    (req, res, ctx) => {
      return res(
        ctx.data({
          __typename: "Query",
          categories: categories.map((category) => ({
            id: uuidv4(),
            name: category,
            __typename: "Category",
          })),
        })
      );
    }
  ),
];
