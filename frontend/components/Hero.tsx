const Hero = () => {
    return (
      <section className="flex flex-col items-center justify-center text-center md:flex-row md:justify-between p-8 bg-dark-blue text-white">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold">Разработка и дизайн</h1>
          <p className="text-lg">
            Современная веб-студия, занимающаяся разработкой продающих сайтов и дизайнов социальных сетей.
          </p>
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
            <button className="px-6 py-3 bg-light-red text-white rounded-full">Получить консультацию</button>
            <button className="px-6 py-3 bg-dark-blue text-white rounded-full border border-white">Наши услуги</button>
            <button className="px-6 py-3 bg-dark-blue text-white rounded-full border border-white">Наши работы</button>
            <button className="px-6 py-3 bg-dark-blue text-white rounded-full border border-white">Частые вопросы</button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="/images/Man.png" alt="3D Human" className="w-full h-auto"/>
        </div>
      </section>
    );
  };
  
  export default Hero;
  