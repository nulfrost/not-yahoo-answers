import Link from "next/link";
import { distanceInWordsStrict } from "date-fns";

export const QuestionCard = ({ question, ...props }) => {
  return (
    <article
      className="flex flex-col px-5 py-4 bg-gray-100 rounded-md cursor-pointer xl:max-w-3xl"
      {...props}
    >
      <h2 className="mb-5 text-sm font-bold uppercase">{question?.title}</h2>
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
