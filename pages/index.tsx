import { Layout } from "components/Layout";
import { Categories } from "components/Categories";
import { UserCard } from "components/UserCard";
import { HiChevronUp } from "react-icons/hi";
import { useEffect, useState } from "react";
import {
  SortOrder,
  useAllCategoriesQuery,
  useAllQuestionsQuery,
} from "generated/graphql";
import { useSession } from "next-auth/client";
import { LoadingSkeleton } from "components/LoadingSkeleton";
import { QuestionList } from "components/QuestionList";

const IndexPage = () => {
  const [toTop, setToTop] = useState(false);
  const { data: { categories } = {} } = useAllCategoriesQuery();
  const [query, setQuery] = useState("");
  const { data: { questions } = {}, loading, refetch } = useAllQuestionsQuery({
    variables: {
      questionsOrderBy: {
        updatedAt: SortOrder.Desc,
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

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  function checkScroll() {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      return setToTop(true);
    }
    return setToTop(false);
  }

  return (
    <Layout title="Home">
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
                onChange={(e) =>
                  e.target.value === "newest"
                    ? refetch({
                        questionsOrderBy: {
                          createdAt: SortOrder.Desc,
                        },
                      })
                    : refetch({
                        questionsOrderBy: {
                          createdAt: SortOrder.Asc,
                        },
                      })
                }
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
              <QuestionList questions={questions} query={query} />
            )}
          </div>
          <UserCard answeredQuestions={totalQuestionsAnswered} />
        </div>
      </div>
      <HiChevronUp
        className={`hidden xl:block fixed w-10 h-10 text-white bg-purple-600 bottom-56 right-72 transition-all duration-150 cursor-pointer ${
          toTop ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
      />
    </Layout>
  );
};

export default IndexPage;
