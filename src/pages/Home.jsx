import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <nav className="nav-ui">
        <Link to="/about">About</Link> | <Link to="/tracker">Tracker</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <h1>Welcome to Tracker UI</h1>
      <p>You need to have an account to use Tracker</p>
      <Link to="/signin">
        <button>Sign In</button>
      </Link>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
    </div>
  );
};

export default Home;
