import { Layout } from "components/Layout";
import { useCategoryQuestionsQuery } from "generated/graphql";
import { useRouter } from "next/router";
import { LoadingSkeleton } from "components/LoadingSkeleton";
import { QuestionCard } from "components/QuestionCard";

const Category = () => {
  const router = useRouter();
  const {
    data: { category: { questions } } = {},
    loading,
  } = useCategoryQuestionsQuery({
    variables: {
      categoryWhere: {
        name: router.query.category as string,
      },
    },
  });

  return (
    <Layout title={`${router.query.category}`}>
      <div className="flex-1 max-w-6xl mx-auto mt-[88px]">
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
    </Layout>
  );
};
export default Category;
