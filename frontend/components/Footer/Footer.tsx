import Link from "next/link";
import Text from "../Text/Text";

const Footer = () => {
  return (
    <footer className="text-white-custom text-sm relative z-10 flex items-center justify-between py-3 px-5 md:p-4 bg-[#1c202d] text-gray-400 w-full mt-auto 3xl:py-3 xl:px-12 2xl:px-0 xl:py-4">
      <div className="container mx-auto sm:max-w-[544px] md:max-w-[720px] xl:max-w-full 2xl:max-w-[1440px] 3xl:max-w-[1490px] px-0 flex items-center justify-between ">
        <Text as="p" weight="medium" size="sm" className="3xl:text-xl xl:text-[18px]">MOZGI TECH  <span className="font-normal px-[2px]">| 2025</span></Text>
        <div className="flex space-x-4 font-medium 3xl:text-xl xl:text-[18px]">
          <Link href="#">INSTA</Link>
          <Link href="#">BEHANCE</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;