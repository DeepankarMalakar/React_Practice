import { MdDelete, MdEditSquare } from "react-icons/md";
const Task = ({taskName}) => {
    return (
        <div className="mt-4">
            <ol>
            <li>{taskName}</li>
            </ol>
            <input type="checkbox"></input>
            <MdDelete />
            <MdEditSquare />
        </div>
    )
}

export default Task
