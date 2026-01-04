import React, { useState } from "react";
import Contact from "./components/Contact";
import Form from "./components/Form";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const deleteContact = (idx) => {
    const newContacts = [...contacts];
    newContacts.splice(idx, 1);
    setContacts(newContacts);
  };

  return (
    <div className="flex flex-col items-center py-12">
      <Form allContacts={contacts} setAllContacts={setContacts} />

      {contacts.map((contact, index) => (
        <Contact
          key={index}
          name={contact.name}
          number={contact.number}
          onDelete={() => deleteContact(index)}
        />
      ))}
    </div>
  );
};

export default App;
