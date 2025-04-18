import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-[#F6F6F633] w-full h-[64px] rounded-full">
      <div className="flex items-center space-x-3">
        <a href="http://localhost:3000/">
          <div className="text-white bg-[#F26666] rounded-full px-6 py-2 font-bold">
            LOGO
          </div>
        </a>
        <nav className="flex">
          <Link href="/about" className="px-6 py-2 bg-[#FFFFFF42] text-white rounded-full font-bold">
            О нас
          </Link>
        </nav>
      </div>
      <div className="rounded-full">
        <img src="/images/icon-globe.png" alt="" className="w-[40px] h-[40px]"/>
      </div>
    </header>
  );
};

export default Header;
