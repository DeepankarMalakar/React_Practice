import userLogo from "../assets/user.png";
import editLogo from "../assets/edit.png";
import deleteLogo from "../assets/icons8-trash-30.png";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
const Contact = ({ id, name, email, onOpen }) => {
    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, "contacts", id))
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="bg-orange-500 w-full w sm:w-[400px] p-4 rounded-lg items-center gap-4 shadow-md mx-auto grid grid-cols-2 md:grid md:grid-rows-2">
            {/* User Logo */}
            <div className="flex-shrink-0">
                <img
                    src={userLogo}
                    alt="User"
                    className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] object-contain"
                />
            </div>

            {/* User Info */}
            <div className="flex-1 grid-rows-2 flex-col">
                <h1
                    className="text-md sm:text-lg font-bold text-orange-500 bg-white p-1 rounded-sm mb-1 truncate"
                    style={{ maxWidth: "300px" }}
                    title={name}
                >
                    {name}
                </h1>
                <p
                    className="text-sm sm:text-base font-semibold text-green-700 bg-white p-1 rounded-sm truncate"
                    style={{ maxWidth: "300px" }}
                    title={email}
                >
                    {email}
                </p>
            </div>

            {/* Action Icons */}
            <div className="flex items-center gap-4">
                <img
                    src={editLogo}
                    alt="Edit"
                    className="w-[35px] h-[35px] sm:w-[35px] sm:h-[35px] object-contain cursor-pointer bg-white p-2 rounded-sm"
                    onClick={() => onOpen({ id, name, email })} // Pass the contact data
                />

                <img
                    src={deleteLogo}
                    alt="Delete"
                    className="w-[35px] h-[35px] sm:w-[35px] sm:h-[35px] object-contain cursor-pointer bg-white p-2 rounded-sm"
                    onClick={() => deleteContact(id)}
                />
            </div>
        </div>
    );
};

export default Contact;
