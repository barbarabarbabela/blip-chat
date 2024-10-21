import React from "react";
import DetailsModal from "./details-modal";
import { useNavigate } from "react-router-dom";

function ContactCard() {
  const [isDetailModalOpen, setIsDetailModalOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDetailModal = () => {
    setIsDetailModalOpen(!isDetailModalOpen);
  };

  const handleHistoryClick = () => {
    navigate(`/contato`);
  };

  return (
    <div className="bg-white border shadow-lg rounded-lg p-6 max-w-sm m-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Contact name
      </h1>
      <div className="flex justify-between">
        <p
          className="text-gray-600 mb-2 hover:underline hover:cursor-pointer"
          onClick={handleDetailModal}
        >
          Detalhes
        </p>
  <p
          className="text-gray-600 hover:underline hover:cursor-pointer"
          onClick={handleHistoryClick}
        >
          Histórico de mensagens
        </p>
        {isDetailModalOpen && (
          <DetailsModal
            isOpen={isDetailModalOpen}
            title={"Detalhes do contato"}
            onClose={handleDetailModal}
          >
            Email: etc@etc.com <br />
            Grupo: grupo
            <br />
            Última mensagem: xx/xx/xxxx
            <br />
            Cidade: São Paulo
          </DetailsModal>
        )}
      </div>
    </div>
  );
}

export default ContactCard;
