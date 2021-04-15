import { Layout } from "components/Layout";
import { useSingleQuestionQuery } from "generated/graphql";
import { distanceInWordsStrict } from "date-fns";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import Skeleton from "react-loading-skeleton";
import { useState } from "react";

const Question = () => {
  const router = useRouter();
  const [answer, setAnswer] = useState("");

  const { data, loading } = useSingleQuestionQuery({
    variables: {
      questionId: router?.query?.questionId as string,
    },
  });

  const [session] = useSession();

  return (
    <Layout title={data?.question?.title}>
      <div className="flex-1 max-w-6xl mx-auto mt-[88px] flex flex-col">
        {loading ? (
          <>
            <article className="py-4 mb-5 rounded bg-gray-50 px-7">
              <div className="mb-4">
                <Skeleton width={400} />
              </div>
              <div className="mb-32">
                <Skeleton width={1000} />
                <Skeleton width={600} />
                <Skeleton width={750} />
              </div>
              <div className="flex items-center justify-end space-x-2">
                <Skeleton circle={true} height={50} width={50} />
                <div className="flex flex-col">
                  <Skeleton width={100} />
                  <Skeleton width={100} />
                </div>
              </div>
            </article>
          </>
        ) : (
          <>
            <article className="py-4 mb-5 rounded bg-gray-50 px-7">
              <h1 className="mb-4 text-2xl font-bold xl:text-4xl">
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
                    <p className="font-semibold">
                      {data?.question?.author?.name}
                    </p>
                    <time
                      dateTime={data?.question?.createdAt}
                      className="opacity-75"
                    >
                      {distanceInWordsStrict(
                        new Date(),
                        data?.question?.createdAt
                      )}{" "}
                      ago
                    </time>
                  </div>
                </div>
              </footer>
            </article>
          </>
        )}
        <form className={`mb-20 ${session?.user ? "block" : "hidden"}`}>
          <div className="flex flex-col">
            <textarea
              name="question"
              id="question"
              cols={30}
              rows={10}
              className="w-full mb-2 border border-purple-200 rounded resize-none xl:text-lg focus:outline-none focus:ring-purple-700 focus:ring-2"
              placeholder={`Answer ${data?.question?.author?.name}'s question...`}
              maxLength={5000}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <small className="self-end opacity-50">
              {" "}
              {answer.length} / 5000
            </small>
          </div>
          <button className="px-10 py-3 text-sm font-bold text-white uppercase duration-150 bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-4 ring-purple-300">
            Answer question
          </button>
        </form>
        <select
          name="sort"
          id="sort"
          className="self-end block mb-10 border border-purple-200 rounded w-min xl:text-lg focus:outline-none focus:ring-purple-700 focus:ring-2"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
        <div className="space-y-4 divide-y-2 divide-gray-100 ">
          {Array.from({ length: 10 }, (_, index) => (
            <>
              <article className="pt-4 text-sm" key={index}>
                <header className="mb-5">
                  <p className="font-semibold ">Dane Miller</p>
                  <p>4 hours ago</p>
                </header>
                <p className="text-gray-500">
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
