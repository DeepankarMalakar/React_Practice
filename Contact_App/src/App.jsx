import Input from "./components/Input";
import Navbar from "./components/Navbar";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "./config/firebase";
import Contact from "./components/Contact";
import Model from "./components/Model";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false)


  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
        const contactSnapshot = await getDocs(contactRef);
        const contactLists = contactSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactLists);
      } catch (error) {
        console.error("Error fetching contacts: ", error);
        setError("Failed to fetch contacts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getContacts();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }


  return (
    <div className="max-w-[95%] sm:max-w-[700px] mx-auto mt-10">
      {/* Navbar and Input */}
      <div className="flex flex-col items-center justify-center">
        <Navbar />
        <Input setIsOpen={setIsOpen} />
      </div>

      {/* Contacts */}
      <div className="mt-8 flex flex-col items-center gap-4 w-full">
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <Contact key={contact.id} name={contact.name} email={contact.email} />
          ))
        ) : (
          <div className="text-center text-gray-500">No contacts found.</div>
        )}
      </div>

      <Model isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default App;