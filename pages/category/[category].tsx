import { Layout } from "components/Layout";
import { useCategoryQuestionsQuery } from "generated/graphql";
import { useRouter } from "next/router";
import { LoadingSkeleton } from "components/LoadingSkeleton";
import { QuestionCard } from "components/QuestionCard";
import { Categories } from "components/Categories";
import { useAllCategoriesQuery } from "generated/graphql";
import { UserCard } from "components/UserCard";
import { useSession } from "next-auth/client";
import { useState } from "react";

const Category = () => {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest");

  const {
    data: { category: { questions } = {} } = {},
    loading,
  } = useCategoryQuestionsQuery({
    variables: {
      categoryWhere: {
        name: router.query.category as string,
      },
    },
  });

  const [session] = useSession();

  const totalQuestionsAnswered = questions
    ?.map(({ answers }) =>
      answers.filter((answer) => answer?.author?.id === session?.user?.id)
    )
    .flat()
    .map(({ id }) => id);

  const { data: { categories } = {} } = useAllCategoriesQuery();

  return (
    <Layout title={`${router.query.category}`}>
      <div className="flex-1 max-w-6xl mx-auto mt-[88px]">
        <div className="flex flex-col h-full gap-3 xl:grid xl:grid-cols-12">
          <Categories categories={categories} />
          <div className="flex flex-col col-span-8 space-y-3">
            <form
              className="flex flex-wrap space-y-2 xl:flex-nowrap xl:space-x-2 xl:space-y-0"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="search"
                name="questionSearch"
                className="w-full border border-purple-200 rounded text-md focus:outline-none focus:ring-purple-700 focus:ring-2"
                placeholder="What are you looking for?"
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
              />
              <select
                name="sort"
                id="sort"
                className="w-full border border-purple-200 rounded xl:w-min xl:text-lg focus:outline-none focus:ring-purple-700 focus:ring-2"
                onChange={(e) => {
                  setSort(e.target.value);
                }}
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </form>
            {loading ? (
              <>
                <LoadingSkeleton />{" "}
              </>
            ) : (
              questions
                ?.filter((question) =>
                  question?.title.toLowerCase().includes(query)
                )
                .sort((a, b) =>
                  sort === "newest"
                    ? // @ts-ignore
                      new Date(b.createdAt) - new Date(a.createdAt)
                    : // @ts-ignore
                      new Date(a.createdAt) - new Date(b.createdAt)
                )
                .map((question) => {
                  return <QuestionCard key={question.id} question={question} />;
                })
            )}
          </div>
          <UserCard answeredQuestions={totalQuestionsAnswered} />
        </div>
      </div>
    </Layout>
  );
};
export default Category;
