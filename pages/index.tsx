import { Layout } from "components/Layout";
import { Categories } from "components/Categories";
import { QuestionCard } from "components/QuestionCard";
import { UserCard } from "components/UserCard";
import { HiChevronUp } from "react-icons/hi";
import { useEffect, useState } from "react";

const IndexPage = () => {
  const [toTop, setToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  function checkScroll() {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      return setToTop(true);
    }
    return setToTop(false);
  }

  return (
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
      <HiChevronUp
        className={`hidden xl:block fixed w-10 h-10 text-white bg-purple-600 bottom-56 right-72 transition-all duration-150 cursor-pointer ${
          toTop ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
      />
    </Layout>
  );
};

export default IndexPage;
