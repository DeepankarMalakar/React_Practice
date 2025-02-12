import { createPortal } from "react-dom";
import { Formik, Form, Field } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const Model = ({ isOpen, onClose, isUpdate, selectedContact }) => {
    const modelRoot = document.getElementById("model-root");
    if (!modelRoot) return null;

    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact);
        } catch (error) {
            console.error("Error adding contact:", error);
        }
    };

    const updateContact = async (id, updatedContact) => {
        try {
            const contactRef = doc(db, "contacts", id);
            await updateDoc(contactRef, updatedContact);
        } catch (error) {
            console.error("Error updating contact:", error);
        }
    };

    return createPortal(
        <div className={`fixed inset-0 flex justify-center items-center transition-all duration-300 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
            <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm" onClick={onClose}></div>

            <div className="bg-white rounded-lg p-6 shadow-lg w-[90%] sm:w-[400px] relative z-10">
                <h2 className="text-xl font-bold mb-4">{isUpdate ? "Edit Contact" : "Add New Contact"}</h2>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">✖</button>

                {/* Form using Formik */}
                <Formik
                    initialValues={{
                        name: selectedContact?.name || "",
                        email: selectedContact?.email || "",
                    }}
                    onSubmit={async (values) => {
                        if (isUpdate) {
                            await updateContact(selectedContact.id, values);
                        } else {
                            await addContact(values);
                        }
                        onClose();
                    }}
                    enableReinitialize
                >
                    {() => (
                        <Form className="flex flex-col gap-4">
                            <Field type="text" name="name" placeholder="Name" className="border border-gray-400 rounded-md w-full py-2 px-3 focus:outline-orange-500" />
                            <Field type="email" name="email" placeholder="Email" className="border border-gray-400 rounded-md w-full py-2 px-3 focus:outline-orange-500" />
                            <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600">
                                {isUpdate ? "Update" : "Add"} Contact
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>,
        modelRoot
    );
};

export default Model;
