import { useState } from "react";

function Header() {
  const [nav, setNav] = useState(false);
  return (
    <div className="shadow-sm sticky top-0 bg-white z-50">
      <div className="flex justify-between p-3">
        <a className="logo font-bold text-lg">
          Fin<span className="text-primary">tekkk</span>
        </a>
        <div className={`space-x-11 hidden md:flex text-sm`}>
          <ul className="flex space-x-2">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>

          <ul className="flex">
            <li>
              <a
                href=""
                className="bg-white text-primarylight border hover:bg-primarylight hover:text-white ease-in-out py-1 px-2 rounded-md"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href=""
                className="bg-primarylight text-white border hover:bg-white hover:text-primarylight ease-in-out py-1 px-2 rounded-md ml-2"
              >
                Sign Up for FREE
              </a>
            </li>
          </ul>
        </div>
        <div className={"menu z-50 scale-125 cursor-pointer md:hidden"}>
          <p
            className={nav ? "text-white" : "text-black"}
            onClick={() => {
              setNav(!nav);
            }}
          >
            &#9776;
          </p>
        </div>

        {nav ? (
          <div className={`nav fixed top-0 right-0 bg-primary h-screen w-1/2 py-14 px-8 md:hidden`}>
            <ul className=" space-y-4">
              <li className="hover:border-b-2 hover:border-b-white border-b-primary border-b-2">
                <a href="">Home</a>
              </li>
              <li className="hover:border-b-2 hover:border-b-white border-b-primary border-b-2">
                <a href="">About</a>
              </li>
              <li className="hover:border-b-2 hover:border-b-white border-b-primary border-b-2">
                <a href="">FAQs</a>
              </li>
              <li className="hover:border-b-2 hover:border-b-white border-b-primary border-b-2">
                <a href="">Contact Us</a>
              </li>
              <li className="hover:border-b-2 hover:border-b-white border-b-primary border-b-2">
                <a href="">Login</a>
              </li>
              <li className="hover:border-b-2 hover:border-b-white border-b-primary border-b-2">
                <a href="" className="">
                  Sign Up for FREE
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
