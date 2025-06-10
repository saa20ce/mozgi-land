import { useState, useEffect } from "react";
import Button from "../Button/Button";
import Text from "../Text/Text";

interface Work {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
}

interface PortfolioProps {
  initialWorks: Work[];
}

export default function Portfolio({ initialWorks }: PortfolioProps) {
  const [works, setWorks] = useState<Work[]>(initialWorks);
  const [selectedCategory, setSelectedCategory] = useState("все");
  const [scrollY, setScrollY] = useState(0);

  const filteredWorks =
    selectedCategory === "все"
      ? works
      : works.filter((work) => work.category === selectedCategory);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full flex flex-col rounded-[24px] p-6">
      <div className="flex justify-center gap-6 mb-8">
        <Button
          text="Все"
          onClick={() => setSelectedCategory("все")}
          active={selectedCategory === "все"}
          type="portfolio"
        />
        <Button
          text="Дизайн"
          onClick={() => setSelectedCategory("дизайн")}
          active={selectedCategory === "дизайн"}
          type="portfolio"
        />
        <Button
          text="Разработка"
          onClick={() => setSelectedCategory("разработка")}
          active={selectedCategory === "разработка"}
          type="portfolio"
        />
      </div>

      <div className="flex-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-18 overflow-y-auto lg:max-h-[calc(50vh)] xl:max-h-[calc(60vh)] 2xl:max-h-[calc(65vh)] custom-scroll pl-3 pr-3">
        {works.length === 0 ? (
          <p className="text-red-500">Нет доступных работ</p>
        ) : (
          filteredWorks.map((project) => (
            <div
              key={project.id}
              className={`bg-[#7b7c7e] rounded-lg p-4 text-left overflow-hidden transition-opacity duration-300 ease-in-out ${scrollY > 100 ? "opacity-0" : "opacity-100"
                }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg mb-2 h-auto object-cover"
              />
              <Text as="h3" size="lg" color="white" className="font-semibold mt-2">
                {project.title}
              </Text>
              <Text as="p" size="sm" color="white">
                {project.subtitle}
              </Text>
            </div>
          ))
        )}
      </div>
    </div>
  );
}