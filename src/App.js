import "./styles.css";
import UserList from "./components/UserList";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <UserList />
      </div>
    </Router>
  );
}
