import React from "react";
import { useContactsQuery } from "../hooks/use-contacts";
import ContactCard from "./contact-card";
import { useContactsContext } from "../contexts/contacts-context";
import DetailsModal from "./details-modal";
import { Contact } from "../interfaces/contacts";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { contacts } = useContactsContext();
  const { data, isLoading } = useContactsQuery(contacts);
  const [isDetailModalOpen, setIsDetailModalOpen] = React.useState(false);
  const [selectedContact, setSelectedContact] = React.useState<Contact | null>(
    null
  );
  const navigate = useNavigate();


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || !data.contactList) {
    return <div>No contacts found.</div>;
  }

  const handleDetailModal = () => {
    setIsDetailModalOpen(!isDetailModalOpen);

  };

  const handleContactClick = (contact: Contact) => {
    setSelectedContact(contact);
    setIsDetailModalOpen(true);
  };

  const handleHistoryClick = (contact: Contact) => {
    navigate('/contato/', { state: { selectedContact: contact } });
  };

  return (
    <div>
      <h1 className="text-3xl p-10 font-bold ">Contatos registrados no bot</h1>
      <div className="flex flex-wrap">
        {data.contactList.map((contact) => (
          <ContactCard
            key={contact.identity}
            name={contact.name}
            onClickDetails={() => handleContactClick(contact)}
            handleHistoryClick={() => handleHistoryClick(contact)}
          />
        ))}
      </div>

      {isDetailModalOpen && selectedContact && (
        <DetailsModal
          isOpen={isDetailModalOpen}
          title={"Detalhes do contato"}
          onClose={handleDetailModal}
          contact={selectedContact} 
        />
      )}
    </div>
  );
}

export default HomePage;
