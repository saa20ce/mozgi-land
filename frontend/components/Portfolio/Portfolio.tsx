import { useState} from "react";
import Button from "../Button/Button";
import Text from "../Text/Text";
import Image from "next/image";

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
  const [works] = useState<Work[]>(initialWorks);
  const [selectedCategory, setSelectedCategory] = useState("все");


  const filteredWorks =
    selectedCategory === "все"
      ? works
      : works.filter((work) => work.category === selectedCategory);
  return (
    <div className="w-full flex flex-col gap-3 rounded-[24px] ">
      <div className="flex justify-center gap-2 lg:gap-6">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-max overflow-y-auto pr-3 flex-grow min-h-0 h-[calc(100vh-180px)] xl:h-[calc(100vh-280px)]">{/*overflow-auto scrollbar-none */}
        {works.length === 0 ? (
          <p className="text-red-500">Нет доступных работ</p>
        ) : (
          filteredWorks.map((project) => (
            <div
            key={project.id}
            className="relative bg-[#7b7c7e] h-[258px] 2xl:h-[374px] rounded-lg overflow-hidden transition-opacity duration-300 ease-in-out"
          >
            <Image
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
              width={300}
              height={200}
              priority
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-2 px-4 rounded-b-lg text-white z-10">
              <Text as="h3" size="xl" weight="medium">
                {project.title}
              </Text>
              <Text as="p" size="lg" >
                {project.subtitle}
              </Text>
            </div>
          </div>
          ))
        )}
      </div>
    </div>
  );
}
