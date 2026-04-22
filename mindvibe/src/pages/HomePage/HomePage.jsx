import { useNavigate } from "react-router-dom";
import styles from"./HomePage.module.css";
import logo from "../../../public/icons/MindVibesLogo.png";

function HomePage() {
  const navigate = useNavigate();

  return (
    <article >
      <div className={styles["home-container"]}>
        <img src={logo} alt="MindVibe" className={styles["logoHome"]} />
        <p className={styles["description"]}> Transform the noise of your thoughts into a melody you can understand. The first step to feeling better is allowing yourself to feel everything.</p>
      </div>

      <div className={styles["button-container"]}>
        <button className={styles["button"]} onClick={() => navigate("/feelings")}>
          Explore
        </button>

        <button className={styles["moodsUser"]} onClick={() => navigate("/feelings")}>
          Sign up
        </button>
      </div>
    </article>
  );
}

export default HomePage;