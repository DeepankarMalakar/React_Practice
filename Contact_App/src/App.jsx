import Input from "./components/Input";
import Navbar from "./components/Navbar";
import Model from "./components/Model";
import Contact from "./components/Contact";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "./config/firebase";
import useDisclose from "./hooks/useDisclose";

const App = () => {
  const { isOpen, onOpen, onClose, onUpdate, isUpdate } = useDisclose();
  const [contacts, setContacts] = useState([]);
  const [filteredContact, setFilteredContact] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
        const contactSnapshot = await getDocs(contactRef);
        const contactList = contactSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactList);
        setFilteredContact(contactList); // Initially, show all contacts
      } catch (error) {
        console.error("Error fetching contacts: ", error);
        setError("Failed to fetch contacts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getContacts();
  }, []);

  // Function to handle search input
  const handleSearch = (query) => {
    const filtered = contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(query.toLowerCase()) ||
        contact.email.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredContact(filtered);
  };

  const handleOpenAdd = () => {
    setSelectedContact(null);
    onOpen();
  };

  const handleOpenEdit = (contact) => {
    setSelectedContact(contact);
    onUpdate();
    onOpen();
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="max-w-[95%] sm:max-w-[700px] mx-auto mt-10">
      {/* Navbar and Input */}
      <div className="flex flex-col items-center justify-center">
        <Navbar />
        <Input onOpen={handleOpenAdd} onSearch={handleSearch} />
        <h2 className="mt-3 rounded-md bg-green-500 px-6 py-2 text-[18px] font-semibold text-white">Contacts</h2>
      </div>

      {/* Contacts List */}
      <div className="mt-8 flex flex-col items-center gap-4 w-full">
        {filteredContact.length > 0 ? (
          filteredContact.map((contact) => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              email={contact.email}
              onOpen={() => handleOpenEdit(contact)}
            />
          ))
        ) : (
          <>
          <div className="text-center text-white">No contacts found...</div>
          </>
        )}
      </div>

      {/* Modal */}
      <Model isOpen={isOpen} onClose={onClose} isUpdate={isUpdate} selectedContact={selectedContact} />
    </div>
  );
};

export default App;
