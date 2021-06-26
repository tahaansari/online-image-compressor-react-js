import './App.scss'
import UploadBox from './components/UploadBox'
import Tasks from './components/Tasks'
import DownloadAll from './components/DownloadAll'
import { useState } from "react";
function App() {
  const [tasks,setTasks] = useState([])
  const handleChange = (tasks)=>{
    setTasks(tasks); 
  }
  return (
    <>
      <UploadBox handleChange={(tasks)=>handleChange(tasks)}/>
      <div className="task-list">
        <Tasks tasks={tasks}/>
      </div>
      <DownloadAll/>
    </>
  );
}
export default App;