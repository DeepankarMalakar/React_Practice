import { useState } from "react";

const useDisclose = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);

    const onOpen = () => setIsOpen(true);
    const onClose = () => {
        setIsOpen(false);
        setIsUpdate(false);
        setSelectedContact(null); // Clear selected contact on close
    };

    const onUpdate = (contact) => {
        setSelectedContact(contact);
        setIsUpdate(true);
        setIsOpen(true);
    };

    return { isOpen, onOpen, onClose, onUpdate, isUpdate, selectedContact };
};

export default useDisclose;
