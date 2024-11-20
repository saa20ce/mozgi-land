// frontend/components/MainMenu.tsx
type MenuItem = {
    text: string;
    onClick?: () => void; 
    href?: string; 
    style?: string; 
  };
  
  type MainMenuProps = {
    items: MenuItem[];
  };
  
  const MainMenu = ({ items }: MainMenuProps) => {
    return (
      <div className="flex flex-col gap-y-4 space-y-4 md:space-y-0 md:flex-col">
        {items.map((item, index) => (
          item.href ? (
            <a
              key={index}
              href={item.href}
              className={`px-6 py-3 bg-dark-blue hover:bg-blue-900 text-white rounded-full border border-white ${item.style}`}
            >
              {item.text}
            </a>
          ) : (
            <button
              key={index}
              onClick={item.onClick}
              className={`px-6 py-3 bg-dark-blue hover:bg-blue-900 text-white rounded-full border border-white ${item.style}`}
            >
              {item.text}
            </button>
          )
        ))}
      </div>
    );
  };
  
  export default MainMenu;
  