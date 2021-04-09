import { Layout } from "components/Layout";

const About = () => (
  <Layout title="About">
    <section className="flex-1 max-w-6xl mx-auto">
      <h2 className="mb-3 text-3xl font-bold">About</h2>
      <p>
        With the{" "}
        <a
          className="text-blue-500 hover:underline"
          href="https://www.theverge.com/2021/4/5/22368488/yahoo-answers-shutdown-may-4-internet-era-over-rip"
          target="_blank"
          rel="noopener noreferrer"
        >
          announcement of yahoo!answers shutting down
        </a>{" "}
        I thought it'd be a fun project to make somewhat of a clone of the
        infamous message board.
      </p>
    </section>
  </Layout>
);

export default About;
