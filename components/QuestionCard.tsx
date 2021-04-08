export const QuestionCard = () => {
  return (
    <article className="flex flex-col max-w-3xl px-5 py-4 bg-gray-100 rounded-md">
      <h2 className="mb-5 text-sm font-bold uppercase">This is a post title</h2>
      <p>
        This is the post content, some very random stuff are written here so
        don't mind it
      </p>
      <footer className="mt-10">date and stuff here</footer>
    </article>
  );
};
