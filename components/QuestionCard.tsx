import Link from "next/link";
import { distanceInWordsStrict } from "date-fns";
import { useRouter } from "next/router";

export const QuestionCard = ({ question, ...props }) => {
  const router = useRouter();
  return (
    <article
      className="flex flex-col px-5 py-4 bg-gray-100 rounded-md xl:max-w-3xl"
      {...props}
    >
      <h2
        className="mb-5 text-sm font-bold uppercase duration-150 cursor-pointer hover:text-blue-500"
        onClick={() => router.push(`/question/${question.id}`)}
      >
        {question?.title}
      </h2>
      <p className="truncate">{question?.question}</p>
      <footer className="mt-10">
        <small className="text-gray-500">
          <span>{question?.answers.length} answers</span> &bull;{" "}
          <Link href={`/category/${question?.category?.name}`}>
            <a className="text-blue-400 hover:underline">
              {question?.category?.name}
            </a>
          </Link>{" "}
          &bull;{" "}
          <span>
            {distanceInWordsStrict(new Date(), question?.createdAt)} ago
          </span>
        </small>
      </footer>
    </article>
  );
};
