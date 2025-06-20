import { useState } from "react";
import Button from "@/components/Button/Button";
import { FaCog } from "react-icons/fa";
import Text from "../Text/Text";
import Image from "next/image";

interface Service {
  id: number;
  title: string;
  categories: string[];
}

interface ServicesMenuProps {
  initialServices: Service[];
}

export default function ServicesMenu({ initialServices }: ServicesMenuProps) {
  const [services] = useState<Service[]>(initialServices);
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="w-full md:w-1/2 mt-4 md:mt-0 bg-[#1C202DB2] h-auto rounded-[24px] p-4">
      <div className="flex flex-col gap-4 custom-scroll overflow-auto h-[40vh] lg:h-[160px] xl:h-60 2xl:h-96 pr-3">
        {services.length === 0 ? (
          <p className="text-red-500">Нет доступных сервисов</p>
        ) : (
          services.map((service, index) => (
            <div
              key={service.id}
              className="p-4 bg-[#344f734f] text-white rounded-xl flex items-center justify-between md:flex-row md:items-center gap-4"
            >
              <div className="flex-1">
                <Text
                  as="h2"
                  size="lg"
                  weight="semibold"
                  className="text-lg font-semibold flex items-center gap-2"
                >
                  <FaCog className="text-white text-2xl" />
                  {service.title}
                </Text>
                <ul className="text-sm text-gray-300 mt-1 ml-2 space-y-1">
                  {service.categories.map((category, i) => (
                    <li key={i} className="list-inside list-disc">
                      <Text as="span" size="sm" color="white">
                        {category}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                text="Открыть"
                type="service"
                active={selected === index}
                onClick={() => setSelected(index)}
                
              />
            </div>
          ))
        )}
      </div>

      <div className="text-gray-400 text-sm text-center mt-6">
        <Text as="p" color="white" size="lg" weight="medium">
          Технологии которые мы используем:
        </Text>
        <div className="flex gap-4 flex-nowrap lg:flex-wrap justify-center mt-2 ">
          {[
            { name: "Go", src: "/images/gologo.svg" },
            { name: "PHP", src: "/images/phplogo.svg" },
            { name: "Csharp", src: "/images/csharplogo.svg" },
            { name: "JS", src: "/images/jslogo.svg" },
            { name: "TS", src: "/images/tslogo.svg" },
            { name: "Python", src: "/images/pylogo.svg" },
          ].map((tech, i) => (
            <div
              key={i}
              className={`flex items-center justify-center rounded-lg p-2 ${tech.name === "PHP" ? "w-20 h-19" : "w-16 h-16"
                }`}
            >
              <Image
                src={tech.src}
                alt={tech.name}
                className={`object-contain ${tech.name === "Go"
                  ? "scale-150 translate-x-[-4px]"
                  : "w-[100%] h-[90%]"
                  }`}
                width={tech.name === "PHP" ? 80 : 64}
                height={tech.name === "PHP" ? 76 : 64}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}