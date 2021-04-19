import { QuestionCard } from "components/QuestionCard";

export const QuestionList = ({ questions, query }) => {
  return questions
    ?.filter((question) => question?.title.toLowerCase().includes(query))
    .map((question) => {
      return <QuestionCard key={question.id} question={question} />;
    });
};
