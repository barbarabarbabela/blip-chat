import React from "react";

interface ContactCardProps {
  name: string;
  onClickDetails: () => void;
  handleHistoryClick: () => void
}

function ContactCard({ name, onClickDetails, handleHistoryClick }: ContactCardProps) {

  return (
    <div className="bg-white border shadow-lg rounded-lg p-6 w-fit m-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        {name}
      </h1>
      <div className="flex gap-10">
        <p
          className="text-gray-600 mb-2 hover:underline hover:cursor-pointer"
          onClick={onClickDetails}
        >
          Detalhes
        </p>
        <p
          className="text-gray-600 hover:underline hover:cursor-pointer"
          onClick={handleHistoryClick}
        >
          Histórico de mensagens
        </p>
      </div>

    </div>
  );
}

export default ContactCard;
