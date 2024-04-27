import ScrollIntoView from "../../animations/scrollIntoView/ScrollIntoView";
import InstagramCard from "./InstagramCard";

interface InstagramData {
  id: string;
  media_url: string;
}

const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_TOKEN}`;

async function fetchData() {
  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    // setError(error);
    console.log("in catch");
  }
  //   } finally {
  //     console.log("In finally");
  //     // setLoading(false);
  //   }
}
const InstagramGallery = async () => {
  const instagramData = await fetchData();
  // console.log("instagramData3: ", instagramData);

  // const Gallery: React.FC = () => {
  return (
    <div id="instagram" className="container mx-auto px-4">
      <ScrollIntoView>
        <h2>INSTAGRAM</h2>
        <div className="flex justify-center w-[80%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2 gap-0.5">
            {instagramData?.data && instagramData.data.map((card: InstagramData) => (
              <InstagramCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </ScrollIntoView>
    </div>
  );
};
// };

export default InstagramGallery;
