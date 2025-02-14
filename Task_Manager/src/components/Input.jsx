import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const Input = ({fetchTasks}) => {
    const [task, setTask] = useState(""); // Store user input

    // Function to add task to Firestore
    const handleAddTask = async () => {
        if (!task.trim()) return; // Prevent empty tasks

        try {
            const taskRef = collection(db, "tasks"); // Firestore collection
            await addDoc(taskRef, { task: task.trim() }); // Add task
            setTask(""); // Clear input
            fetchTasks(); // Refresh task list
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    return (
        <div style={{ padding: "16px 8px" }}>
            {/* Input Group */}
            <InputGroup size="lg" className="mb-3">
                <InputGroup.Text
                    id="inputGroup-sizing-lg"
                    style={{
                        border: "1px solid blue",
                        fontWeight: "bold",
                        background: "black",
                        color: "white",
                    }}
                >
                    Task
                </InputGroup.Text>
                <Form.Control
                    value={task}
                    onChange={(e) => setTask(e.target.value)} // Capture input changes
                    placeholder="Enter task..."
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-lg"
                    style={{
                        border: "1px solid #0D6EFD",
                        borderLeft: "none",
                        borderRadius: "0 4px 4px 0",
                    }}
                />
            </InputGroup>

            {/* Button Container */}
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", borderRadius: "4px" }}>
                <Button
                    variant="outline-dark"
                    onClick={handleAddTask} // Call function to add task
                    style={{
                        border: "2px solid gray",
                        padding: "6px 12px",
                        fontWeight: "bold",
                    }}
                >
                    Add Task
                </Button>
            </div>
        </div>
    );
};

export default Input;
