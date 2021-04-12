import { Layout } from "components/Layout";
import { useSingleQuestionQuery } from "generated/graphql";
import { distanceInWordsStrict } from "date-fns";
import { useRouter } from "next/router";

const Question = () => {
  const router = useRouter();

  const { data } = useSingleQuestionQuery({
    variables: {
      questionId: router?.query?.questionId as string,
    },
  });

  return (
    <Layout title={data?.question?.title}>
      <div className="flex-1 max-w-6xl mx-auto mt-[88px]">
        <article className="py-4 mb-5 bg-gray-100 rounded px-7">
          <h1 className="mb-4 text-4xl font-bold">{data?.question?.title}</h1>
          <p className="mb-40 text-lg">{data?.question?.question}</p>
          <footer className="flex flex-col">
            <div className="flex items-center self-end space-x-3">
              <img
                src={data?.question?.author?.image}
                alt={`${data?.question?.author?.name}'s avatar`}
                className="w-10 h-10 rounded-full"
              />
              <div className="text-sm">
                <p className="font-semibold">{data?.question?.author?.name}</p>
                <time
                  dateTime={data?.question?.createdAt}
                  className="opacity-75"
                >
                  {distanceInWordsStrict(new Date(), data?.question?.createdAt)}{" "}
                  ago
                </time>
              </div>
            </div>
          </footer>
        </article>
        <button className="px-10 py-3 text-sm font-bold text-white uppercase duration-150 bg-purple-700 rounded-md hover:bg-purple-600">
          Answer
        </button>
      </div>
    </Layout>
  );
};

export default Question;
