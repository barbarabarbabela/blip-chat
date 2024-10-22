import React from "react";

interface DetailCardProps {
  contact: {
    name?: string;
    email?: string;
    group?: string;
    city?: string;
    lastMessage?: string;
  };
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

function DetailsModal({ isOpen, onClose, title, contact }: DetailCardProps) {
  if (!isOpen || !contact) return null;

  const {
    name = "Não informado",
    email = "Não informado",
    group = "Não informado",
    city = "Não informado",
    lastMessage = "Não informado",
  } = contact;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            &times;
          </button>
        </div>

        <div className="p-4">
          <div>
            <p>Nome: {name}</p>

            <p>Email: {email}</p>
            <p>Grupo: {group}</p>
            <p>Última mensagem: {lastMessage}</p>
            <p>Cidade: {city}</p>
          </div>
        </div>

        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsModal;
