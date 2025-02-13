import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/Input';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useEffect, useState } from 'react';
import Task from './components/Task';

const App = () => {
  const [theTask, setTheTask] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const taskRef = collection(db, "tasks");
        const taskSnapshot = await getDocs(taskRef);
        const taskList = taskSnapshot.docs.map((task) => ({
          id: task.id, // Extract document ID
          ...task.data() // Extract task data
        }));
        setTheTask(taskList);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    getTasks(); // Call the function inside useEffect
  }, []);

  return (
    <div className="container shadow-lg" style={{ width: "400px", marginTop: "50px", background: "white", borderRadius: "8px", padding: "16px" }}>
      <Input />
      
      {theTask.length > 0 ? (
        theTask.map((task) => (
          <Task key={task.id} id={task.id} taskName={task.task} />
        ))
      ) : (
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>No Pending tasks...</h1>
      )}
    </div>
  );
};

export default App;
