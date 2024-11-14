import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 bg-dark-blue">
      <div className="flex items-center space-x-4">
        <div className="text-white font-bold">LOGO</div>
        <nav className="flex space-x-4">
          <Link href="/" className="px-4 py-2 bg-light-red text-white rounded-full">
            О нас
          </Link>
          {/* Дополнительные ссылки навигации можно добавить здесь */}
        </nav>
      </div>
      <div className="p-2 rounded-full">
        🌐
      </div>
    </header>
  );
};

export default Header;
