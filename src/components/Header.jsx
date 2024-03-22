
import { useState } from "react";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">

        <nav
          className={`${
            openNavigation ? "flex" : "flex"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <h1 class="text-[#e2bb59] text-4xl font-bold my-6" >Team Xarcode</h1>
        </nav>
      </div>
    </div>
  );
};

export default Header;
