
import './App.css';
import AddAuthor from './Components/AddAuthor';
import AddBook from './Components/AddBook';
import AddPublisher from './Components/AddPublisher';
import AuthorDashboard from './Components/AuthorDashboard';
import BooksDashboard from './Components/BooksDashboard';
import OurTeam from './Components/OurTeam';
import SignIn from './Components/SignIn';
import MainRouter from './MainRouter';

function App() {
  return (
    <div className="App">
     <MainRouter />
    </div>
  );
}

export default App;
