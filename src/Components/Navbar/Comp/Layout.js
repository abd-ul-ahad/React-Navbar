//importing components for dropped down navbar
import Consulting from "./Consulting";
import Products from "./Products";
import Solutions from "./Solutions";
import { FaChevronUp } from "react-icons/fa"; //Up angle icon
import More from "./More";

export default function Layout({ _DroppedMenuIndex }) {
  return (
    <section className="border-t-2 z-50 user-select-none">
      <RenderComp _DroppedMenuIndex={_DroppedMenuIndex} />
      {/* <div className="flex bg-gray-100 justify-center items-center py-4">
        <FaChevronUp />
      </div> */}
    </section>
  );
}

function RenderComp({ _DroppedMenuIndex }) {
  //Selecting the index coming from parent Components
  if (_DroppedMenuIndex === 0) {
    return <Products />;
  } else if (_DroppedMenuIndex === 1) {
    return <Solutions />;
  } else if (_DroppedMenuIndex === 2) {
    return <Consulting />;
  } else if (_DroppedMenuIndex === 3) {
    return <More />;
  }
}
