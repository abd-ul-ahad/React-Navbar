import { ImCross } from "react-icons/im";

export default function RightMenu({ setRightMenuState }) {
  return (
    <div className="flex">
      <div
        className="flex-1 flex absolute justify-center align-middle bg-black opacity-50 w-full"
        style={{ height: `${screen.height}px` }}
      >
        Exit
      </div>
      <div className="flex flex-col absolute top-0 z-100 right-0 w-1/5 bg-white">
        <div className="flex justify-end align-middle border-b-2 border-black py-2">
          <button
            onClick={() => {
              setRightMenuState(0);
            }}
            className="py-2 px-4"
          >
            <ImCross />
          </button>
        </div>

        <div>
          <div>
            <h1 className="text-lg font-semibold">Products & Solutions</h1>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Consulting & Services</h1>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Learn & Support</h1>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Explore More</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
