import Link from "next/link";

export const QuestionCard = () => {
  return (
    <article className="flex flex-col px-5 py-4 bg-gray-100 rounded-md xl:max-w-3xl">
      <h2 className="mb-5 text-sm font-bold uppercase">This is a post title</h2>
      <p className="truncate">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, id
        delectus. Quo dolorum, neque ex recusandae odio explicabo, adipisci
        impedit, illo necessitatibus numquam libero! Numquam natus eveniet
        expedita ab impedit.
      </p>
      <footer className="mt-10">
        <small className="text-gray-500">
          <span>10 answers</span> &bull;{" "}
          <Link href="/arts">
            <a className="text-blue-400 hover:underline">art</a>
          </Link>{" "}
          &bull; <span>7 hours ago</span>
        </small>
      </footer>
    </article>
  );
};
