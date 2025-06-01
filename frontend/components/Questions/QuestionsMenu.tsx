// import { useState,useEffect } from "react";
// import { FaChevronDown } from "react-icons/fa";
// import Button from "@/components/Button/Button";
// import { getQuestions } from "@/lib/api";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface Question {
  id: number;
  question: string;
  answer: string;
}

interface QuestionMenuProps {
  initialQuestions: Question[];
}

export default function QuestionMenu({ initialQuestions }: QuestionMenuProps) {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="md:w-1/2 mt-8 md:mt-0 rounded-[24px] h-auto p-4">
      <div className="flex flex-col pr-3 overflow-auto lg:h-100 2xl:h-full gap-2">
        {questions.length === 0 ? (
          <p className="text-red-500">Нет доступных вопросов</p>
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