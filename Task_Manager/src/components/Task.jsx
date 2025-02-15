import { useState } from "react";
import { MdDelete, MdEditSquare } from "react-icons/md";
import { doc, deleteDoc, updateDoc } from "firebase/firestore"; // Fix: Use updateDoc
import { db } from "../../config/firebase"; // Import Firebase config
import ModalBox from "./ModalBox"; // Import Modal component

const Task = ({ id, taskName, isChecked: initialChecked, fetchTasks }) => {
    const [showModal, setShowModal] = useState(false);
    const [isChecked, setIsChecked] = useState(initialChecked); // ✅ Keep track of isChecked
    const [editedTaskName, setEditedTaskName] = useState(taskName); // ✅ Store new task name

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    // ✅ Toggle Check and Update Firestore
    const toggleCheck = async () => {
        const newCheckedState = !isChecked; 
        setIsChecked(newCheckedState); // Update local state

        try {
            await updateDoc(doc(db, "tasks", id), {
                isChecked: newCheckedState, // ✅ Save in Firestore
            });
            fetchTasks(); // Refresh UI
        } catch (error) {
            console.error("Error updating checkbox state:", error);
        }
    };

    // ✅ Update Task Name in Firestore
    const updateTask = async () => {
        try {
            await updateDoc(doc(db, "tasks", id), {
                task: editedTaskName, // ✅ Update task name
                isChecked: isChecked, // ✅ Keep checkbox state
            });
            fetchTasks();
            handleClose();
        } catch (error) {
            console.error("Error updating task:", error);
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
                    textDecoration: isChecked ? "line-through dashed" : "none", // ✅ Line-through when checked
                    color: isChecked ? "gray" : "black", // ✅ Change color when checked
                }}
            >
                <div style={{ width: "60%", overflowWrap: "break-word" }}>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                        <li className="fw-bold">{taskName}</li>
                    </ul>
                </div>

                {/* ✅ Checkbox with Toggle Function */}
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={toggleCheck}
                    style={{
                        width: "20px",
                        height: "20px",
                        border: "1px solid green",
                        borderRadius: "4px",
                        cursor: "pointer",
                        accentColor: "green",
                    }}
                />

                {/* Delete Task */}
                <MdDelete
                    className="text-danger"
                    style={{ fontSize: "25px", cursor: "pointer" }}
                    onClick={async () => {
                        await deleteDoc(doc(db, "tasks", id));
                        fetchTasks();
                    }}
                />

                {/* Edit Task - Opens Modal */}
                <MdEditSquare
                    className="text-primary"
                    style={{ fontSize: "25px", cursor: "pointer" }}
                    onClick={handleShow}
                />
            </div>

            {/* ✅ Modal Component for Editing Task */}
            <ModalBox
                show={showModal}
                handleClose={handleClose}
                taskName={editedTaskName}
                updateTask={updateTask}
                setTaskName={setEditedTaskName} // Pass function to update state
            />
        </>
    );
};

export default Task;
