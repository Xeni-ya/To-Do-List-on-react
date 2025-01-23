import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import LoginPage from './components/LoginPage';
import NavBar from './components/NavBar';
import { BrowserRouter as Routes, Route, } from "react-router-dom";

function App() {
  //let userLoggedIn = true;

  return (
    <div className="App">
      <Header title="My list" />
      <NavBar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
