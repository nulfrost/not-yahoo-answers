import { Layout } from "components/Layout";
import {
  useAllCategoriesQuery,
  useCreateNewQuestionMutation,
} from "generated/graphql";
import { getSession } from "next-auth/client";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const New = ({ user }) => {
  const { data } = useAllCategoriesQuery();

  const [question, setQuestion] = useState("");

  const router = useRouter();
  const [createQuestion] = useCreateNewQuestionMutation();
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit } = useForm();

  return (
    <Layout title="Post new question">
      <div className="flex-1 max-w-6xl mx-auto mt-[88px]">
        <form
          onSubmit={handleSubmit((data) => {
            createQuestion({
              variables: {
                createOneQuestionData: {
                  title: data.title,
                  question,
                  category: {
                    connect: {
                      name: data.category,
                    },
                  },
                  author: {
                    connect: {
                      id: user.id,
                    },
                  },
                },
              },
            })
              .then(() => setSubmitting(!submitting))
              .then(() => router.push("/"));
          })}
        >
          <h1 className="mb-10 text-5xl font-bold">Post new question</h1>
          <label htmlFor="title" className="text-xs font-bold uppercase">
            Question title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            className="w-full mb-5 border border-purple-200 rounded xl:text-lg focus:outline-none focus:ring-purple-700 focus:ring-2"
            placeholder="What is your question?"
            {...register("title")}
            maxLength={150}
          />
          <label htmlFor="question" className="text-xs font-bold uppercase">
            Question
          </label>
          <div className="flex flex-col mb-5">
            <textarea
              name="question"
              id="question"
              cols={30}
              rows={10}
              className="w-full mb-2 border border-purple-200 rounded resize-none xl:text-lg focus:outline-none focus:ring-purple-700 focus:ring-2"
              placeholder="Try and be as descriptive as you can for the best results."
              maxLength={1000}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <small className="self-end opacity-50">
              {" "}
              {question.length} / 1000
            </small>
          </div>
          <label htmlFor="category" className="text-xs font-bold uppercase">
            Category
          </label>
          <select
            name="category"
            id="category"
            className="w-full mb-5 border border-purple-200 rounded xl:text-lg focus:outline-none focus:ring-purple-700 focus:ring-2"
            {...register("category")}
          >
            {data?.categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <button
            disabled={submitting}
            type="submit"
            className="px-10 py-3 text-sm font-bold text-white uppercase duration-150 bg-purple-700 rounded-md hover:bg-purple-600"
          >
            Post
          </button>
        </form>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session?.user,
    },
  };
};

export default New;
