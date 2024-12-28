import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import AddButton from './components/AddButton';
import LoginPage from './components/LoginPage';

function App() {
  let userLoggedIn = true;

  return (
    <div className="App">
      <Header />
      {
        userLoggedIn
          ? <Content />
          : <LoginPage />
      }
      <AddButton />
    </div>
  );
}

export default App;
