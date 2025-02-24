import Button from "../Button/Button";
import Text from "../Text/Text";
import { useState } from "react";
import { useRouter } from "next/router";

const MainMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const isHomePage = router.pathname === '/'
  return (
    <div>
      {isHomePage && !isMobileMenuOpen && (
        <div className="md:hidden fixed bottom-16 left-1/2 -translate-x-1/2 w-full px-4 flex justify-center z-50 ">
          <Button
            text="Открыть меню"
            active
            onClick={() => setIsMobileMenuOpen(true)}
            
          />
        </div>
      )}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-[90px] h-[calc(100vh-60px)] bg-dark-blue  z-50 flex  items-center justify-center">
          <div className="flex flex-col gap-y-4 space-y-4 text-center">
            <Text as="a" href="/">
              <Button text="Получить консультацию" active onClick={() => console.log("Наши услуги")} type="mobilemenu"/>
            </Text>
            <Text as="a" href="service">
              <Button text="Наши услуги" onClick={() => console.log("Наши услуги")} type="mobilemenu"/>
            </Text>

            <Text as="a" href="ourworks">
              <Button text="Наши работы" onClick={() => console.log("Наши работы")} type="mobilemenu" />
            </Text>

            <Text as="a" href="questions">
              <Button text="Частые вопросы" type="mobilemenu" />
            </Text>

            
            <Button
              text="Закрыть меню"
              onClick={() => setIsMobileMenuOpen(false) }
              type="mobilemenu"
            />
          </div>
        </div>
      )}

      
      <div className="hidden md:flex flex-col gap-y-4 space-y-4">
        <Text as="a" href="/">
          <Button
            text="Получить консультацию"
            active
            onClick={() => console.log("Получить консультацию")}
          />
        </Text>

        <Text as="a" href="service">
          <Button text="Наши услуги" onClick={() => console.log("Наши услуги")} />
        </Text>

        <Text as="a" href="ourworks">
          <Button text="Наши работы" onClick={() => console.log("Наши работы")} />
        </Text>

        <Text as="a" href="questions">
          <Button text="Частые вопросы" />
        </Text>
      </div>
    </div>
  );
};

export default MainMenu;
