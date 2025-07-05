import Layout from "@/components/Layout/Layout";
import MainMenu from "@/components/MainMenu/MainMenu";
import QuestionMenu from "@/components/Questions/QuestionsMenu";
import { useState } from "react";
import { getQuestions } from "@/lib/api";

interface QuestionApiData {
  id:number;
  title:string;
  description : string | null;
}

interface Question {
  id: number;
  question: string;
  answer: string;
}

export async function getServerSideProps() {
  try {
    const data = await getQuestions();
    const formattedQuestions = data.map((item: QuestionApiData) => ({
      id: item.id,
      question: item.title,
      answer: item.description || "",
    }));
    return {
      props: {
        initialQuestions: formattedQuestions,
      },
    };
  } catch (error) {
    console.error("Ошибка при загрузке вопросов:", error);
    return {
      props: {
        initialQuestions: [],
      },
    };
  }
}

export default function QuestionsPage({ initialQuestions }: { initialQuestions: Question[] }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-start gap-8 h-full w-full">
        <div className="md:w-1/2 space-y-6">
          <MainMenu
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </div>
        <QuestionMenu initialQuestions={initialQuestions} />
      </div>
    </Layout>
  );
}