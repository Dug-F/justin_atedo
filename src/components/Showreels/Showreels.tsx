import ShowreelCard from "../ShowreelCard/ShowreelCard";
import ScrollIntoView from "../../animations/scrollIntoView/ScrollIntoView";

interface CardData {
  id: number;
  src: string;
}

const cardData: CardData[] = [
  { id: 1, src: "/video/showreel1.mp4" },
  { id: 2, src: "/video/showreel2.mp4" },
  { id: 3, src: "/video/showreel3.mp4" },
];

const Showreels: React.FC = () => {
  return (
    <div id="showreels" className="container mx-auto px-4">
      <ScrollIntoView>
        <h2>SOME OF OUR WORK</h2>
        <div className="flex justify-center w-[80%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2 gap-2">
            {cardData.map((card) => (
              <ShowreelCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </ScrollIntoView>
    </div>
  );
};

export default Showreels;
