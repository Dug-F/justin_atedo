import VideoPlayer from "../VideoPlayer/VideoPlayer";

interface ShowreelCardProps {
  id: number;
  src: string;
}

const ShowreelCard: React.FC<ShowreelCardProps> = ({ id, src }) => (
  <div className="flex px-4">
    <VideoPlayer src={src} autoplay={false} muted={false} />
  </div>
);

export default ShowreelCard;
