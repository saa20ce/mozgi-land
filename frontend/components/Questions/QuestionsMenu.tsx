import { useState,useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import Button from "@/components/Button/Button";
import { getQuestions } from "@/lib/api";
interface Question {
  id: number;
  question: string;
  answer: string;
}

export default function QuestionMenu() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestions();
        const formattedQuestions = data.map((item: any) => ({
          id: item.id,
          question: item.title,
          answer: item.description || '',
        }));
        setQuestions(formattedQuestions);
      } catch (err) {
        setError('Ошибка загрузки данных с бэкенда');
      }
    };
    fetchQuestions();
  }, []);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="md:w-1/2 mt-8 md:mt-0  rounded-[24px] h-auto p-4">
      <div className="flex flex-col pr-3 overflow-auto lg:h-60 2xl:h-full gap-2">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          questions.map((item, index) => (
            <div key={item.id} className="bg-[rgba(255,255,255,0.2)] rounded-lg">
              <button
                className="w-full flex justify-between items-center text-white text-left p-4 rounded-lg transition duration-300 hover:bg-[rgba(255,255,255,0.3)]"
                onClick={() => toggleQuestion(index)}
              >
                {item.question}
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-[200px] p-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-200">{item.answer}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}