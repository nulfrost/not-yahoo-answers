import { Layout } from "components/Layout";
import { Categories } from "components/Categories";
import { QuestionCard } from "components/QuestionCard";
import { UserCard } from "components/UserCard";

const IndexPage = () => (
  <Layout title="Home">
    <div className="max-w-[1440px] mx-auto  flex gap-10">
      <Categories />
      <QuestionCard />
      <UserCard />
    </div>
  </Layout>
);

export default IndexPage;
