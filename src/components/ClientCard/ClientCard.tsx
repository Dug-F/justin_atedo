import React from "react";
import ScrollIntoView from "../../animations/scrollIntoView/ScrollIntoView";
import Image from "next/image";
import "../../../public/client_logo.png";

interface ClientLogo {
  id: number;
  imgSrc: string;
  altText: string;
  // Optional width property
  width?: number;
}

const clientLogos: ClientLogo[] = [
  {
    id: 1,
    imgSrc: "/client_logo.png",
    altText: "client_logo_1",
  },
  {
    id: 2,
    imgSrc: "/client_logo.png",
    altText: "client_logo_2",
  },
  {
    id: 3,
    imgSrc: "/client_logo.png",
    altText: "client_logo_2",
  },
  {
    id: 4,
    imgSrc: "/client_logo.png",
    altText: "client_logo_2",
  },
];

const defaultWidth = 500; // Set your desired default width

const ClientLogo: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <ScrollIntoView>
        <h2>OUR CLIENTS</h2>
        <div className="flex justify-center w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientLogos.map((client) => (
              <ClientCard key={client.id} {...client} width={defaultWidth} />
            ))}
          </div>
        </div>
      </ScrollIntoView>
    </div>
  );
};

const ClientCard: React.FC<ClientLogo> = ({ id, imgSrc, altText, width }) => {
  return (
    <div className="client-card">
      <Image src={imgSrc} alt={altText} width={width} height={width} />
    </div>
  );
};

export default ClientLogo;
