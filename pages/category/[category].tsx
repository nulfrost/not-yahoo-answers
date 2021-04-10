import { Layout } from "components/Layout";
import { useRouter } from "next/router";

const Category = () => {
  const router = useRouter();
  return (
    <Layout title={`${router.query.category}`}>
      <div className="max-w-6xl mx-auto">hell world</div>
    </Layout>
  );
};
export default Category;
