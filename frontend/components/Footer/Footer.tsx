import Text from "../Text/Text";
const Footer = () => {
  return (
    <footer className="text-white-custom text-sm relative z-10 flex items-center justify-between py-3 px-5 md:p-6 bg-[#1C202DB2] text-gray-400 w-full mt-auto">
      <div className="container mx-auto max-w-[1140px] px-0 flex items-center justify-between">
        <Text as="p" weight="medium" size="sm">MOZGI TECH  <span className="font-normal px-[2px]">| 2025</span></Text>
        <div className="flex space-x-4 font-medium">
          <a href="#">INSTA</a>
          <a href="#">BEHANCE</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;