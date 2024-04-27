"use client";
import React, { useState, Dispatch, SetStateAction, useRef } from "react";
import HireUsTitle from "./HireUsTitle";
import ScrollIntoView from "../../animations/scrollIntoView/ScrollIntoView";
import HireUsDetail from "./HireUsDetail";

interface CardData {
  id: string;
  title: string;
  description: string;
}

const cardData: CardData[] = [
  {
    id: "1",
    title: "Lorem ipsum dolor sit",
    description: "adipisicing elit. In non similique placeat",
  },
  {
    id: "2",
    title: "dolor sit, amet",
    description: "incidunt quas , provident",
  },
  {
    id: "3",
    title: "consectetur adipisicing",
    description: "ad quibusdam corrupti officiis nam iure? Laudantium",
  },
  {
    id: "4",
    title: "non similique placeat",
    description: "magnam soluta aspernatur at nisi ipsum, blanditiis deleniti",
  },
];

const HireUs: React.FC = () => {
  const [activeId, setActiveId] = useState("1");

  const handleShowDetail = (id: string) => {
    setActiveId(id);
  };

  return (
    <>
      <section className="container flex px-4 justify-center">
        <ScrollIntoView>
          <h2 className="border-red-500 border-b-4 w-300">
            YOU SHOULD HIRE US BECAUSE
          </h2>
        </ScrollIntoView>
      </section>
      <ScrollIntoView>
        <section className="container flex grid-cols-2 justify-center flex-shrink-0 flex-grow-0 w-[375px] md:w-[1200px] items-center">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-2 lg:gap-4 cursor-pointer flex-shrink-0 flex-grow-0 w-full md:w-1/2">
            {cardData.map((card) => (
              <HireUsTitle
                key={card.id}
                onShowDetail={handleShowDetail}
                activeId={activeId}
                {...card}
              />
            ))}
          </div>
          <div className="hidden sm:block w-full">
            {cardData.map(
              (card) =>
                card.id == activeId && <HireUsDetail key={card.id} {...card} />
            )}
          </div>
        </section>
      </ScrollIntoView>
    </>
  );
};

export default HireUs;
