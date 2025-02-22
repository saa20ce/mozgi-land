import Button from "../Button/Button";
import Text from "../Text/Text";
const MainMenu = () => {
  return (
    <div className="flex hidden md:block flex-col gap-y-4 space-y-4 md:space-y-0 md:flex-col">
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
  );
};

export default MainMenu;
