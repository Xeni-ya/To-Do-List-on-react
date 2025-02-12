import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import LoginPage from './components/LoginPage';
import NavBar from './components/NavBar';
import News from './components/News';
import NewsPage from './components/NewsPage';
import Missing from './components/Missing';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
  //let userLoggedIn = true;

  const news = [
    { id: 1, text: "бла-бла-бла" },
    { id: 2, text: "ла-ла-ла" },
    { id: 3, text: "бла-бла-бла" }
  ]

  return (
    <Router>
      <div className="App">
        <Header title="My list" />
        <NavBar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/news" element={<News news={news} />} />
          <Route path="/news/:id" element={<NewsPage news={news} />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
