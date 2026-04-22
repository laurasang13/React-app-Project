import styles from "../Navbar/Navbar.module.css";
import { NavLink } from 'react-router-dom';
import logo from "../../../public/icons/MindVibesLogo.png";
import { useNavigate } from "react-router-dom";


function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className={styles["navbar"]}>
        <h1 className={styles.logo}
        onClick={() => navigate("/HomePage")}
        >MindVibes</h1>
        <div className={styles["links"]}>
            <button className={styles["button"]}>Login</button>
        </div>
    </nav>
  );
}

export default Navbar;