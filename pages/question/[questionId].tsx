import { Layout } from "components/Layout";
import { useSingleQuestionQuery } from "generated/graphql";
import { distanceInWordsStrict } from "date-fns";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";

const Question = () => {
  const router = useRouter();

  const { data } = useSingleQuestionQuery({
    variables: {
      questionId: router?.query?.questionId as string,
    },
  });

  const [session] = useSession();

  return (
    <Layout title={data?.question?.title}>
      <div className="flex-1 max-w-6xl mx-auto mt-[88px]">
        <article className="py-4 mb-5 bg-gray-100 rounded px-7">
          <h1 className="mb-4 text-2xl xl:text-4xl font-bold">
            {data?.question?.title}
          </h1>
          <p className="mb-32 xl:text-lg">{data?.question?.question}</p>
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
        <button
          className={`disabled:opacity-50 ${
            session?.user ? "cursor-pointer" : "cursor-not-allowed"
          } px-10 py-3 text-sm font-bold text-white uppercase duration-150 bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-4 ring-purple-300`}
          disabled={!session?.user}
          onClick={() => console.log("click")}
        >
          {session?.user ? "Answer" : "Sign in to answer this question"}
        </button>
        <div className="mt-10 space-y-4 divide-y-2 divide-gray-100">
          {Array.from({ length: 10 }, (_, index) => (
            <>
              <article className="pt-4 text-sm">
                <header className="mb-2">
                  <p>Dane Miller</p>
                  <p>4 hours ago</p>
                </header>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, natus quo! Repellendus rem esse fuga repellat
                  culpa? Sapiente esse necessitatibus doloribus vel nisi at odio
                  suscipit dolores, corporis asperiores amet.
                </p>
              </article>
            </>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Question;
