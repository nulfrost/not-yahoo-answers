import { Layout } from "components/Layout";
import { Sidebar } from "components/Sidebar";
import { QuestionCard } from "components/QuestionCard";

const IndexPage = () => (
  <Layout title="Home" className="flex">
    <Sidebar />
    <QuestionCard />
  </Layout>
);

export default IndexPage;
