import { Layout } from "components/Layout";
import { useSingleQuestionQuery } from "generated/graphql";
import { useRouter } from "next/router";

const Question = () => {
  const router = useRouter();

  const { data } = useSingleQuestionQuery({
    variables: {
      questionId: router?.query?.questionId,
    },
  });

  return (
    <Layout title={data?.question?.title}>
      <div className="flex-1 max-w-6xl mx-auto mt-[88px]">
        <h1 className="text-5xl font-bold">{data?.question?.title}</h1>
      </div>
    </Layout>
  );
};

export default Question;
