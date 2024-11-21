import Button from "../Button/Button";
const MainMenu = () => {
  return (
    <div className="flex flex-col gap-y-4 space-y-4 md:space-y-0 md:flex-col">
      <Button text="Получить консультацию" active onClick={() => console.log('Получить консультацию')} />
      <Button text="Наши услуги" onClick={() => console.log('Наши услуги')} />
      <Button text="Наши работы" onClick={() => console.log('Наши работы')} />
      <Button text="Частые вопросы" disabled />
    </div>
  );
};
  
  export default MainMenu;
  