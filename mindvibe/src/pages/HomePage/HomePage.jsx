/*import styles from "./HomePage.module.css";

function Home() {
  return (
    <div className="home-container">
      <h1>MindVibes</h1>
      <p>If you want to start exploring your emotions, you're in the right place.</p>
    </div>
  )
}

export default Home;*/

import { useNavigate } from "react-router-dom";
import styles from"./HomePage.module.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={styles["home-container"]}>
      <h1>MindVibes</h1>
      <button onClick={() => navigate("/feelings")}>
        Empezar
      </button>
    </div>
  );
}

export default HomePage;