import Image from "next/image";
import React from "react";

// Define TypeScript interfaces for your data
interface ClientLogoCardProps {
  id: number;
  imgSrc: string;
  altText: string;
  width?: number;
}

const ClientLogoCard: React.FC<ClientLogoCardProps> = ({ id, imgSrc, altText, width = 100 }) => {
  return (
    <div className="client-logo-card">
      <Image
        src={imgSrc}
        alt={altText}
        width={width}
        height={width}
        className="w-auto"
      />
    </div>
  );
};

export default ClientLogoCard;
