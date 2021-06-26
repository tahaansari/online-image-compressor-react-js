import './App.scss'
import UploadBox from './components/UploadBox'
import Tasks from './components/Tasks'
import DownloadAll from './components/DownloadAll'
function App() {
  return (
    <>
      <UploadBox/>
      <div className="task-list">
        <Tasks/>
      </div>
      <DownloadAll/>
    </>
  );
}

export default App;