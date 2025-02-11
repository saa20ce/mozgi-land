import Text from "../Text/Text";
const Footer = () => {
    return (
      <footer className="flex items-center justify-between p-4 bg-[#232C3F47] text-gray-400 w-full h-[50px] z-2 absolute bottom-0">
        <Text as="p">MOZGI TECH | 2024</Text>
        
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">INSTA</a>
          <a href="#" className="hover:text-white">BEHANCE</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  