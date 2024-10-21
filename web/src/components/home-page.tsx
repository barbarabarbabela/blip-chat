import React, { useEffect, useState } from 'react'
import { getContacts } from '../http/get-contacts';
import ContactCard from './contact-card';

function HomePage() {
  // const [contacts, setContacts] = useState([]);

  // async function handleContacts() {
  //    const response = await getContacts();
  //   console.log(response)

  // }

  // useEffect(() => {
  //   handleContacts();
  // }, []);

  return (
    <div>
      <h1 className='text-3xl p-10 font-bold'>Contatos registrados no bot</h1>
      <ContactCard />
    </div>
  )
}

export default HomePage