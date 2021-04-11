import { Layout } from "components/Layout";
import { useAllCategoriesQuery } from "generated/graphql";

const New = () => {
  const { data } = useAllCategoriesQuery();

  return (
    <Layout title="Post new question">
      <div className="flex-1 max-w-6xl mx-auto">
        <form>
          <label htmlFor="title" className="text-xs font-bold uppercase">
            Question title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            className="w-full mb-5 border border-purple-200 rounded xl:text-lg focus:outline-none focus:ring-purple-700 focus:ring-2"
            placeholder="What is your question?"
            maxLength={30}
          />
          <label htmlFor="question" className="text-xs font-bold uppercase">
            Question
          </label>
          <textarea
            name="question"
            id="question"
            cols={30}
            rows={10}
            className="w-full mb-5 border border-purple-200 rounded resize-none xl:text-lg focus:outline-none focus:ring-purple-700 focus:ring-2"
            placeholder="Try and be as descriptive as you can for the best results."
            maxLength={300}
          />
          <label htmlFor="category" className="text-xs font-bold uppercase">
            Category
          </label>
          <select
            name="category"
            id="category"
            className="w-full mb-5 border border-purple-200 rounded xl:text-lg focus:outline-none focus:ring-purple-700 focus:ring-2"
          >
            {data.categories.map((category) => (
              <option>{category.name}</option>
            ))}
          </select>
          <button
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

export default New;
