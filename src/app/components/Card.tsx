import React from "react";

interface CardProps {
  title: string;
  value: string;
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
  background?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  value,
  cardNumber,
  cardHolder,
  expiryDate,
  background,
}) => {
  return (
    <div
      className={`p-4 rounded shadoe ${background ? background : "bg-white"}`}
    >
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-2xl">{value}</p>
      {cardNumber && <p className="text-sm">**** {cardNumber}</p>}
      {cardHolder && <p className="text-sm">Card Holder: {cardHolder}</p>}
      {expiryDate && <p className="text-sm">Expires: {expiryDate}</p>}
    </div>
  );
};

export default Card;
