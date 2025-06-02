import Button from "../Button/Button";
import Text from "../Text/Text";
import { useRouter } from "next/router";


interface MainMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }: MainMenuProps) => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  const handleMenuToggle = (isOpen: boolean) => {
    setIsMobileMenuOpen(isOpen);
  };

  return (
    <div className="relative">
      {isHomePage && !isMobileMenuOpen && (
        <div className="xl:hidden  fixed bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 w-full px-4 flex justify-center z-50">

          <Button
            text="Открыть меню"
            active
            onClick={() => handleMenuToggle(true)}
            type="openbutton"
          />
        </div>
      )}

      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-8 h-full  flex items-center justify-center z-[1000]">
          <div className="relative w-full max-w-[320px] md:max-w-[462px] h-[296px] md:h-[364px] mx-auto px-0">
            <button
              className="absolute -top-12 right-0 md:right-0 text-white text-2xl w-8 h-8 flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-700 z-[1001]"
              onClick={() => handleMenuToggle(false)}
            >
              <img src="/images/icon.png" alt="Закрыть меню" />
            </button>

            <div className="flex flex-col gap-y-2 space-y-4 ">
              <Text as="a" href="/">
                <Button
                  text="Получить консультацию"
                  type="mobilemenu"
                  active
                  className="w-full"
                />
              </Text>
              <Text as="a" href="/service" className="block">
                <Button
                  text="Наши услуги"
                  type="mobilemenu"
                  className="w-full"
                />
              </Text>
              <Text as="a" href="/ourworks" className="block">
                <Button
                  text="Наши работы"
                  type="mobilemenu"
                  className="w-full"
                />
              </Text>
              <Text as="a" href="/questions" className="block">
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

      <div className="hidden xl:flex flex-col gap-y-4 space-y-4 mt-12">
        <Text as="a" href="/">
          <Button
            text="Получить консультацию"
            active
          />
        </Text>
        <Text as="a" href="/service">
          <Button text="Наши услуги" />
        </Text>
        <Text as="a" href="/ourworks">
          <Button text="Наши работы" />
        </Text>
        <Text as="a" href="/questions">
          <Button text="Частые вопросы" />
        </Text>
      </div>
    </div>
  );
};

export default MainMenu;