import { graphql } from "msw";
import {
  AllCategoriesQuery,
  AllCategoriesQueryVariables,
  AllQuestionsQuery,
  AllQuestionsQueryVariables,
  CategoryQuestionsQuery,
  CategoryQuestionsQueryVariables,
  SingleQuestionQuery,
  SingleQuestionQueryVariables,
} from "generated/graphql";
import { v4 as uuidv4 } from "uuid";

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
    (_, res, ctx) => {
      return res(
        ctx.data({
          __typename: "Query",
          questions: [
            {
              id: "85e7f331-6290-4da6-b64b-2ab73dda7c81",
              question: "This is my question body",
              createdAt: "2021-04-15T05:44:47.549Z",
              title: "This is my question title",
              __typename: "Question",
              category: {
                name: "cars",
                __typename: "Category",
              },
              answers: [
                {
                  id: "e8e72a93-68f9-41a1-b264-ac606c79f09e",
                  author: {
                    id: 1,
                    __typename: "User",
                  },
                },
              ],
            },
            {
              id: "fb2d7dea-5fbe-4c3e-9d48-4707d6a7a111",
              question: "This is another cool and interesting question",
              createdAt: "2021-05-15T05:44:47.549Z",
              title: "My question title",
              __typename: "Question",
              category: {
                name: "travel",
                __typename: "Category",
              },
              answers: [
                {
                  id: "aced7cd0-ce51-4aa9-8941-fec209fdd670",
                  author: {
                    id: 1,
                    __typename: "User",
                  },
                },
              ],
            },
          ],
        })
      );
    }
  ),
  graphql.query<AllCategoriesQuery, AllCategoriesQueryVariables>(
    "AllCategories",
    (_, res, ctx) => {
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
  graphql.query<SingleQuestionQuery, SingleQuestionQueryVariables>(
    "SingleQuestion",
    (req, res, ctx) => {
      const response = {
        "fb2d7dea-5fbe-4c3e-9d48-4707d6a7a111": {
          __typename: "Query",
          question: {
            id: "fb2d7dea-5fbe-4c3e-9d48-4707d6a7a111",
            author: {
              id: 2,
              __typename: "User",
              image:
                "https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0",
              name: "Jessica",
            },
            createdAt: "2021-04-15T05:44:47.549Z",
            question: "This is another cool and interesting question",
            title: "My question title",
            __typename: "Question",
            category: {
              name: "travel",
              __typename: "Category",
            },
            answers: [
              {
                id: "e8e72a93-68f9-41a1-b264-ac606c79f09e",
                __typename: "Answer",
                author: {
                  __typename: "User",
                  name: "Dane Miller",
                  image:
                    "https://upload.wikimedia.org/wikipedia/en/9/99/Gundam.jpg",
                },
                createdAt: "2021-04-15T05:44:47.549Z",
                answer: "Very interesting!!",
              },
              {
                id: "aced7cd0-ce51-4aa9-8941-fec209fdd670",
                createdAt: "2021-04-18T02:56:19.108Z",
                answer: "Yeah i've thought of this too",
                author: {
                  __typename: "User",
                  image:
                    "https://storage.googleapis.com/afs-prod/media/068d4c9ace844e5c8a9abfb104b8af68/2174.jpeg",
                  name: "John",
                },
              },
            ],
          },
        },
        "85e7f331-6290-4da6-b64b-2ab73dda7c81": {
          __typename: "Query",
          question: {
            id: "85e7f331-6290-4da6-b64b-2ab73dda7c81",
            author: {
              id: 1,
              __typename: "User",
              image:
                "https://upload.wikimedia.org/wikipedia/en/9/99/Gundam.jpg",
              name: "Dane Miller",
            },
            createdAt: "2021-04-15T05:44:47.549Z",
            question: "This is my question body",
            title: "This is my question title",
            __typename: "Question",
            category: {
              name: "cars",
              __typename: "Category",
            },
            answers: [
              {
                id: "e8e72a93-68f9-41a1-b264-ac606c79f09e",
                __typename: "Answer",
                author: {
                  __typename: "User",
                  name: "Dane Miller",
                  image:
                    "https://upload.wikimedia.org/wikipedia/en/9/99/Gundam.jpg",
                },
                createdAt: "2021-04-15T05:44:47.549Z",
                answer: "This is a very good question",
              },
            ],
          },
        },
      };
      return res(ctx.data(response[req.variables.questionId]));
    }
  ),
  graphql.query<CategoryQuestionsQuery, CategoryQuestionsQueryVariables>(
    "CategoryQuestions",
    (_, res, ctx) => {
      return res(
        ctx.data({
          __typename: "Query",
          category: {
            __typename: "Category",
            questions: [
              {
                id: "fb2d7dea-5fbe-4c3e-9d48-4707d6a7a111",
                question: "This is another cool and interesting question",
                createdAt: "2021-04-15T05:44:47.549Z",
                title: "My question title",
                __typename: "Question",
                category: {
                  name: "travel",
                  __typename: "Category",
                },
                answers: [
                  {
                    id: "aced7cd0-ce51-4aa9-8941-fec209fdd670",
                    author: {
                      id: 1,
                      __typename: "User",
                    },
                  },
                ],
              },
              {
                id: "fb2d7dea-5fbe-4c3e-9d48-4707d6a7a222",
                question: "I want to go to amsterdam",
                createdAt: "2021-04-15T06:01:24.272Z",
                title: "Travel question",
                __typename: "Question",
                category: {
                  name: "travel",
                  __typename: "Category",
                },
                answers: [
                  {
                    id: "aced7cd0-ce51-4aa9-8941-fec209fdd670",
                    author: {
                      id: 1,
                      __typename: "User",
                    },
                  },
                ],
              },
            ],
          },
        })
      );
    }
  ),
];
