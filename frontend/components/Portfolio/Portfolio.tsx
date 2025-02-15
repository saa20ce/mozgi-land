import { useState,useEffect } from "react";
import Button from "../Button/Button";
import Text from "../Text/Text";
const projects = [
  { id: 1, category: "Дизайн", image: "/images/project.png", title: "Дизайн", subtitle: "Graphic Design" },
  { id: 2, category: "Разработка", image: "/images/project.png", title: "Разработка", subtitle: "Web-development" },
  { id: 3, category: "Разработка", image: "/images/project.png", title: "Разработка", subtitle: "Web-development" },
  { id: 4, category: "Дизайн", image: "/images/project.png", title: "Дизайн", subtitle: "Graphic Design" },
  { id: 5, category: "Разработка", image: "/images/project.png", title: "Разработка", subtitle: "Web-development" },
  { id: 6, category: "Разработка", image: "/images/project.png", title: "Разработка", subtitle: "Web-development" },
  { id: 7, category: "Разработка", image: "/images/project.png", title: "Разработка", subtitle: "Web-development" },
  { id: 8, category: "Разработка", image: "/images/project.png", title: "Разработка", subtitle: "Web-development" },
  { id: 9, category: "Разработка", image: "/images/project.png", title: "Разработка", subtitle: "Web-development" },
  { id: 10, category: "Разработка", image: "/images/project.png", title: "Разработка", subtitle: "Web-development" },
  { id: 11, category: "Разработка", image: "/images/project.png", title: "Разработка", subtitle: "Web-development" },
  { id: 12, category: "Разработка", image: "/images/project.png", title: "Разработка", subtitle: "Web-development" },
  { id: 13, category: "Разработка", image: "/images/project.png", title: "Разработка", subtitle: "Web-development" },
  { id: 14, category: "Разработка", image: "/images/project.png", title: "Разработка", subtitle: "Web-development" },
  { id: 15, category: "Разработка", image: "/images/project.png", title: "Разработка", subtitle: "Web-development" },
];




export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [scrollY, setScrollY] = useState(0);

  const filteredProjects =
    selectedCategory === "Все"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Записываем значение скролла
    };

    window.addEventListener("scroll", handleScroll); 
    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);

  return (
    <div className="w-full flex flex-col overflow-auto rounded-[24px] p-6 mt-2 ">

      <div className="flex justify-center gap-6 mb-8">
        <Button
          text="Все"
          onClick={() => setSelectedCategory("Все")}
          active={selectedCategory === "Все"}
          type="portfolio"
        />
        <Button
          text="Дизайн"
          onClick={() => setSelectedCategory("Дизайн")}
          active={selectedCategory === "Дизайн"}
          type="portfolio"
        />
        
        <Button
          text="Разработка"
          onClick={() => setSelectedCategory("Разработка")}
          active={selectedCategory === "Разработка"}
          type="portfolio"
        />
      </div>

      
      <div className="flex-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-18 overflow-y-auto max-h-[calc(100vh-200px)] custom-scroll">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`bg-[#7b7c7e]  rounded-lg p-4 text-left  overflow-hidden transition-opacity duration-300 ease-in-out ${
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
        ))}
      </div>
    </div>
  );
}

