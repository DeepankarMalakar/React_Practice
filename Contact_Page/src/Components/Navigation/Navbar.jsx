import styles from "./Navigation.module.css";

const Navbar = () => {
    return (
        <>
            <nav>
                <div className={styles["nav-container"]}> {/* Access class using bracket notation */}
                    <div className={styles["logo-container"]}>
                        <img src="https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689652.jpg" alt="Logo" />
                    </div>
                    <div className={styles["list-items"]}>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;