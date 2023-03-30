import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

const Header: React.FC = () => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div>
                <Link href="/" className={router.pathname == "/" ? styles.active : styles.link}>Mint</Link>
                <Link href="/main" className={router.pathname == "/main" ? styles.active : styles.link}>Main</Link>
            </div>
        </div>
    )
};

export default Header;