import Text from "../Text/Text";
const Footer = () => {
  return (
    <footer className="relative z-10 flex items-center justify-between p-4 md:p-6 bg-[#1C202DB2] text-gray-400 w-full h-[50px] mt-auto">
      <div className="container mx-auto max-w-[1140px] px-0 flex items-center justify-between">
        <Text as="p">MOZGI TECH | 2024</Text>
        <div className="flex space-x-4">
          <a href="#" className="text-white">INSTA</a>
          <a href="#" className="text-white">BEHANCE</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;