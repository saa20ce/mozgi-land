import Layout from "@/components/Layout/Layout";
import Text from "@/components/Text/Text";
import MainMenu from "@/components/MainMenu/MainMenu";
import QuestionMenu from "@/components/Questions/QuestionsMenu";
import { useState } from "react";
import { getQuestions } from "@/lib/api";

interface Question {
  id: number;
  question: string;
  answer: string;
}

export async function getServerSideProps() {
  console.log("getServerSideProps вызван на сервере");
  try {
    const data = await getQuestions();
    const formattedQuestions = data.map((item: any) => ({
      id: item.id,
      question: item.title,
      answer: item.description || "",
    }));
    console.log("Данные с сервера:", formattedQuestions);
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
      <div className="flex flex-col md:flex-row items-center gap-8 h-full w-full mt-48">
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