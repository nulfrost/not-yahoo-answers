import { Layout } from "components/Layout";
import { Categories } from "components/Categories";
import { QuestionCard } from "components/QuestionCard";
import { UserCard } from "components/UserCard";

const IndexPage = () => (
  <Layout title="Home">
    <div className="flex-1 max-w-6xl mx-auto">
      <div
        style={{ gridTemplateColumns: "200px 1fr 200px" }}
        className="flex flex-col h-full gap-3 xl:grid"
      >
        <Categories />
        <div className="flex flex-col space-y-3">
          <form className="flex space-x-2 ">
            <input
              type="search"
              name="questionSearch"
              className="w-full text-lg border border-purple-200 rounded focus:outline-none focus:ring-purple-700 focus:ring-2"
              placeholder="You've got questions, not yahoo answers has answers"
            />
            <select
              name="sort"
              id="sort"
              className="text-lg border border-purple-200 rounded focus:outline-none focus:ring-purple-700 focus:ring-2"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </form>
          {Array.from({ length: 20 }, (_, index) => {
            return <QuestionCard key={index} />;
          })}
        </div>
        <UserCard />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
