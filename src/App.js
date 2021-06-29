
import './App.css';
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import RightBar from './components/RightBar';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <RightBar />
    </div>
  );
}

export default App;
