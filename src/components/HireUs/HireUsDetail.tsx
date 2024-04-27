import React from "react";
import RiseFromBelow from "@/animations/RiseFromBelow/RiseFromBelow";

interface HireUsCardProps {
  id: string;
  title: string;
  description: string;
}

const HireUsDetail: React.FC<HireUsCardProps> = ({ id, title, description }) => {
  return (
    <section className="font-roboto tracking-wider flex px-4 flex-shrink-0 flex-grow-0 justify-center items-center">
      <RiseFromBelow>
        <h3 className={`text-3xl text-center mt-2`}>{description}</h3>
      </RiseFromBelow>
    </section>
  );
};

export default HireUsDetail;
