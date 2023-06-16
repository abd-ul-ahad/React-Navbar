import { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Products() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const items = [
    "The essentials",
    "Top Products and platforms",
    "Industries",
    "Automation",
    "Blockchain",
    "Business Operations",
    "Business Operations",
    "Business Operations",
  ];

  const renderItems = [<About />, <Partners />, <News />];

  return (
    <section className="flex  flex-row justify-between">
      <div className="lg:pt-2 w-1/3">
        <div className="lg:px-8">
          <ul
            className="pb-44"
            style={{ borderRight: "2px solid var(--grey)" }}
          >
            {items.map((e, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    setSelectedIndex(i);
                  }}
                  className={`subNavLinkStyle py-2 sublink text-sm  ${
                    selectedIndex === i && "activeSubLinkBtn"
                  }`}
                >
                  {e}
                </li>
              );
            })}
          </ul>
          <div className="px-5 mt-4">
            <div style={{ borderTop: "2px solid var(--grey)" }}>
              <button className="text-[var(--logo-blue)] flex items-center space-x-4 py-3 ">
                <div className="self-start pr-5">Explore More</div>
                <div>
                  <HiArrowNarrowRight size={25} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:pb-10 flex-1 lg:pt-5">
        {renderItems.map((e, i) => {
          return <div key={i}>{selectedIndex == i && e}</div>;
        })}
      </div>
    </section>
  );
}

function About() {
  return (
    <div>
      <div className="space-y-1">
        <button className="flex hover:underline items-center space-x-4 text-2xl font-normal cursor-pointer">
          <div> Consulting</div>{" "}
          <div>
            <HiArrowNarrowRight color="var(--logo-blue)" size={25} />
          </div>
        </button>
        <p className="text-sm text-[#525252]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  );
}

function Partners() {
  return <div>PArtners</div>;
}

function News() {
  return <div>News</div>;
}
