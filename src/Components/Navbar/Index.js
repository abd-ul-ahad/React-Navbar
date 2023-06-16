import { useState, useRef } from "react";
import Layout from "@/Components/Navbar/Comp/Layout"; // Drop down menu layout
import { RxHamburgerMenu } from "react-icons/rx"; // Hamburger Icon used in navbar
import { BsFillPersonFill } from "react-icons/bs"; // Person Icon in Navbar
// import { AiOutlineDown } from "react-icons/ai";
import Link from "next/link";

export default function Navbar() {
  const menuBoxRef = useRef(); // directing to dropped menu box

  //setting the index of dropped menu in navbar
  const [droppedMenuIndex, setDroppedMenuIndex] = useState(false);

  const navItems = ["Products", "Solutions", "Consulting", "More"];

  const onActiveMenu = (_index, e) => {
    //activating the selecting menu in navbar
    e.target.classList.add("navLinkAnima");
    e.target.classList.remove("navLinkRemovAnima");

    //dropping the menu box
    menuBoxRef.current.classList.add("handleOnMenu");
    menuBoxRef.current.classList.remove("handleOffMenu");

    //selecting the dropped down menu
    setDroppedMenuIndex(_index);
  };

  const disableDropDownMenu = () => {
    if (menuBoxRef.current != null || menuBoxRef.current != undefined) {
      menuBoxRef.current.classList.remove("handleOnMenu");
      menuBoxRef.current.classList.add("handleOffMenu");
      setDroppedMenuIndex(false);
    }
  };

  try {
    window.addEventListener("blur", () => disableDropDownMenu());
    document.addEventListener("scroll", () => disableDropDownMenu());

    document.addEventListener("click", (e) => {
      if (
        e.target.closest("[data-dropdown]") != null ||
        e.target.closest("[data-dropdown-button]") != null
      )
        return;

      disableDropDownMenu();
    });
  } catch {}

  return (
    <>
      {/* Navbar Starts */}
      <nav className="lg:flex items-center bg-white flex-1 relative lg:justify-between lg:align-middle lg:px-8 text-sm user-select-none">
        <div>
          <Link href="/">
            <img src="/images/logo/mu-logo-head.png" className="h-8" />
          </Link>
        </div>

        <div className="lg:flex-1 lg:px-4">
          <ul className="lg:flex lg:justify-start  items-center lg:align-middle">
            {navItems.map((e, i) => {
              return (
                <li
                  key={i}
                  data-dropdown-button
                  className={`${
                    droppedMenuIndex === i && "navLinkAnima"
                  } lg:px-7 lg:py-3 cursor-pointer flex navLinkRemovAnima`}
                  onClick={(x) => {
                    if (droppedMenuIndex === i) {
                      disableDropDownMenu();
                      return;
                    }
                    onActiveMenu(i, x);
                  }}
                >
                  {e}{" "}
                  {/* <AiOutlineDown  className={`colorMain ${droppedMenuIndex === i &&"rotate-180"}  bg-transparent  px-2 noBorderBottom`} /> */}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Side of navbar */}
        <div className="px-3 py-2 flex items-center space-x-5">
          <button className="colorMain">
            <BsFillPersonFill size={22} />
          </button>
          <button className="colorMain">
            <RxHamburgerMenu size={22} />
          </button>
        </div>
      </nav>
      {/* Navbar Ends */}

      {/* Drop down Menu starts */}
      <div
        data-dropdown
        className="lg:bg-gray-100 handleOffMenu z-50  "
        ref={menuBoxRef}
        // handleOnMenu   handleOffMenu
      >
        <Layout _DroppedMenuIndex={droppedMenuIndex} />
      </div>
      {/* Drop down Menu Ends */}
    </>
  );
}
