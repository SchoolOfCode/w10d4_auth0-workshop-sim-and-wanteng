import './App.css';
import LoginButton from "./LoginButton/index.js";
import LogoutButton from './LogoutButton/index.js';
import Profile from './Profile/index.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <LoginButton />
      <Profile />
      <LogoutButton />
      </header>
    </div>
  );
}

export default App;
