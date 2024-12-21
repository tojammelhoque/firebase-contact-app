import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer } from "react-toastify";
import { db } from "./config/firebase";
import NotFoundContact from "./components/NotFoundContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactsLists = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setContacts(contactsLists);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, [db]);

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
    onSnapshot(contactsRef, (snapshot) => {
      const contactsLists = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      const filteredContacts = contactsLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);
    });
  };

  return (
    <>
      <div className="max-w-[370px] mx-auto">
        <Navbar />
        <Search onOpen={onOpen} filterContacts={filterContacts} />
        <div className="flex flex-col gap-3 mt-4">
          {contacts.length === 0 ? (
            <NotFoundContact />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
      <ToastContainer />
    </>
  );
}

export default App;
