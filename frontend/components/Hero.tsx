import Text from './Text';
import MainMenu from './MainMenu';
const Hero = () => {
  const menuItems =[
    {text: 'Получить консультацию',style:'bg-light-red'},
    {text: 'Наши услуги'},
    {text: 'Наши работы'},
    {text: 'Частые вопросы'},
  ]
  return (
    <section className="flex flex-col items-center justify-center text-center md:flex-row md:justify-between p-8 bg-dark-blue text-white">
      <div className="md:w-1/2 space-y-6">
        <Text as='h1' className='text-4xl font-bold'>
          Разработка и дизайн
          </Text>
        <Text as='p' className='text-lg'>
          Современная веб-студия, занимающееся разработкой продающих сайтов и дизайнов социальных сетей
        </Text>
        <MainMenu items={menuItems}/>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img src="/images/Man.png" alt="3D Human" className="w-full h-auto"/>
      </div>
    </section>
  );
  };
  
  export default Hero;
  