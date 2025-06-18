import Button from "../Button/Button";
import Text from "../Text/Text";
import { useRouter } from "next/router";
import Feedback from "../Feedback/Feedback";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface MainMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }: MainMenuProps) => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  const [isFormOpen, setIsFormOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null); // Ссылка на контейнер формы

  const handleMenuToggle = (isOpen: boolean) => {
    setIsMobileMenuOpen(isOpen);
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsFormOpen(false);
      }
    };

    if (isFormOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFormOpen]);

  return (
    <div className="relative">
      {isHomePage && !isMobileMenuOpen && (
        <div className="xl:hidden fixed bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 w-full px-4 flex justify-center z-50">
          <Button
            text="Открыть меню"
            active
            onClick={() => handleMenuToggle(true)}
            type="openbutton"
          />
        </div>
      )}

      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-8 h-full flex items-center justify-center z-[1000]">
          <div className="relative w-full max-w-[320px] md:max-w-[462px] h-[296px] md:h-[364px] mx-auto px-0">
            <button
              className="absolute -top-12 right-0 md:right-0 text-white text-2xl w-8 h-8 flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-700 z-[1001]"
              onClick={() => handleMenuToggle(false)}
            >
            <Image
              src="/images/icon.png"
              alt="Закрыть меню"
              width = {32}
              height = {32}
            />  
            </button>

            <div className="flex flex-col gap-y-2 space-y-4">
              <div>
                <Button
                  text="Получить консультацию"
                  type="mobilemenu"
                  active
                  className="w-full"
                  onClick={handleOpenForm}
                />
              </div>
              <Text as="a" href="/service" className="block w-full">
                <Button
                  text="Наши услуги"
                  type="mobilemenu"
                  className="w-full"
                />
              </Text>
              <Text as="a" href="/ourworks" className="block w-full">
                <Button
                  text="Наши работы"
                  type="mobilemenu"
                  className="w-full"
                />
              </Text>
              <Text as="a" href="/questions" className="block w-full">
                <Button
                  text="Частые вопросы"
                  type="mobilemenu"
                  className="w-full"
                />
              </Text>
            </div>
          </div>
        </div>
      )}

      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[2000] xl:backdrop-blur-md">
          <div ref={formRef} className="relative">
            <Feedback onSubmit={(data) => console.log(data)} onClose={()=> setIsFormOpen(false)} />
          </div>
        </div>
      )}

      <div className="hidden xl:flex flex-col xl:gap-y-3 2xl:gap-y-4 2xl:space-y-4 2xl:mt-12">
        <div>
          <Button
            text="Получить консультацию"
            active
            onClick={handleOpenForm}
            type="desktopmenu"
          />
        </div>
        <Text as="a" href="/service">
          <Button text="Наши услуги" type="desktopmenu" />
        </Text>
        <Text as="a" href="/ourworks">
          <Button text="Наши работы" type="desktopmenu" />
        </Text>
        <Text as="a" href="/questions">
          <Button text="Частые вопросы" type="desktopmenu"/>
        </Text>
      </div>
    </div>
  );
};

export default MainMenu;