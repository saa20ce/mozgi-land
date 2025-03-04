import { useState,useEffect } from "react";
import Button from "../Button/Button";
import Text from "../Text/Text";
import { getWorks } from "@/lib/api";

interface Work{
  id:number;
  title:string;
  subtitle:string;
  category:string;
  image:string;
}


export default function Portfolio() {
  const [works, setWorks] = useState<Work[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("все");
  const [scrollY, setScrollY] = useState(0);
  const [error, setError] = useState<string>('');


  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const data = await getWorks();
       
        const formattedWorks = data.map((item: any) => ({
          id: item.id,
          title: item.title,
          subtitle: item.description || '', 
          category: item.type, 
          image: item.thumbnail || '/images/project.png', 
        }));
        setWorks(formattedWorks);
      } catch (err) {
        setError('Ошибка загрузки данных с бэкенда');
      }
    };
    fetchWorks();
  }, []);

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
          text="все"
          onClick={() => setSelectedCategory("все")}
          active={selectedCategory === "все"}
          type="portfolio"
        />
        <Button
          text="дизайн"
          onClick={() => setSelectedCategory("дизайн")}
          active={selectedCategory === "дизайн"}
          type="portfolio"
        />
        <Button
          text="разработка"
          onClick={() => setSelectedCategory("разработка")}
          active={selectedCategory === "разработка"}
          type="portfolio"
        />
      </div>

      <div className="flex-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-18 overflow-y-auto lg:max-h-[calc(50vh)] xl:max-h-[calc(60vh)] 2xl:max-h-[calc(65vh)] custom-scroll pl-3 pr-3">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          filteredWorks.map((project) => (
            <div
              key={project.id}
              className={`bg-[#7b7c7e] rounded-lg p-4 text-left overflow-hidden transition-opacity duration-300 ease-in-out ${
                scrollY > 100 ? "opacity-0" : "opacity-100"
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

