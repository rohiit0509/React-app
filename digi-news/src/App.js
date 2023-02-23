import './App.css';
import Navbar from './components/Navbar'
import News from './components/News';
import { Route, Routes } from "react-router-dom";

function App() {
 const pageSize=6;
  const apiKey=process.env.REACT_APP_NEWS_API;
  return (
    <div>
      <Navbar title="DigiNews" />
      <Routes>
        <Route exact path="/" element={<News key="general" pageSize={pageSize} apiKey={apiKey} country="in" category="general"/>}></Route>
        <Route exact path="/business" element={<News key="business" pageSize={pageSize} apiKey={apiKey} country="in" category="business"/>}></Route>
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize={pageSize} apiKey={apiKey} country="in" category="entertainment"/>}></Route>
        <Route exact path="/general" element={<News key="general" pageSize={pageSize} apiKey={apiKey} country="in" category="general"/>}></Route>
        <Route exact path="/health" element={<News key="health" pageSize={pageSize} apiKey={apiKey} country="in" category="health"/>}></Route>
        <Route exact path="/science" element={<News key="science" pageSize={pageSize} apiKey={apiKey} country="in" category="science"/>}></Route>
        <Route exact path="/sports" element={<News key="sports" pageSize={pageSize} apiKey={apiKey} country="in" category="sports"/>}></Route>
        <Route exact path="/technology" element={<News key="technology" pageSize={pageSize} apiKey={apiKey} country="in" category="technology"/>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
