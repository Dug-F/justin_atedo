//import Image from "next/image";

interface InstagramCardProps {
  id: string;
  media_url: string;
}

const InstagramCard: React.FC<InstagramCardProps> = ({ id, media_url }) => (
  <div className="flex px-4">
    <img src={media_url} alt={id} className="w-[309px]" />
  </div>
);

export default InstagramCard;
