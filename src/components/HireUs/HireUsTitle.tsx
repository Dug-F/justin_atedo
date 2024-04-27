import React from "react";
import HireUsDetail from "./HireUsDetail";

interface HireUsCardProps {
  id: string;
  title: string;
  description: string;
  activeId: string;
  onShowDetail: (id: string) => void;
}

const HireUsTitle: React.FC<HireUsCardProps> = ({
  id,
  title,
  description,
  activeId,
  onShowDetail,
}) => {
  return (
    <section>
      <div
        className={`${
          id == activeId ? "opacity-100" : "opacity-20"
        } transition duration-1000 ease-in-out`}
        onMouseEnter={() => onShowDetail(id)}
        onClick={() => onShowDetail(id)}
      >
        <div className="flex px-4">
          <h3 className={`font-bebasNeue text-5xl pt-1`}>
            {id.toString().padStart(2, "0")}
          </h3>
          <div className="font-roboto tracking-wider flex px-4">
            <h3 className={`text-3xl font-black align-middle mt-2`}>
              {title.toUpperCase()}
            </h3>
          </div>
        </div>
        <div className="description sm:hidden">
          {id == activeId && (
            <HireUsDetail id={id} title={title} description={description} />
          )}
        </div>
      </div>
    </section>
  );
};

export default HireUsTitle;
