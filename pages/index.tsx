import { Layout } from "components/Layout";
import { Categories } from "components/Categories";
import { QuestionCard } from "components/QuestionCard";
import { UserCard } from "components/UserCard";

const IndexPage = () => (
  <Layout title="Home">
    <div className="flex-1 max-w-6xl mx-auto">
      <div
        style={{ display: "grid", gridTemplateColumns: "200px 1fr 200px" }}
        className="h-full gap-3"
      >
        <Categories />
        <div className="flex flex-col gap-3 ">
          <form className="flex space-x-2 ">
            <input
              type="search"
              name="questionSearch"
              className="w-full text-sm border border-purple-200 rounded focus:outline-none focus:ring-purple-700 focus:ring-2"
              placeholder="You've got questions, not yahoo answers has answers"
            />
            <select
              name="sort"
              id="sort"
              className="text-sm border border-purple-200 rounded focus:outline-none focus:ring-purple-700 focus:ring-2"
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
