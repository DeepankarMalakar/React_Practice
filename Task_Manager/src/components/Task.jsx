import { useState } from "react";
import { MdDelete, MdEditSquare } from "react-icons/md";
import { doc, deleteDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from "../../config/firebase"; // Import Firebase config
import ModalBox from "./ModalBox"; // Import Modal component

const Task = ({ id, taskName, fetchTasks }) => {
    const [showModal, setShowModal] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    // Function to delete task from Firestore
    const deleteTask = async () => {
        try {
            await deleteDoc(doc(db, "tasks", id)); // Deletes task from Firestore
            fetchTasks(); // Refresh task list
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    return (
        <>
            <div
                className="mt-4 shadow-sm bg-light p-3 rounded"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "360px",
                    minHeight: "50px",
                    wordWrap: "break-word",
                    flexWrap: "wrap",
                    border: "1px solid gray",
                    textDecoration: isChecked ? "line-through dashed" : "none", // Dashed line-through effect
                    color: isChecked ? "gray" : "black" // Change color when checked
                }}
            >
                <div style={{ width: "60%", overflowWrap: "break-word" }}>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                        <li className="fw-bold">{taskName}</li>
                    </ul>
                </div>

                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                    style={{
                        width: "20px",
                        height: "20px",
                        border: "1px solid green",
                        borderRadius: "4px",
                        cursor: "pointer",
                        accentColor: "green"
                    }}
                />

                {/* Delete Task */}
                <MdDelete className="text-danger" style={{ fontSize: "25px", cursor: "pointer" }} onClick={deleteTask} />

                {/* Edit Task - Opens Modal */}
                <MdEditSquare
                    className="text-primary"
                    style={{ fontSize: "25px", cursor: "pointer" }}
                    onClick={handleShow}
                />
            </div>

            {/* Modal Component */}
            <ModalBox show={showModal} handleClose={handleClose} taskName={taskName} />
        </>
    );
};

export default Task;
