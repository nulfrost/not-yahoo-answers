import { Layout } from "components/Layout";
import { useCategoryQuestionsQuery } from "generated/graphql";
import { useRouter } from "next/router";
import { LoadingSkeleton } from "components/LoadingSkeleton";
import { QuestionCard } from "components/QuestionCard";
import { Categories } from "components/Categories";
import { useAllCategoriesQuery } from "generated/graphql";
import { UserCard } from "components/UserCard";

const Category = () => {
  const router = useRouter();
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

  const { data: { categories } = {} } = useAllCategoriesQuery();

  return (
    <Layout title={`${router.query.category}`}>
      <div className="flex-1 max-w-6xl mx-auto mt-[88px]">
        <div
          style={{ gridTemplateColumns: "200px 1fr 200px" }}
          className="flex flex-col h-full gap-3 xl:grid"
        >
          <Categories categories={categories} />
          <div className="flex flex-col space-y-3">
            <form className="flex flex-wrap space-y-2 xl:flex-nowrap xl:space-x-2 xl:space-y-0">
              <input
                type="search"
                name="questionSearch"
                className="w-full border border-purple-200 rounded xl:text-lg focus:outline-none focus:ring-purple-700 focus:ring-2"
                placeholder="You've got questions, not yahoo answers has answers"
              />
              <select
                name="sort"
                id="sort"
                className="w-full border border-purple-200 rounded xl:w-min xl:text-lg focus:outline-none focus:ring-purple-700 focus:ring-2"
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
              questions?.map((question) => {
                return <QuestionCard key={question.id} question={question} />;
              })
            )}
          </div>
          <UserCard />
        </div>
      </div>
    </Layout>
  );
};
export default Category;
