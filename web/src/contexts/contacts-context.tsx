import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface ContactsContextType {
  contacts: string[];
  setContacts: (contacts: string[]) => void; 
}

export const ContactsContext = createContext<ContactsContextType | undefined>(undefined);

export const ContactsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [contacts, setContacts] = useState<string[]>([]); 

  return (
    <ContactsContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactsContext.Provider>
  );
};

export const useContactsContext = () => {
  const context = useContext(ContactsContext);
  if (!context) {
    throw new Error('useContactsContext must be used within a ContactsProvider');
  }
  return context;
};
