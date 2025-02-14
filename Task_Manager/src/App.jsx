import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./components/Input";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import Task from "./components/Task";
import Spinner from "react-bootstrap/Spinner";

const App = () => {
    const [theTask, setTheTask] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch tasks
    const fetchTasks = async () => {
        setLoading(true);
        setError(null);
        try {
            const taskRef = collection(db, "tasks");
            const taskSnapshot = await getDocs(taskRef);
            const taskList = taskSnapshot.docs.map((task) => ({
                id: task.id,
                ...task.data(),
            }));
            setTheTask(taskList);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Failed to load tasks. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks(); // Fetch tasks when component loads
    }, []);

    return (
        <div
            className="container shadow-lg"
            style={{
                width: "400px",
                marginTop: "50px",
                background: "white",
                borderRadius: "8px",
                padding: "16px",
            }}
        >
            <Input fetchTasks={fetchTasks} /> {/* Pass function to refresh tasks */}

            {loading ? (
                <div className="text-center my-3">
                    <Spinner animation="border" variant="primary" />
                    <p>Loading tasks...</p>
                </div>
            ) : error ? (
                <p className="text-danger text-center">{error}</p>
            ) : theTask.length > 0 ? (
                theTask.map((task) => <Task key={task.id} id={task.id} taskName={task.task} />)
            ) : (
                <h5 className="text-center my-3">No Pending Tasks...</h5>
            )}
        </div>
    );
};

export default App;
